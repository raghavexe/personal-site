type Work = {
  role: string;
  org: string;
  period: string;
};

const workExperience: Work[] = [
  {
    role: "Summer intern",
    org: "Ericsson",
    period: "June 2025 - September 2025",
  },
  {
    role: "Contributor",
    org: "OpenJS",
    period: "October 2025 - January 2026",
  },
  {
    role: "Systems architect, Scrum Master, DevOps Engineering intern",
    org: "Lensara Technologies",
    period: "May 2025 - current",
  },
];

export default workExperience;
export type { Work };
