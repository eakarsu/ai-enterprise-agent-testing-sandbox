export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  [
    "agent-test-lab",
    "Agent Test Lab Records",
    "Agent Test Lab priority queue",
    "Open",
    "Agent Test Lab exception list",
    "Testing Lead",
    "$0"
  ],
  [
    "tool-permission-tests",
    "Tool Permission Tests Records",
    "Tool Permission Tests priority queue",
    "Review",
    "Tool Permission Tests exception list",
    "Security Lead",
    "$0"
  ],
  [
    "prompt-injection-suite",
    "Prompt Injection Suite Records",
    "Prompt Injection Suite priority queue",
    "Action needed",
    "Prompt Injection Suite exception list",
    "Security Lead",
    "$0"
  ],
  [
    "data-leakage-tests",
    "Data Leakage Tests Records",
    "Data Leakage Tests priority queue",
    "Open",
    "Data Leakage Tests exception list",
    "Privacy Lead",
    "$0"
  ],
  [
    "workflow-failure-tests",
    "Workflow Failure Tests Records",
    "Workflow Failure Tests priority queue",
    "Review",
    "Workflow Failure Tests exception list",
    "Reliability Lead",
    "$0"
  ],
  [
    "regression-runs",
    "Regression Runs Records",
    "Regression Runs priority queue",
    "Action needed",
    "Regression Runs exception list",
    "Quality Lead",
    "$0"
  ],
  [
    "adversarial-scenarios",
    "Adversarial Scenarios Records",
    "Adversarial Scenarios priority queue",
    "Open",
    "Adversarial Scenarios exception list",
    "Safety Lead",
    "$0"
  ],
  [
    "sandbox-observability",
    "Sandbox Observability Records",
    "Sandbox Observability priority queue",
    "Review",
    "Sandbox Observability exception list",
    "Observability Lead",
    "$0"
  ],
  [
    "release-gate-review",
    "Release Gate Review Records",
    "Release Gate Review priority queue",
    "Action needed",
    "Release Gate Review exception list",
    "Governance Lead",
    "$0"
  ],
  [
    "test-reporting",
    "Test Reporting Records",
    "Test Reporting priority queue",
    "Open",
    "Test Reporting exception list",
    "Reporting Lead",
    "$0"
  ],
  [
    "documents",
    "Documents Records",
    "Documents priority queue",
    "Review",
    "Documents exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "notifications",
    "Notifications Records",
    "Notifications priority queue",
    "Action needed",
    "Notifications exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "integrations",
    "Integrations Records",
    "Integrations priority queue",
    "Open",
    "Integrations exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "profiles",
    "Profiles Records",
    "Profiles priority queue",
    "Review",
    "Profiles exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "ai-assistant",
    "AI Assistant Records",
    "AI Assistant priority queue",
    "Action needed",
    "AI Assistant exception list",
    "Intelligence Layer Lead",
    "$0"
  ],
  [
    "ai-tools",
    "AI Tools Records",
    "AI Tools priority queue",
    "Open",
    "AI Tools exception list",
    "Intelligence Layer Lead",
    "$0"
  ]
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-06-03', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-06-06', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} audit queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-06-10', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
