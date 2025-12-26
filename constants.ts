import { Experience, Project } from './types';

export const PERSONAL_INFO = {
  name: "GELILA NEBIYU",
  title: "Software Engineer | AI & Web Developer",
  email: "gelilanebiyu11@gmail.com", 
  phone: "+251996984391",
  location: "Addis Ababa, Ethiopia",
  about: "I am a 5th-year Software Engineering student at Addis Ababa Science and Technology University. I specialize in AI-driven solutions and web development, with hands-on experience in OCR systems, e-commerce platforms, and chatbot integration. I am passionate about building sustainable, tech-driven solutions that solve real-world problems.",
  resumeLink: "/resume.pdf", 
  socials: {
    github: "https://github.com/Gelila-Nebiyu", // Replace with your actual GitHub
    linkedin: "https://www.linkedin.com/in/gelila-nebiyu-6067b9313", // Replace with your actual LinkedIn
  }
};

export const SKILLS = [
  "Python", "JavaScript", "HTML", "CSS", "Node.js", "PHP", "C++", 
  "React", "OpenCV", "YOLO", "UI/UX Design", "Software Testing", "Data Analysis", "Cloud Fundamentals"
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Ethiopian AI Institute",
    role: "AI Intern",
    period: "06/2025 – 08/2025",
    description: [
      "Contributed to an Optical Character Recognition (OCR) project focused on digitizing Amharic text from images.",
      "Implemented image preprocessing using OpenCV (noise removal, thresholding) to improve data quality.",
      "Worked with YOLO and CRNN + CTC Loss models for text extraction and model evaluation.",
      "Refined training datasets and performed detailed annotation to support end-to-end AI development."
    ],
    skills: ["Python", "OpenCV", "YOLO", "CRNN", "AI Pipelines"]
  },

  {
    company: "Women Startup Founders Program",
    role: "Innovator & Founder (Alora)",
    period: "12/2024 – 01/2025",
    description: [
      "Participated in the INNOBIZ-K Ethiopia program supported by the Ministry of Labor and Skills.",
      "Developed the vision for 'Alora', a sustainable fashion marketplace.",
      "Received mentorship and business development training to scale tech-driven entrepreneurial solutions."
    ],
    skills: ["Entrepreneurship", "Business Strategy", "Product Vision"]
  },
  {
    company: "SheCodes",
    role: "Trainee",
    period: "05/2024 – Present",
    description: [
      "Completed intensive workshops in HTML, CSS, and JavaScript.",
      "Built responsive, interactive web projects focusing on modern frontend practices."
    ],
    skills: ["Web Development", "HTML5", "CSS3", "JavaScript"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Amharic OCR System",
    description: "An advanced Optical Character Recognition system designed to extract and digitize Amharic text. Used OpenCV for preprocessing and YOLO for text-area segmentation.",
    tags: ["Python", "OpenCV", "YOLO", "Deep Learning"],
    image: "https://picsum.photos/600/400?random=1",
    githubUrl: "https://github.com/Gelila-Nebiyu/AHW-OCR-model"
  },
  {
    title: "Alora E-commerce",
    description: "A sustainable fashion platform empowering small local businesses through an AI-driven marketplace for affordable, ethical products.",
    tags: ["UI/UX", "Sustainable Tech", "Marketplace"],
    image: "https://picsum.photos/600/400?random=2",
    githubUrl: "https://github.com/Gelila-Nebiyu/Alora"
  },
  
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Gelila Nebiyu's portfolio website. You represent her as a professional and enthusiastic Software Engineering student.

Gelila's profile:
- Current Status: 5th-year Software Engineering student at Addis Ababa Science and Technology University (AASTU).
- Key Strengths: AI (OCR, Computer Vision), Web Development, and Entrepreneurship.
- Highlighted Work: AI Intern at Ethiopian AI Institute, Founder of Alora, and contributor to OneHR Solutions.
- Skills: Python, JavaScript, HTML/CSS, Node.js, OpenCV, YOLO, UI/UX.

Your Tone: Professional, helpful, and Crimson Red/Academic-yet-innovative style.
Constraint: Keep answers concise (under 80 words).
Goal: Help visitors understand Gelila's value and encourage them to use the contact form or view her resume.
`;