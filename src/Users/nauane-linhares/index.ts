import { ExperienceProps } from "../../components/Experiences/types";
import { Language, SkillCategory } from "../../components/SideMenu/types";
import { Education } from "../../components/SideMenu/types";
import { SocialMediaProps } from "../../types/social-media";
import { UserProps } from "../../types/user";
import { ProjectProps } from "../../components/Projects/types";

export const education: Education[] = [
  {
    school: "Aeronautics Institute of Technology",
    degree: "Bachelor's Degree - Major in Aeronautical Engineering",
    period: "Jan 2020 - Jun 2024",
    location: "São José dos Campos, Brazil",
    gpa: "3.33/4.00",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages and related tools",
    skills: [
      { name: "Python", level: 90 },
      { name: "C/C++", level: 85 },
      { name: "C#", level: 80 },
      { name: "Javascript", level: 85 },
      { name: "SQL", level: 85 },
      { name: "R", level: 75 },
      { name: "Excel", level: 90 },
      { name: "Power BI", level: 85 },
      { name: "Golang", level: 90 },
      { name: "Rust", level: 70 },
      { name: "Typescript", level: 85 },
      { name: "TensorFlow", level: 80 },
    ],
  },
  {
    name: "Miscellaneous",
    skills: [
      { name: "Illustrator", level: 85 },
      { name: "After Effects", level: 80 },
      { name: "Premiere", level: 80 },
    ],
  },
];

export const languages: Language[] = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Intermediate" },
  { name: "Turkish", level: "Beginner" },
];

export const experiences: ExperienceProps[] = [
  {
    company: "Isaac",
    title: "Software Engineer I",
    startDate: new Date(2025, 0, 1),
    bulletPoints: [
      "Identified and fixed critical bugs, resulting in millions in savings for the company.",
      "Played a key role in migrating the front-end design for school interfaces, significantly impacting user experience.",
    ],
    iconCompany: "iconCompany",
  },
  {
    company: "Isaac",
    title: "Software Engineer Intern",
    startDate: new Date(2024, 3, 1),
    endDate: new Date(2025, 0, 1),
    bulletPoints: [
      "Developed a Golang API to manage and support credit operations for the company's Credit FIDC, ensuring performance and scalability",
      "Implemented client-facing credit interfaces using React and TypeScript.",
      "Designed and deployed Kubernetes Cronjobs with Humanitec for daily data storage.",
      "Applied design patterns, such as Builders, to create test setups, simplifying test component configurations and improving code maintainability.",
      "Built logging systems and debugged issues using Datadog and Metabase.",
    ],
    iconCompany: "iconCompany",
  },
  {
    company: "Embraer",
    title: "Software Performance Intern",
    startDate: new Date(2024, 0, 1),
    endDate: new Date(2024, 2, 1),
    bulletPoints: [
      "Automated aircraft performance checks using Python for Excel tasks.",
      "Developed Kotlin scripts to measure and analyze aircraft performance.",
    ],
    iconCompany: "iconCompany",
  },
  {
    company: "Isaac",
    title: "Business Analytics Intern",
    startDate: new Date(2023, 2, 1),
    endDate: new Date(2023, 11, 1),
    bulletPoints: [
      "Designed custom Pipefy forms to streamline blocking processes for schools and guardians.",
      "Developed tables using Dataform and BigQuery to prevent incorrect billing.",
      "Built Metabase dashboards to visualize billing status for guardians and schools.",
      "Conducted A/B tests and data analysis using Python for billing platform evaluation.",
    ],
    iconCompany: "iconCompany",
  },
  {
    company: "Navi Capital",
    title: "Data Science Intern",
    startDate: new Date(2023, 0, 1),
    endDate: new Date(2023, 1, 1),
    bulletPoints: [
      "Developed a REST API with FastAPI to process Microsoft Project files for task criticality analysis.",
      "Built a real-time updating GUI using PyQt6 for non-technical users.",
      "Created interactive dashboards with Streamlit for project progress visualization.",
      "Designed custom Streamlit components integrating React-based elements.",
    ],
    iconCompany: "iconCompany",
  },
];

export const projects: ProjectProps[] = [
  {
    title: "Playing Geoguessr And Identifying Brazilian States With Computer Vision",
    bulletPoints: [
      "Developed a web scraping pipeline using Python and Selenium to collect a diverse image dataset of Brazilian states from Google Images.",
      "Implemented and trained a computer vision model using TensorFlow for geographic image classification.",
      "Achieved high classification performance, reaching approximately 90% accuracy in distinguishing states such as Rio de Janeiro and São Paulo.",
    ],
  },
  {
    title: "GraphRAG with Aircraft Accident Reports",
    bulletPoints: [
      "Developed a query system to answer questions about air traffic in Brazil, ranging from simple weather forecasts to complex causes of air accidents.",
      "Utilized Python, Streamlit for the interface, Nebula Graph for knowledge graph management, and LlamaHub/Ollama for language model execution.",
      "Leveraged Cohere Rerank to enhance search system responses.",
      "Enabled real-time inquiries on flight conditions, regulatory standards, and meteorological analysis (METAR/TAF data).",
      "Identified risk patterns and causes of delays or accidents.",
    ],
  },
];

export const extraActivities: ExperienceProps[] = [
  {
    company: "CASD - Community Preparatory Course",
    title: "Executive Director",
    startDate: new Date(2021, 0, 1),
    endDate: new Date(2022, 11, 31),
    bulletPoints: [
      "Analyzed admissions data using Power BI, identifying key applicant sources and contributing to a record 2,200+ registrations.",
      "Developed Google Apps Script solutions to automate tracking of team metrics, OKRs, and olympiad research via spreadsheets.",
      "Built a WhatsApp bot to provide automated assistance to parents regarding application inquiries, enhancing communication efficiency.",
      "Led the Director-level team responsible for managing volunteer staff and operations for a community preparatory course serving 760 students.",
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
  name: "Nauane L. Nascimento",
  role: "Software Engineer",
  email: "nauane.linhares@gmail.com",
  phone: "+55 88 992507747",
  address: "São José dos Campos",
  city: "São José dos Campos",
  state: "SP",
  country: "Brazil",
  description: `I am an Aeronautical Engineer passionate about education and technology. I have volunteered as a teacher and managed a preparatory course for underprivileged students. In the technology field, I have worked on machine learning projects, including developing an AI that identifies Brazilian states from Google Street View images and a Deep Q-Network (DQN) AI that learns to play the Chrome Dino game.`,
  researchInterests: "Computer Vision, Reinforcement Learning, AI, Software Development",
};
