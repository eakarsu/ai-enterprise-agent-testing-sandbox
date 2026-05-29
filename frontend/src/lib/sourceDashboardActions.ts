export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "agent-test-lab",
    "label": "Agent Test Lab",
    "description": "Agent Test Lab action group for Enterprise Agent Testing Sandbox.",
    "href": "/agent-test-lab",
    "sourceProjects": [
      "Agent specs",
      "Tool manifests"
    ],
    "examples": [
      "Open Agent Test Lab",
      "Review Testing",
      "Run Agent Test Lab AI check"
    ],
    "count": 3
  },
  {
    "id": "tool-permission-tests",
    "label": "Tool Permission Tests",
    "description": "Tool Permission Tests action group for Enterprise Agent Testing Sandbox.",
    "href": "/tool-permission-tests",
    "sourceProjects": [
      "Tool manifests",
      "Test suites"
    ],
    "examples": [
      "Open Tool Permission Tests",
      "Review Security",
      "Run Tool Permission Tests AI check"
    ],
    "count": 3
  },
  {
    "id": "prompt-injection-suite",
    "label": "Prompt Injection Suite",
    "description": "Prompt Injection Suite action group for Enterprise Agent Testing Sandbox.",
    "href": "/prompt-injection-suite",
    "sourceProjects": [
      "Test suites",
      "Security prompts"
    ],
    "examples": [
      "Open Prompt Injection Suite",
      "Review Security",
      "Run Prompt Injection Suite AI check"
    ],
    "count": 3
  },
  {
    "id": "data-leakage-tests",
    "label": "Data Leakage Tests",
    "description": "Data Leakage Tests action group for Enterprise Agent Testing Sandbox.",
    "href": "/data-leakage-tests",
    "sourceProjects": [
      "Security prompts"
    ],
    "examples": [
      "Open Data Leakage Tests",
      "Review Privacy",
      "Run Data Leakage Tests AI check"
    ],
    "count": 3
  },
  {
    "id": "workflow-failure-tests",
    "label": "Workflow Failure Tests",
    "description": "Workflow Failure Tests action group for Enterprise Agent Testing Sandbox.",
    "href": "/workflow-failure-tests",
    "sourceProjects": [
      "Agent specs",
      "Tool manifests"
    ],
    "examples": [
      "Open Workflow Failure Tests",
      "Review Reliability",
      "Run Workflow Failure Tests AI check"
    ],
    "count": 3
  },
  {
    "id": "regression-runs",
    "label": "Regression Runs",
    "description": "Regression Runs action group for Enterprise Agent Testing Sandbox.",
    "href": "/regression-runs",
    "sourceProjects": [
      "Tool manifests",
      "Test suites"
    ],
    "examples": [
      "Open Regression Runs",
      "Review Quality",
      "Run Regression Runs AI check"
    ],
    "count": 3
  },
  {
    "id": "adversarial-scenarios",
    "label": "Adversarial Scenarios",
    "description": "Adversarial Scenarios action group for Enterprise Agent Testing Sandbox.",
    "href": "/adversarial-scenarios",
    "sourceProjects": [
      "Test suites",
      "Security prompts"
    ],
    "examples": [
      "Open Adversarial Scenarios",
      "Review Safety",
      "Run Adversarial Scenarios AI check"
    ],
    "count": 3
  },
  {
    "id": "sandbox-observability",
    "label": "Sandbox Observability",
    "description": "Sandbox Observability action group for Enterprise Agent Testing Sandbox.",
    "href": "/sandbox-observability",
    "sourceProjects": [
      "Security prompts"
    ],
    "examples": [
      "Open Sandbox Observability",
      "Review Observability",
      "Run Sandbox Observability AI check"
    ],
    "count": 3
  },
  {
    "id": "release-gate-review",
    "label": "Release Gate Review",
    "description": "Release Gate Review action group for Enterprise Agent Testing Sandbox.",
    "href": "/release-gate-review",
    "sourceProjects": [
      "Agent specs",
      "Tool manifests"
    ],
    "examples": [
      "Open Release Gate Review",
      "Review Governance",
      "Run Release Gate Review AI check"
    ],
    "count": 3
  },
  {
    "id": "test-reporting",
    "label": "Test Reporting",
    "description": "Test Reporting action group for Enterprise Agent Testing Sandbox.",
    "href": "/test-reporting",
    "sourceProjects": [
      "Tool manifests",
      "Test suites"
    ],
    "examples": [
      "Open Test Reporting",
      "Review Reporting",
      "Run Test Reporting AI check"
    ],
    "count": 3
  }
];
