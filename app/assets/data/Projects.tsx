export type Project = {
  name: string;
  description: string;
  tech: string;
  github?: string;
  live?: string; // deployed site URL, if it exists
  inProgress?: boolean;
};
const PersonalProjects: Project[] = [
  {
    name: "Home4U",
    description:
      "Built a Raspberry Pi–based home security system that uses motion sensors to detect movement and automatically trigger an alarm. Focused on real-time monitoring, sensor integration, and automated surveillance for smart home security.",
    tech: "Android, Raspberry Pi, C++",
    github: "https://github.com/raghavexe/Home4U",
  },
  {
    name: "Instagram JSON Export Dataset Generator",
    description:
      "Developed an open-source Python library that converts Instagram message exports into clean, structured datasets for LLM fine-tuning and AI training. Automates data cleaning, formatting, and preprocessing to simplify dataset creation.",
    tech: "Python, YAML, JSON",
    github: "https://github.com/raghavexe/chat-cleaner-for-instagram-dms",
  },
  {
    name: "CyberSafeAI",
    description:
      "Built an AI-powered web application that analyzes user-generated text for profanity, abusive language, and harmful content. Leveraged a custom-trained machine learning model to provide real-time feedback and encourage more respectful communication.",
    tech: "Python, Machine Learning, Google Cloud",
  },
  {
    name: "Java Text Search Embedding Library",
    description:
      "Created a Java library for generating vector embeddings and performing semantic text search. Enables efficient similarity matching and information retrieval beyond traditional keyword-based search.",
    tech: "Java, NLP, Text Embeddings",
    github: "https://github.com/raghavexe/Embeddings-Lib",
  },
  {
    name: "Recipes4U",
    description:
      "Developed a community-driven cooking platform where users can share recipes, enroll in cooking courses, and review dishes. Designed to encourage collaboration and knowledge sharing among home cooks.",
    tech: "JavaScript, MongoDB, HTML, CSS",
    github: "https://github.com/raghavexe/Recipes4U",
  },
  {
    name: "German Numberplates",
    description:
      "Built a searchable web application that allows users to identify German cities and districts from their vehicle registration prefixes, providing a fast and intuitive lookup experience.",
    tech: "PostgreSQL, JavaScript, HTML, CSS",
    github: "https://github.com/raghavexe/german-numberplates",
    live: "https://german-numberplates.vercel.app",
  },
  {
    name: "TU-Darmstadt Course Catalogue",
    description:
      "An offline desktop catalogue of TU Darmstadt Master's programme courses",
    tech: "TypeScript, Rust",
    github: "https://github.com/raghavexe/tu-darmstadt-catalogue",
  },
  {
    name: "Idrottshuset Bokning System",
    description: "A frontend redesign for a Sports Club Court Booking system",
    tech: "Javascript, HTML, CSS",
    github: "https://github.com/raghavexe/Idrottshuset-Bokning-System",
  },
];

export default PersonalProjects;
