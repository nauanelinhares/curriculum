
export interface Education {
    school: string;
    degree: string;
    period: string;
  }
  
export interface Skill {
    name: string;
    level: number;
  }
  
export interface Language {
    name: string;
    level: string;
  }
  
export interface SideMenuProps {
    education: Education[];
    skills: Skill[];
    languages: Language[];
  }