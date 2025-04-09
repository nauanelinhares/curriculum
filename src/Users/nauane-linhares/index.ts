import { ExperienceProps } from "../../components/Experiences/types";
import { Language } from "../../components/SideMenu/types";
import { Skill } from "../../components/SideMenu/types";
import { Education } from "../../components/SideMenu/types";
import { SocialMediaProps } from "../../types/social-media";
import { UserProps } from "../../types/user";

export const education: Education[] = [
  {
    school: "Instituto Tecnológico de Aeronáutica (ITA)",
    degree: "Engenharia Aeronáutica",
    period: "2020 - 2024",
  },
];

export const skills: Skill[] = [
  { name: "Illustrator", level: 85 },
  { name: "After Effects", level: 80 },
  { name: "Premiere", level: 80 },
  { name: "Python", level: 90 },
  { name: "C/C++", level: 85 },
  { name: "C#", level: 80 },
  { name: "Javascript", level: 85 },
  { name: "SQL", level: 85 },
  { name: "R", level: 75 },
  { name: "Excel", level: 90 },
  { name: "Power BI", level: 85 },
  { name: "Golang", level: 90 },
  { name: "Typescript", level: 85 },
];

export const languages: Language[] = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Turkish", level: "Intermediate" },
];

export const experiences: ExperienceProps[] = [
  {
    company: "Isaac",
    title: "Associate Software Engineer",
    startDate: new Date(2024, 10, 1), // November 2024
    bulletPoints: [
      "Developed a Golang API to manage credit operations for Credit FIDC",
      "Implemented client-facing interfaces using React and TypeScript",
      "Designed and deployed Kubernetes cronjobs with Humanitec",
      "Applied design patterns to improve code maintainability",
      "Built logging systems and debugged using Datadog and Metabase",
    ],
    iconCompany: "iconCompany",
  },
  {
    company: "Isaac",
    title: "Software Engineer Intern",
    startDate: new Date(2024, 3, 1), // April 2024
    endDate: new Date(2024, 10, 1), // November 2024
    bulletPoints: [
      "Worked on Credit FIDC API in Golang",
      "Built React and TypeScript Platform for credit services",
    ],
    iconCompany: "iconCompany",
  },
  {
    company: "Embraer",
    title: "Flight Operations Intern",
    startDate: new Date(2024, 0, 1), // January 2024
    endDate: new Date(2024, 2, 1), // March 2024
    bulletPoints: [
      "Automated aircraft performance checking with Python and Excel",
      "Developed Kotlin scripts for performance analysis",
    ],
    iconCompany: "iconCompany",
  },
  {
    company: "Isaac",
    title: "Business Analytics Intern",
    startDate: new Date(2023, 2, 1), // March 2023
    endDate: new Date(2023, 11, 1), // December 2023
    bulletPoints: [
      "Designed Pipefy custom forms for process streamlining",
      "Created tables with Dataform and BigQuery to prevent incorrect billing",
      "Built dashboards using Metabase for financial visibility",
      "Conducted A/B testing and data analysis with Python",
    ],
    iconCompany: "iconCompany",
  },
  {
    company: "Navi Capital",
    title: "Data Science Intern",
    startDate: new Date(2023, 0, 1), // January 2023
    endDate: new Date(2023, 1, 1), // February 2023
    bulletPoints: [
      "Developed REST API with FastAPI for Microsoft Project files",
      "Built interactive interface with PyQt6",
      "Created interactive dashboards with Streamlit and Plotly",
      "Designed custom Streamlit components with React integration",
    ],
    iconCompany: "iconCompany",
  },
];

export const extraActivities: ExperienceProps[] = [
  {
    company: "CASD - Curso Alberto Santos Dumont",
    title: "Executive Director - CASDinho",
    startDate: new Date(2021, 0, 1), // January 2021
    endDate: new Date(2022, 11, 31), // December 2022
    bulletPoints: [
      "Leveraged Power BI to analyze data from selection processes",
      "Achieved record-breaking 2,200+ registrations through targeted approach",
      "Served as Chemistry teacher and Olympics Coordinator",
    ],
    iconCompany: "iconCompany",
  },
];

export const socialMedia: SocialMediaProps[] = [
  {
    label: "Github",
    url: "https://github.com/nauanelinhares",
    icon: "iconGithub",
  },
  {
    label: "Email",
    url: "mailto:nauane.linhares@gmail.com",
    icon: "iconEmail",
  },
  {
    label: "Linkedin",
    url: "https://www.linkedin.com/in/nauane-linhares-61ba7b204/",
    icon: "iconLinkedin",
  },
];

export const user: UserProps = {
  name: "Nauane Linhares",
  role: "Software Engineer",
  email: "nauane.linhares@gmail.com",
  phone: "+55 88 992507747",
  address: "Av. Andrômeda, 1589, Jardim Satélite",
  city: "SÃO JOSÉ DOS CAMPOS, SP",
  description: `
   I am an Aerospace Engineer passionate about education and technology. I have volunteered as a teacher 
   and managed a preparatory course for underprivileged students. In the technology field, I have worked 
   on machine learning projects, including developing an AI that identifies Brazilian states from Google 
   Street View images and a Deep Q-Network (DQN) AI that learns to play the Chrome Dino Game.
   
   I have experience with Golang, TypeScript, React, Python, and various data analysis tools. My work spans 
   from API development to data visualization and analysis.
   
   Interests: Challenges, Education, Machine Learning, Data Analysis, Software Engineering
  `,
};
