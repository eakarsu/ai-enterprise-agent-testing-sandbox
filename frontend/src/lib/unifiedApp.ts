import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  Database,
  FileText,
  Files,
  LayoutDashboard,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const suiteSourceOwners = ["Agent specs","Tool manifests","Test suites","Security prompts"];

const features = [
  {
    slug: "agent-test-lab",
    title: "Agent Test Lab",
    href: "/agent-test-lab",
    category: "Testing",
    icon: Bot,
    summary: "Agent builds, test scenarios, environments, fixtures, and execution status.",
    bullets: ["Agent Test Lab queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Agent Test Lab", value: "24", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "tool-permission-tests",
    title: "Tool Permission Tests",
    href: "/tool-permission-tests",
    category: "Security",
    icon: Workflow,
    summary: "Tool scopes, forbidden actions, privilege boundaries, and violations.",
    bullets: ["Tool Permission Tests queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Tool Permission Tests", value: "33", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "prompt-injection-suite",
    title: "Prompt Injection Suite",
    href: "/prompt-injection-suite",
    category: "Security",
    icon: Users,
    summary: "Injection attempts, jailbreak cases, defenses, success rate, and severity.",
    bullets: ["Prompt Injection Suite queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Prompt Injection Suite", value: "42", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "data-leakage-tests",
    title: "Data Leakage Tests",
    href: "/data-leakage-tests",
    category: "Privacy",
    icon: CalendarCheck,
    summary: "Sensitive data probes, redaction checks, leakage signals, and remediation owner.",
    bullets: ["Data Leakage Tests queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Data Leakage Tests", value: "51", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "workflow-failure-tests",
    title: "Workflow Failure Tests",
    href: "/workflow-failure-tests",
    category: "Reliability",
    icon: ClipboardList,
    summary: "Interrupted workflows, retry behavior, exception handling, and recovery quality.",
    bullets: ["Workflow Failure Tests queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Workflow Failure Tests", value: "60", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "regression-runs",
    title: "Regression Runs",
    href: "/regression-runs",
    category: "Quality",
    icon: FileText,
    summary: "Baseline tests, changed prompts, model versions, pass rates, and release gates.",
    bullets: ["Regression Runs queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Regression Runs", value: "69", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "adversarial-scenarios",
    title: "Adversarial Scenarios",
    href: "/adversarial-scenarios",
    category: "Safety",
    icon: BarChart3,
    summary: "Malicious users, conflicting instructions, unsafe requests, and refusal behavior.",
    bullets: ["Adversarial Scenarios queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Adversarial Scenarios", value: "78", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "sandbox-observability",
    title: "Sandbox Observability",
    href: "/sandbox-observability",
    category: "Observability",
    icon: PackageCheck,
    summary: "Traces, tool calls, latency, cost, errors, and debugging evidence.",
    bullets: ["Sandbox Observability queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Sandbox Observability", value: "87", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "release-gate-review",
    title: "Release Gate Review",
    href: "/release-gate-review",
    category: "Governance",
    icon: ShieldCheck,
    summary: "Required tests, open failures, risk acceptance, approvals, and launch decision.",
    bullets: ["Release Gate Review queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Release Gate Review", value: "96", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "test-reporting",
    title: "Test Reporting",
    href: "/test-reporting",
    category: "Reporting",
    icon: Activity,
    summary: "Executive summary, test coverage, high-risk findings, and remediation plan.",
    bullets: ["Test Reporting queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Test Reporting", value: "105", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "documents",
    title: "Documents",
    href: "/documents",
    category: "Core Platform",
    icon: Files,
    summary: "Enterprise Agent Testing Sandbox documents, evidence, attachments, and exports.",
    bullets: ["Documents","Controls","Audit trail"],
    metrics: [
      { label: "Documents", value: "48", note: 'Tracked' },
      { label: 'Open', value: "7", note: 'Needs review' },
      { label: 'Updated', value: "21", note: 'This week' },
    ],
  },
  {
    slug: "notifications",
    title: "Notifications",
    href: "/notifications",
    category: "Core Platform",
    icon: Bell,
    summary: "Enterprise Agent Testing Sandbox alerts, reminders, exceptions, and approvals.",
    bullets: ["Notifications","Controls","Audit trail"],
    metrics: [
      { label: "Notifications", value: "65", note: 'Tracked' },
      { label: 'Open', value: "10", note: 'Needs review' },
      { label: 'Updated', value: "29", note: 'This week' },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    href: "/integrations",
    category: "Core Platform",
    icon: Plug,
    summary: "Enterprise Agent Testing Sandbox connector health, sync status, and integration warnings.",
    bullets: ["Integrations","Controls","Audit trail"],
    metrics: [
      { label: "Integrations", value: "82", note: 'Tracked' },
      { label: 'Open', value: "13", note: 'Needs review' },
      { label: 'Updated', value: "37", note: 'This week' },
    ],
  },
  {
    slug: "profiles",
    title: "Profiles",
    href: "/profiles",
    category: "Core Platform",
    icon: UserRound,
    summary: "Enterprise Agent Testing Sandbox users, roles, teams, permissions, and ownership settings.",
    bullets: ["Profiles","Controls","Audit trail"],
    metrics: [
      { label: "Profiles", value: "99", note: 'Tracked' },
      { label: 'Open', value: "16", note: 'Needs review' },
      { label: 'Updated', value: "45", note: 'This week' },
    ],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: "Enterprise Agent Testing Sandbox assistant for triage, drafting, analysis, recommendations, and operational review.",
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: "Enterprise Agent Testing Sandbox AI tools for scoring, generation, extraction, classification, exception review, and reporting.",
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const supplementalFeatures = [
  {
    slug: "scenario-library",
    title: "Scenario Library",
    href: "/scenario-library",
    category: "Quality",
    icon: ShieldCheck,
    summary: "Scenario Library workspace for quality review, failure analysis, corrective actions, acceptance evidence, and release gates in Enterprise Agent Testing Sandbox.",
    bullets: ["Scenario Library queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Scenario Library", value: "90", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "regression-suites",
    title: "Regression Suites",
    href: "/regression-suites",
    category: "Quality",
    icon: Workflow,
    summary: "Regression Suites workspace for quality review, failure analysis, corrective actions, acceptance evidence, and release gates in Enterprise Agent Testing Sandbox.",
    bullets: ["Regression Suites queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Regression Suites", value: "99", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "red-team-runs",
    title: "Red Team Runs",
    href: "/red-team-runs",
    category: "Risk",
    icon: BarChart3,
    summary: "Red Team Runs workspace for risk scoring, exception review, mitigation tracking, escalation ownership, and trend analytics in Enterprise Agent Testing Sandbox.",
    bullets: ["Red Team Runs queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Red Team Runs", value: "108", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "golden-dataset-manager",
    title: "Golden Dataset Manager",
    href: "/golden-dataset-manager",
    category: "Quality",
    icon: ClipboardList,
    summary: "Golden Dataset Manager workspace for quality review, failure analysis, corrective actions, acceptance evidence, and release gates in Enterprise Agent Testing Sandbox.",
    bullets: ["Golden Dataset Manager queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Golden Dataset Manager", value: "117", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "evaluation-rubric-builder",
    title: "Evaluation Rubric Builder",
    href: "/evaluation-rubric-builder",
    category: "Governance",
    icon: CalendarCheck,
    summary: "Evaluation Rubric Builder workspace for approval routing, policy controls, ownership, exceptions, audit evidence, and management signoff in Enterprise Agent Testing Sandbox.",
    bullets: ["Evaluation Rubric Builder queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Evaluation Rubric Builder", value: "126", note: 'Active records' },
      { label: 'Exceptions', value: "7", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "release-gates",
    title: "Release Gates",
    href: "/release-gates",
    category: "Governance",
    icon: PackageCheck,
    summary: "Release Gates workspace for approval routing, policy controls, ownership, exceptions, audit evidence, and management signoff in Enterprise Agent Testing Sandbox.",
    bullets: ["Release Gates queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Release Gates", value: "135", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "10", note: 'Next 14 days' },
    ],
  },
  {
    slug: "failure-replay-lab",
    title: "Failure Replay Lab",
    href: "/failure-replay-lab",
    category: "Reliability",
    icon: Activity,
    summary: "Failure Replay Lab workspace for reliability signals, incident review, root cause, corrective actions, and operational readiness in Enterprise Agent Testing Sandbox.",
    bullets: ["Failure Replay Lab queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Failure Replay Lab", value: "144", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "11", note: 'Next 14 days' },
    ],
  }
] as const;

const productionPlatformFeatures = [
  {
    slug: "enterprise-identity-access",
    title: "Enterprise Identity & Access",
    href: "/enterprise-identity-access",
    category: "Production Platform",
    icon: ShieldCheck,
    summary: "Enterprise Identity & Access workspace for domain workflows, approvals, evidence, and reporting in Enterprise Agent Testing Sandbox.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Enterprise Identity & Access", value: "90", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "connector-operations-center",
    title: "Connector Operations Center",
    href: "/connector-operations-center",
    category: "Production Platform",
    icon: Workflow,
    summary: "Connector Operations Center workspace for domain workflows, approvals, evidence, and reporting in Enterprise Agent Testing Sandbox.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Connector Operations Center", value: "99", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "audit-export-center",
    title: "Audit Export Center",
    href: "/audit-export-center",
    category: "Production Platform",
    icon: BarChart3,
    summary: "Audit Export Center workspace for domain workflows, approvals, evidence, and reporting in Enterprise Agent Testing Sandbox.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Audit Export Center", value: "108", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "notification-delivery-ledger",
    title: "Notification Delivery Ledger",
    href: "/notification-delivery-ledger",
    category: "Production Platform",
    icon: ClipboardList,
    summary: "Notification Delivery Ledger workspace for domain workflows, approvals, evidence, and reporting in Enterprise Agent Testing Sandbox.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Notification Delivery Ledger", value: "117", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "observability-runbooks",
    title: "Observability & Runbooks",
    href: "/observability-runbooks",
    category: "Production Platform",
    icon: CalendarCheck,
    summary: "Observability & Runbooks workspace for domain workflows, approvals, evidence, and reporting in Enterprise Agent Testing Sandbox.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Observability & Runbooks", value: "126", note: 'Active records' },
      { label: 'Exceptions', value: "7", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "release-test-harness",
    title: "Release Test Harness",
    href: "/release-test-harness",
    category: "Production Platform",
    icon: PackageCheck,
    summary: "Release Test Harness workspace for domain workflows, approvals, evidence, and reporting in Enterprise Agent Testing Sandbox.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Release Test Harness", value: "135", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "10", note: 'Next 14 days' },
    ],
  },
  {
    slug: "production-gap-workspace",
    title: "Production Gap Workspace",
    href: "/production-gap-workspace",
    category: "Production Platform",
    icon: Activity,
    summary: "Production Gap Workspace workspace for domain workflows, approvals, evidence, and reporting in Enterprise Agent Testing Sandbox.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Production Gap Workspace", value: "144", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "11", note: 'Next 14 days' },
    ],
  }
] as const;

const allFeatures = [...features, ...supplementalFeatures, ...productionPlatformFeatures, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Production Readiness', href: '/production-readiness', icon: ShieldCheck },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  { name: 'Production Platform Controls', features: ['Enterprise Identity & Access', 'Connector Operations Center', 'Audit Export Center', 'Notification Delivery Ledger', 'Observability & Runbooks', 'Release Test Harness', 'Production Gap Workspace'] },
  { name: "Agent Evaluation Controls", features: ["Scenario Library","Regression Suites","Red Team Runs","Golden Dataset Manager","Evaluation Rubric Builder","Release Gates","Failure Replay Lab"] },
  {
    "name": "Testing",
    "features": [
      "Agent Test Lab"
    ]
  },
  {
    "name": "Security",
    "features": [
      "Tool Permission Tests",
      "Prompt Injection Suite"
    ]
  },
  {
    "name": "Privacy",
    "features": [
      "Data Leakage Tests"
    ]
  },
  {
    "name": "Reliability",
    "features": [
      "Workflow Failure Tests"
    ]
  },
  {
    "name": "Quality",
    "features": [
      "Regression Runs"
    ]
  },
  {
    "name": "Safety",
    "features": [
      "Adversarial Scenarios"
    ]
  },
  {
    "name": "Observability",
    "features": [
      "Sandbox Observability"
    ]
  },
  {
    "name": "Governance",
    "features": [
      "Release Gate Review"
    ]
  },
  {
    "name": "Reporting",
    "features": [
      "Test Reporting"
    ]
  },
  {
    "name": "Core Platform",
    "features": [
      "Documents",
      "Notifications",
      "Integrations",
      "Profiles"
    ]
  },
  {
    "name": "Intelligence Layer",
    "features": [
      "AI Assistant",
      "AI Tools"
    ]
  }
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: feature.title + ' is implemented as a dedicated Enterprise Agent Testing Sandbox workflow with records, AI assistance, approvals, audit, and reporting.',
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries([...features, ...supplementalFeatures, ...productionPlatformFeatures].map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: suiteSourceOwners,
      operatingQueues: [feature.title + ' records', feature.title + ' approvals', feature.title + ' exceptions'],
      outputs: [feature.title + ' dashboard', feature.title + ' export', feature.title + ' audit trail'],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'AI Tools', href: '/features/ai-tools' }],
    },
  ]),
);
