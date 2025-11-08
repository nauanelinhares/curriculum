import { ArtProps } from "../../components/Drawing/types";
import { ExperienceProps } from "../../components/Experiences/types";
import { Language } from "../../components/SideMenu/types";

import { Skill } from "../../components/SideMenu/types";

import { Education } from "../../components/SideMenu/types";
import { SocialMediaProps } from "../../types/social-media";
import { UserProps } from "../../types/user";
import linkedinIcon from "../../assets/linkedin.png";
import instagramIcon from "../../assets/instagram.png";
import gmailIcon from "../../assets/gmail.png";

import ladyDimitrescu from "../../assets/lady_demistrecu.png";
import jinx from "../../assets/jinx.jpg";
import barrels from "../../assets/barrels.png";
import branch from "../../assets/branch.jpg";
import forest from "../../assets/forest.png";
import pear from "../../assets/pear.webp";
import player from "../../assets/player.png";
import randomPeople from "../../assets/random-people.png";
import random from "../../assets/random.png";
import trees from "../../assets/trees.webp";
import turkishWithFez from "../../assets/turkish_with_fez.jpg";
import turkish from "../../assets/turkish.webp";
import woman from "../../assets/woman.png";
import characterDesign from "../../assets/character_design.png";
import characterDesign2 from "../../assets/character_design_2.png";

export const education: Education[] = [
  {
    school: "Hacettepe University",
    degree: "Bachelor in Sculpture",
    period: "2021 - Present",
  },
];

export const skills: Skill[] = [
  { name: "Photoshop", level: 90 },
  { name: "Illustrator", level: 85 },
  { name: "Procreate", level: 95 },
  { name: "Character Design", level: 90 },
];

export const languages: Language[] = [
  { name: "English", level: "Fluent" },
  { name: "Portuguese", level: "Basic" },
  { name: "Turkish", level: "Native" },
];

export const experiences: ExperienceProps[] = [
  {
    company: "Masterpiece",
    title: "Sculpture Workshop Instructor",
    startDate: new Date(2022, 0, 1),
    endDate: new Date(2023, 0, 1),
    bulletPoints: [
      "I taught sculpture workshops to children and adults. I also helped them to create their own sculptures.",
    ],
    iconCompany: "iconCompany 1",
  },

  {
    company: "Freelancer",
    title: "Freelance Designer",
    startDate: new Date(2019, 0, 1),
    bulletPoints: [
      "5 Years of experience",
      "Designed characters and mascots for various projects.",
      "Created concepts and animations for NFT projects.",
    ],
    iconCompany: "iconCompany 2",
  },
  {
    company: "Stak games",
    title: "2D Concept Artist",
    startDate: new Date(2022, 0, 1),
    endDate: new Date(2023, 0, 1),
    bulletPoints: [
      "Contributed to character and environment design in game projects",
    ],
    iconCompany: "iconCompany 3",
  },
];

export const socialMedia: SocialMediaProps[] = [
  {
    label: "Linkedin",
    url: "https://www.linkedin.com/in/k%C3%BCbra-g%C3%B6nen-477169220/",
    icon: linkedinIcon,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/kbragnn/",
    icon: instagramIcon,
  },
  {
    label: "Email",
    url: "mailto:kubragnn.0@gmail.com",
    icon: gmailIcon,
  },
];

export const user: UserProps = {
  name: "Kübra Gönen",
  role: "Game Artist",
  email: "kubragnn.0@gmail.com",
  phone: "+90 532 123 45 67",
  address: "123 Main St, Anytown, USA",
  city: "Anytown",
  description: `
   I am a third-year Sculpture student at Hacettepe University with 5 years of freelance experience
   in character design, mascots, NFTs, and 2D game design. Proficient in tools like Photoshop, Illustrator, and Procreate. 
   I've contributed to game and NFT projects while also teaching sculpture workshops. 
   I enjoy combining traditional and digital skills to bring creative concepts to life. 
   Intermediate in English, with basic Portuguese knowledge.
   I'm passionate about art, design, and continuous learning.
  `,
};

export const drawings: ArtProps[] = [
  {
    image: turkishWithFez,
  },
  {
    image: turkish,
  },
  {
    image: ladyDimitrescu,
  },
  {
    image: jinx,
  },
  {
    image: barrels,
  },
  {
    image: branch,
  },
  {
    image: forest,
  },

  {
    image: player,
  },
  {
    image: randomPeople,
  },

  {
    image: random,
  },
  {
    image: pear,
  },
  {
    image: trees,
  },

  {
    image: woman,
  },
  {
    image: characterDesign,
  },
  {
    image: characterDesign2,
  },
];
