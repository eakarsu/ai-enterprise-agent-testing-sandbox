import { NextRequest, NextResponse } from 'next/server';
import { aiTools, getAITool } from '@/lib/aiTools';
import { appendAuditEntry } from '@/lib/auditStore';
import { requireSession } from '@/lib/requestAuth';
import { governedQuery } from '@/lib/governedPostgres';

async function callConfiguredAI(system: string, prompt: string) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error('OPENROUTER_API_KEY is required');

  const baseUrl = (process.env.OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1').replace(/\/$/, '');
  const model = process.env.OPENROUTER_MODEL;
  if (!model) throw new Error('OPENROUTER_MODEL is required');
  const response = await fetch(baseUrl + '/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: prompt },
      ],
      temperature: 0.2,
    }),
  });

  if (!response.ok) {
    throw new Error('AI provider returned ' + response.status);
  }

  const payload = await response.json();
  const content = payload?.choices?.[0]?.message?.content as string | undefined;
  if (!content?.trim()) throw new Error('AI provider returned empty content');
  return { content, model };
}

export async function GET(request: NextRequest) {
  const session = await requireSession(request);
  if (session instanceof NextResponse) return session;
  return NextResponse.json({ tools: aiTools });
}

export async function POST(request: NextRequest) {
  const session = await requireSession(request);
  if (session instanceof NextResponse) return session;

  const body = await request.json().catch(() => null) as { toolId?: string; input?: string } | null;
  const tool = getAITool(body?.toolId || 'suite-assistant');
  const input = body?.input?.trim() || tool.defaultPrompt;
  const system = 'You are ' + tool.title + '. Stay inside this suite workflow. Return concise operational guidance with risks, next actions, and audit notes.';

  const ai = await callConfiguredAI(system, input);
  const persisted = await governedQuery<{ id: string }>(
    `INSERT INTO governed_app_ai_results(user_email, feature, input, output, model)
     VALUES($1, $2, $3::jsonb, $4, $5) RETURNING id::text`,
    [session.email, tool.id, JSON.stringify({ toolId: tool.id, input }), ai.content, ai.model],
  );

  await appendAuditEntry('AI Tools', ((session.firstName + ' ' + session.lastName).trim() || session.email) + ' ran ' + tool.title);

  return NextResponse.json({
    tool,
    input,
    id: persisted.rows[0].id,
    response: ai.content,
    provider: 'openrouter',
    model: ai.model,
    createdAt: new Date().toISOString(),
  });
}
