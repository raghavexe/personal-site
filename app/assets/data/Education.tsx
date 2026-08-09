type Education = {
  school: string;
  program: string;
};

const education: Education[] = [
  {
    school: "International School of Hamburg",
    program: "IB Diploma",
  },
  {
    school: "University of Gothenburg",
    program: "Bachelors in Software Engineering and Management",
  },
  {
    school: "Technische Universität Darmstadt",
    program: "Masters in IT Security",
  },
  {
    school: "Linnaeus Universitet",
    program: "Discrete Mathematics, Calculus I and II, Linear Algebra",
  },
  {
    school: "Linköping Universitet",
    program: "Swedish B1",
  },
];

export default education;
export type { Education };
