import { Experience, Project } from './types';

export const PERSONAL_INFO = {
  name: "GELILA NEBIYU",
  title: "Senior Software Engineer",
  email: "GELILA_NEBIYU@email.com", 
  about: "I am a 5th-year Software Engineer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products using modern web technologies and AI integration.",
  resumeLink: "/resume.pdf", // PLACEHOLDER: Upload your file to public folder and update this path
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  }
};

export const SKILLS = [
  "Python", "Java", "JavaScript", "React", "SQL", "AWS", "Docker", "Git", 
  "TypeScript", "Node.js", "GraphQL", "Next.js", "Kubernetes", "PostgreSQL"
];

export const EXPERIENCE: Experience[] = [
  {
    company: "TechFlow Solutions",
    role: "Senior Frontend Engineer",
    period: "2022 - Present",
    description: [
      "Led the migration of a legacy monolith to a micro-frontend architecture using React and Module Federation.",
      "Improved site performance scores by 40% through code splitting, lazy loading, and asset optimization.",
      "Mentored 3 junior developers and established code quality standards and CI/CD pipelines."
    ],
    skills: ["React", "TypeScript", "AWS", "Next.js", "GraphQL"]
  },
  {
    company: "Innovate Corp",
    role: "Software Engineer",
    period: "2020 - 2022",
    description: [
      "Developed high-volume e-commerce features used by over 500k daily users.",
      "Collaborated with UX designers to implement a new design system using Tailwind CSS.",
      "Integrated third-party payment gateways (Stripe) and optimized checkout flows."
    ],
    skills: ["Vue.js", "Node.js", "PostgreSQL", "Redis", "Docker"]
  },
  {
    company: "StartUp Inc",
    role: "Junior Web Developer",
    period: "2019 - 2020",
    description: [
      "Built responsive landing pages and internal dashboards.",
      "Assisted in backend API development using Python/Django."
    ],
    skills: ["JavaScript", "Python", "Django", "HTML/CSS"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "A comprehensive dashboard for visualizing real-time market data with predictive analytics capabilities powered by machine learning models.",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    image: "https://picsum.photos/600/400?random=1",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Cloud Infrastructure Manager",
    description: "An infrastructure-as-code visualization tool that allows teams to manage AWS resources through a drag-and-drop interface.",
    tags: ["TypeScript", "AWS SDK", "Node.js", "React Flow"],
    image: "https://picsum.photos/600/400?random=2",
    githubUrl: "https://github.com"
  },
  {
    title: "E-Commerce Microservices",
    description: "A scalable backend architecture for a multi-vendor marketplace handling high concurrency.",
    tags: ["Go", "gRPC", "Kubernetes", "PostgreSQL"],
    image: "https://picsum.photos/600/400?random=3",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Gelila Nebiyu's portfolio website. Your role is to professionally and enthusiastically represent Gelila to potential employers or collaborators.

Here is Gelila's profile:
- Name: Gelila Nebiyu
- Role: Senior Software Engineer (5 Years Experience)
- Key Skills: Python, Java, JavaScript, React, SQL, AWS, Docker, Git.
- Experience:
  - Senior Frontend Engineer at TechFlow Solutions (2022-Present).
  - Software Engineer at Innovate Corp (2020-2022).
  - Junior Dev at StartUp Inc (2019-2020).
- Projects: AI Analytics Dashboard, Cloud Infra Manager, E-Commerce Microservices.

Tone: Professional, confident, yet approachable.
Constraint: Keep answers concise (under 100 words) unless asked for elaboration.
Goal: Encourage the user to hire Gelila or contact her via the contact form.
`;