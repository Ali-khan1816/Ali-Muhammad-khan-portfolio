// Last edited by you@example.com @ 30/09/26 22:57.
// src/data/education.js
export const education = [
  {
    id: 1,
    title: "IC Design & Verification",
    institution: "PSEB INSPIRE Program, GIKI",
    period: "May 2026",
    result: "Fully funded course in digital IC design and verification",
    type: "Training",
  },
  {
    id: 2,
    title: "Bachelor's in Software Engineering",
    institution: "COMSATS University Islamabad, Abbottabad Campus",
    period: "2022 – 2026",
    result: "CGPA 3.02 / 4.00",
    type: "Degree",
  },
  {
    id: 3,
    title: "Intermediate (FSc)",
    institution: "Royal College of Sciences, Chakwal",
    period: "2019 – 2021",
    result: "904 / 1100 marks",
    type: "College",
  },
  {
    id: 4,
    title: "Matriculation",
    institution: "Government High School No. 1, Chakwal",
    period: "2019",
    result: "842 / 1100 marks",
    type: "School",
  },
];

// issuer: jis ne certificate diya (abhi khali hai, jaante hon to likh dein)
// link: certificate ki PDF ka path, jaise "/certificates/ai-ml.pdf" (public/certificates/ mein rakhein)
export const certifications = [
  { id: 1, title: "Professional Computer Course", issuer: "", link: null },
  { id: 2, title: "Introduction to AI and ML", issuer: "", link: null },
  { id: 3, title: "FYP Competition Certificate", issuer: "", link: null },
  { id: 4, title: "Foundation of Data Science", issuer: "", link: null },
  {
    id: 5,
    title: "Frontend Development – Experience Letter",
    issuer: "",
    link: null,
  },
  { id: 6, title: "Foundation of Project Management", issuer: "", link: null },
  { id: 7, title: "Introduction to AI", issuer: "", link: null },
];

export const recommendationLetters = 2;
