export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  {
    "name": "Agent specs",
    "ownership": "Agent specs contributes operating evidence, workflows, control signals, and reporting inputs to Enterprise Agent Testing Sandbox.",
    "coverage": [
      "Agent Test Lab",
      "Tool Permission Tests",
      "AI tools",
      "Audit evidence"
    ]
  },
  {
    "name": "Tool manifests",
    "ownership": "Tool manifests contributes operating evidence, workflows, control signals, and reporting inputs to Enterprise Agent Testing Sandbox.",
    "coverage": [
      "Tool Permission Tests",
      "Prompt Injection Suite",
      "AI tools",
      "Audit evidence"
    ]
  },
  {
    "name": "Test suites",
    "ownership": "Test suites contributes operating evidence, workflows, control signals, and reporting inputs to Enterprise Agent Testing Sandbox.",
    "coverage": [
      "Prompt Injection Suite",
      "Data Leakage Tests",
      "AI tools",
      "Audit evidence"
    ]
  },
  {
    "name": "Security prompts",
    "ownership": "Security prompts contributes operating evidence, workflows, control signals, and reporting inputs to Enterprise Agent Testing Sandbox.",
    "coverage": [
      "Data Leakage Tests",
      "Workflow Failure Tests",
      "AI tools",
      "Audit evidence"
    ]
  }
];

export const dashboardMetrics: Metric[] = [
  { label: 'Workflow Areas', value: '10', note: 'Dedicated modules' },
  { label: 'Evidence Sources', value: '4', note: 'Mapped sources' },
  { label: 'AI Tools', value: '13', note: 'Suite copilots' },
  { label: 'Open Work', value: '64', note: 'Across workflows' },
];

export const healthMetrics: Metric[] = [
  { label: 'Connector Health', value: '96%', note: 'Pilot baseline' },
  { label: 'Audit Coverage', value: '100%', note: 'All workflows logged' },
  { label: 'Review Queue', value: '22', note: 'Needs owner action' },
  { label: 'Automation Runs', value: '348', note: 'Last 24 hours' },
];

export const dashboardModules = [
  "Agent Test Lab operating view",
  "Tool Permission Tests operating view",
  "Prompt Injection Suite operating view",
  "Data Leakage Tests operating view",
  "Workflow Failure Tests operating view",
  "Regression Runs operating view",
  "Adversarial Scenarios operating view",
  "Sandbox Observability operating view"
];
export const workflowHighlights = [
  "Agent Test Lab workflow with records, AI assist, approvals, audit, and reporting",
  "Tool Permission Tests workflow with records, AI assist, approvals, audit, and reporting",
  "Prompt Injection Suite workflow with records, AI assist, approvals, audit, and reporting",
  "Data Leakage Tests workflow with records, AI assist, approvals, audit, and reporting",
  "Workflow Failure Tests workflow with records, AI assist, approvals, audit, and reporting",
  "Regression Runs workflow with records, AI assist, approvals, audit, and reporting"
];
