type IndustryProjects = {
  name: string;
  description: string;
  tech: string;
};

const industrialProjects: IndustryProjects[] = [
  {
    name: "ERET (Ericsson Requirements Evaluation Tool)",
    description:
      "Developed an extension tool for analyzing requirements, integrating with Ericsson's proprietary AI to evaluate requirement quality. The tool processes requirement files, assesses language and context based on internal guidelines, generates statistics and evaluations, and provides recommendations or rewrites. It also includes a chatbot to answer queries based on file data.",
    tech: "JavaScript, VSC extensions, HTML, CSS, artificial intelligence, vector search, RegEx",
  },
  {
    name: "TrustLens AI (AI governance and regulation)",
    description:
      "Designed and developed the overall system architecture and tech stack for a distributed AI-driven compliance platform. Built a microservices-based backend using Kafka for event-driven communication, Redis for state management, and an API gateway (APISIX/Nginx) for routing and security. Contributed to core backend services, messaging pipelines, and Docker-based infrastructure across multiple components.",
    tech: "Python, Docker, Kafka, Redis, microservices architecture, system design, Nginx, APISIX, Bash, YAML",
  },
];

export default industrialProjects;
export type { IndustryProjects };
