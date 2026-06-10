export type EvidenceItem = {
  id: string;
  label: string;
  title: string;
  summary: string;
  detail: string;
  bullets: string[];
  reduction: number;
};

export const evidenceItems: EvidenceItem[] = [
  {
    id: "projects",
    label: "Module 01",
    title: "Projects",
    summary: "Winning builds, open-source contributions, and full-stack product execution.",
    detail:
      "Project evidence includes Bridger, a LinkedIn networking assistant that won 1st Overall at Born to Build, plus open-source contributions to Kubernetes, PyTorch, and Docker Compose.",
    bullets: [
      "Built a TypeScript Chrome extension with 50+ active users for storing and reusing LinkedIn profiles",
      "Designed an LLM-powered outreach flow that cut draft time by 90% and added Gmail API one-click delivery",
      "Shipped fixes to Kubernetes scheduler state, PyTorch error handling, and Docker Compose TTY rendering",
    ],
    reduction: 22,
  },
  {
    id: "experience",
    label: "Module 02",
    title: "Experience",
    summary: "Production internships with measurable technical and business impact.",
    detail:
      "Experience spans Rutgers-Web, VoiceBoticsAI, ProspectorAI, and an incoming GEICO internship, showing production engineering across internal tools, data pipelines, dashboards, and AI-driven automation.",
    bullets: [
      "Resolved 50+ production tickets at Rutgers-Web for a platform serving 150K+ users",
      "Built a yacht-listing scraping pipeline ingesting 1500+ listings daily into PostgreSQL and reduced manual review by 90%",
      "Built a Zillow lead-generation pipeline at ProspectorAI tied to $600K in revenue and improved purchase rate by 40%",
    ],
    reduction: 18,
  },
  {
    id: "skills",
    label: "Module 03",
    title: "Skills",
    summary: "Strong spread across full-stack, backend, data, and systems work.",
    detail:
      "Technical coverage includes Python, TypeScript, JavaScript, Go, Java, and SQL, with hands-on work in React, FastAPI, PostgreSQL, MongoDB, AWS, Docker, Kafka, and GraphQL.",
    bullets: [
      "Builds across product UI, backend services, data ingestion, and automation workflows",
      "Comfortable with distributed systems, concurrency, CI/CD, and machine learning-adjacent tooling",
      "Strong fit for roles that need both technical depth and product-minded execution",
    ],
    reduction: 16,
  },
  {
    id: "leadership",
    label: "Module 04",
    title: "Leadership",
    summary: "Teaching, mentorship, and clear evidence of leadership under responsibility.",
    detail:
      "As a Data Structures and Algorithms Teaching Assistant at Rutgers, Samarth leads three weekly recitations for 45+ students and designs quizzes and assignments that improve student performance significantly.",
    bullets: [
      "Led recurring algorithm and problem-solving sessions for 45+ students",
      "Helped students improve from 30-40% to 85-100% on pre/post quizzes",
      "Built hands-on coding assignments to reinforce class concepts through implementation",
    ],
    reduction: 14,
  },
  {
    id: "contact",
    label: "Module 05",
    title: "Final Dossier",
    summary: "Education, contact links, and the final employability signal.",
    detail:
      "Samarth is a Rutgers University student studying Computer Science and Data Science with a 3.8 GPA, backed by internships, shipping experience, open-source contributions, and direct product impact.",
    bullets: [
      "Education: Rutgers University - New Brunswick, B.S. in Computer Science and Data Science, expected May 2028",
      "Links: linkedin.com/in/samarth-verma2005, github.com/MaybeSam05, maybesam05.github.io",
      "Contact: samarthverma1108@gmail.com",
    ],
    reduction: 22,
  },
];
