# AI Enterprise Agent Testing Sandbox

Runnable Next.js full-stack app for Enterprise Agent Testing Sandbox.

## Workflows

- `/agent-test-lab` - Agent Test Lab (Testing): Agent builds, test scenarios, environments, fixtures, and execution status.
- `/tool-permission-tests` - Tool Permission Tests (Security): Tool scopes, forbidden actions, privilege boundaries, and violations.
- `/prompt-injection-suite` - Prompt Injection Suite (Security): Injection attempts, jailbreak cases, defenses, success rate, and severity.
- `/data-leakage-tests` - Data Leakage Tests (Privacy): Sensitive data probes, redaction checks, leakage signals, and remediation owner.
- `/workflow-failure-tests` - Workflow Failure Tests (Reliability): Interrupted workflows, retry behavior, exception handling, and recovery quality.
- `/regression-runs` - Regression Runs (Quality): Baseline tests, changed prompts, model versions, pass rates, and release gates.
- `/adversarial-scenarios` - Adversarial Scenarios (Safety): Malicious users, conflicting instructions, unsafe requests, and refusal behavior.
- `/sandbox-observability` - Sandbox Observability (Observability): Traces, tool calls, latency, cost, errors, and debugging evidence.
- `/release-gate-review` - Release Gate Review (Governance): Required tests, open failures, risk acceptance, approvals, and launch decision.
- `/test-reporting` - Test Reporting (Reporting): Executive summary, test coverage, high-risk findings, and remediation plan.

## Local Run

```bash
cd ai-enterprise-agent-testing-sandbox/frontend
npm run dev
```

Demo login: `admin@agent-testing.local` / `admin123`
