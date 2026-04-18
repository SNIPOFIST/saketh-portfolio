export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  details?: string[];
}

const education: Education[] = [
  {
    id: "syracuse",
    institution: "Syracuse University",
    degree: "M.S. Applied Data Science | AI Minor",
    period: "Dec 2025",
    location: "Syracuse, NY",
    gpa: "3.9 / 4.0",
    details: [
      "School of Information Studies",
      "Relevant Coursework: Applied Machine Learning, DBMS, Quant & Statistics, NLP, Big Data Analytics",
    ],
  },
  {
    id: "bits-pilani",
    institution: "BITS Pilani, Goa",
    degree: "B.E. Electronics and Communications Engineering",
    period: "May 2023",
    location: "Goa, India",
    details: [],
  },
];

export default education;
