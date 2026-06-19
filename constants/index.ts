import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaRegEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export interface SkillItem {
  readonly skill_name: string;
  readonly iconSlug: string;
  readonly color: string;
}

export const SKILLS_DATA = [
  // --- LANGUAGES ---
  { skill_name: "C", iconSlug: "c", color: "#00599C" },
  { skill_name: "C#", iconSlug: "csharp", color: "#239120" },
  { skill_name: "C++", iconSlug: "cplusplus", color: "#00599C" },
  { skill_name: "Python", iconSlug: "python", color: "#3776AB" },
  { skill_name: "Java", iconSlug: "java", color: "#ED8B00" },
  { skill_name: "JavaScript", iconSlug: "javascript", color: "#F7DF1E" },
  { skill_name: "TypeScript", iconSlug: "typescript", color: "#3178C6" },
  { skill_name: "SQL", iconSlug: "azuresqldatabase", color: "#E34F26" },
  { skill_name: "HTML", iconSlug: "html5", color: "#E34F26" },
  { skill_name: "CSS", iconSlug: "css3", color: "#1572B6" },
  { skill_name: "Php", iconSlug: "php", color: "#777BB4" },
  { skill_name: "Ruby", iconSlug: "ruby", color: "#CC342D" },
  { skill_name: "Markdown", iconSlug: "markdown", color: "#000000" },

  // --- FRAMEWORKS / LIBRARIES ---
  { skill_name: "React", iconSlug: "react", color: "#61DAFB" },
  { skill_name: "React Router", iconSlug: "reactrouter", color: "#CA4245" },
  { skill_name: "Redux", iconSlug: "redux", color: "#764ABC" },
  { skill_name: "Next.js", iconSlug: "nextjs", color: "#000000" },
  { skill_name: "Three.js", iconSlug: "threejs", color: "#000000" },
  { skill_name: "Framer Motion", iconSlug: "framermotion", color: "#F024B6" },
  { skill_name: ".NET", iconSlug: "dot-net", color: "#512BD4" },
  { skill_name: "Django", iconSlug: "django", color: "#092E20" },
  { skill_name: "Express.js", iconSlug: "express", color: "#000000" },
  { skill_name: "Flask", iconSlug: "flask", color: "#000000" },
  { skill_name: "Spring", iconSlug: "spring", color: "#6DB33F" },
  { skill_name: "FastAPI", iconSlug: "fastapi", color: "#009688" },
  { skill_name: "Flutter", iconSlug: "flutter", color: "#02569B" },
  { skill_name: "Tailwind CSS", iconSlug: "tailwindcss", color: "#06B6D4" },
  { skill_name: "Angular", iconSlug: "angular", color: "#DD0031" },
  { skill_name: "Bootstrap", iconSlug: "bootstrap", color: "#7952B3" },
  { skill_name: "Prisma", iconSlug: "prisma", color: "#2D3748" },

  // --- DATABASES ---
  { skill_name: "MySQL", iconSlug: "mysql", color: "#4479A1" },
  { skill_name: "SQLite", iconSlug: "sqlite", color: "#003B57" },
  { skill_name: "PostgreSQL", iconSlug: "postgresql", color: "#4169E1" },
  { skill_name: "MongoDB", iconSlug: "mongodb", color: "#47A248" },

  // --- CLOUD / HOSTING ---
  { skill_name: "Vercel", iconSlug: "vercel", color: "#000000" },
  { skill_name: "Firebase", iconSlug: "firebase", color: "#000000" },
  { skill_name: "AWS", iconSlug: "amazonwebservices", color: "#FF9900" },
  { skill_name: "Google Cloud", iconSlug: "googlecloud", color: "#4285F4" },

  // --- TOOLS ---
  { skill_name: "Git", iconSlug: "git", color: "#F05032" },
  { skill_name: "Github", iconSlug: "github", color: "#181717" },
  { skill_name: "Vite", iconSlug: "vitejs", color: "#646CFF" },
  { skill_name: "Postman", iconSlug: "postman", color: "#FF6C37" },
  { skill_name: "Blender", iconSlug: "blender", color: "#E87D0D" },
  { skill_name: "Node.js", iconSlug: "nodejs", color: "#5FA04E" },
] as const;

export const LANGUAGES = [
  { skill_name: "C", iconSlug: "c", color: "#00599C" },
  { skill_name: "C#", iconSlug: "csharp", color: "#239120" },
  { skill_name: "C++", iconSlug: "cplusplus", color: "#00599C" },
  { skill_name: "Python", iconSlug: "python", color: "#3776AB" },
  { skill_name: "Java", iconSlug: "java", color: "#ED8B00" },
  { skill_name: "JavaScript", iconSlug: "javascript", color: "#F7DF1E" },
  { skill_name: "TypeScript", iconSlug: "typescript", color: "#3178C6" },
  { skill_name: "SQL", iconSlug: "azuresqldatabase", color: "#E34F26" },
  { skill_name: "HTML", iconSlug: "html5", color: "#E34F26" },
  { skill_name: "CSS", iconSlug: "css3", color: "#1572B6" },
  { skill_name: "Php", iconSlug: "php", color: "#777BB4" },
  { skill_name: "Ruby", iconSlug: "ruby", color: "#CC342D" },
  { skill_name: "Markdown", iconSlug: "markdown", color: "#000000" },
] as const;

export const FRAMEWORKS = [
  { skill_name: "React", iconSlug: "react", color: "#61DAFB" },
  { skill_name: "React Router", iconSlug: "reactrouter", color: "#CA4245" },
  { skill_name: "Redux", iconSlug: "redux", color: "#764ABC" },
  { skill_name: "Next.js", iconSlug: "nextjs", color: "#000000" },
  { skill_name: "Three.js", iconSlug: "threejs", color: "#000000" },
  { skill_name: "Framer Motion", iconSlug: "framermotion", color: "#F024B6" },
  { skill_name: ".NET", iconSlug: "dot-net", color: "#512BD4" },
  { skill_name: "Django", iconSlug: "django", color: "#092E20" },
  { skill_name: "Express.js", iconSlug: "express", color: "#000000" },
  { skill_name: "Flask", iconSlug: "flask", color: "#000000" },
  { skill_name: "Spring", iconSlug: "spring", color: "#6DB33F" },
  { skill_name: "FastAPI", iconSlug: "fastapi", color: "#009688" },
  { skill_name: "Flutter", iconSlug: "flutter", color: "#02569B" },
  { skill_name: "Tailwind CSS", iconSlug: "tailwindcss", color: "#06B6D4" },
  { skill_name: "Angular", iconSlug: "angular", color: "#DD0031" },
  { skill_name: "Bootstrap", iconSlug: "bootstrap", color: "#7952B3" },
  { skill_name: "Prisma", iconSlug: "prisma", color: "#2D3748" },
] as const;

export const DATABASES = [
  { skill_name: "MySQL", iconSlug: "mysql", color: "#4479A1" },
  { skill_name: "SQLite", iconSlug: "sqlite", color: "#4479A1" },
  { skill_name: "PostgreSQL", iconSlug: "postgresql", color: "#4479A1" },
  { skill_name: "MongoDB", iconSlug: "mongodb", color: "#47A248" },
] as const;

export const CLOUD = [
  { skill_name: "Vercel", iconSlug: "vercel", color: "#000000" },
  { skill_name: "Firebase", iconSlug: "firebase", color: "#000000" },
  { skill_name: "AWS", iconSlug: "amazonwebservices", color: "#FF9900" },
  { skill_name: "Google Cloud", iconSlug: "googlecloud", color: "#4285F4" },
] as const;

export const TOOLS = [
  { skill_name: "Git", iconSlug: "git", color: "#F05032" },
  { skill_name: "Github", iconSlug: "github", color: "#181717" },
  { skill_name: "Vite", iconSlug: "vitejs", color: "#646CFF" },
  { skill_name: "Postman", iconSlug: "postman", color: "#FF6C37" },
  { skill_name: "Blender", iconSlug: "blender", color: "#E87D0D" },
  { skill_name: "Node.js", iconSlug: "nodejs", color: "#5FA04E" },
] as const;

export const PROJECTS = [
  {
    title: "Cinescape",
    description:
      "Cinescape is a cutting-edge movie discovery platform that allows users to explore trending movies, search for their favorites, and delve into detailed movie information. Built with modern web technologies, it offers an immersive cinematic experience with a sleek and intuitive interface.",
    image: "/projects/cinescape.png",
    link: "https://cinescape-films.vercel.app/",
    github: "https://github.com/abhijithshetty12/cinescape",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "TypeScript",
      "TMDB API",
      "Firebase",
    ],
  },
  {
    title: "SkySense",
    description:
      "SkySense is a modern weather dashboard that combines real-time meteorological data with AI-powered predictions. Featuring glassmorphic UI in light and dark modes, it delivers clean forecasts, ensemble ML analytics, and intuitive visualizations for accurate, user-friendly weather insights.",
    image: "/projects/skysense.png",
    link: "https://skysense-weather.vercel.app/",
    github: "https://github.com/abhijithshetty12/skysense",
    tags: ["React", "Vite", "Tailwind CSS", "TypeScript", "Weather API"],
  },
  {
    title: "EduFlow",
    description:
      "EduFlow is an innovative educational platform designed to streamline the learning experience. It offers a comprehensive suite of tools and resources to facilitate effective teaching and learning, making education more accessible and engaging for students and educators alike.",
    image: "/projects/eduflow.png",
    link: "https://eduflow-education.vercel.app/",
    github: "https://github.com/abhijithshetty12/eduflow",
    tags: ["React", "Vite", "Tailwind CSS", "TypeScript", "Firebase"],
  },
] as const;

export const noteworthyProjects = [
  {
    title: "FinTrack",
    description:
      "FinTrack is a sleek, lightweight web application designed to help you take control of your financial life. Built with a robust Flask backend and a responsive vanilla JS frontend, it offers real-time insights into your spending habits through interactive visualizations.",
    github: "https://github.com/abhijithshetty12/FinTrack",
    link: "https://fintrack-vault.vercel.app/",
    tags: ["Python", "Flask", "JavaScript", "Chart.js", "MySQL"],
  },
  {
    title: "Academia",
    description:
      "A modern, fully-customized Java Swing desktop application for managing students and courses. Built with JDBC + MySQL and zero external UI libraries to ensure every visual detail is handcrafted using pure Swing.",
    github: "https://github.com/abhijithshetty12/Academia",
    tags: ["Java", "Swing", "JDBC", "MySQL", "Maven"],
  },
  {
    title: "Simple Banking System",
    description:
      "A modern, desktop-based banking application built with Python, Tkinter, and SQLite3. This project features a sophisticated UI inspired by Bento and Liquid Glass design principles, offering a seamless user experience for basic financial management.",
    github: "https://github.com/abhijithshetty12/Simple-Banking-System",
    tags: ["Python", "Tkinter", "SQLite3"],
  },
  {
    title: "Contact Manager",
    description:
      "A high-performance Java desktop application for contact management, featuring robust input validation and persistent data storage.",
    github: "https://github.com/abhijithshetty12/Contact-Manager",
    tags: ["Java", "Swing", "CSV Parsing"],
  },
  {
    title: "Hardware Shop Management",
    description:
      "A highly resilient enterprise management solution optimized for hardware distributors. Built on a desktop architecture utilizing C# Windows Forms and high-performance SQL Server schemas.",
    github: "https://github.com/abhijithshetty12/Hardware-Shop-Management",
    tags: ["C#", ".NET", "SQL Server"],
  },
  {
    title: "BFS Maze Solver",
    description:
      "A modern JavaFX application that visualizes the Breadth-First Search (BFS) algorithm as it navigates a 2D grid-based maze. This tool provides a clear visual representation of how pathfinding algorithms find the shortest path while avoiding obstacles.",
    github: "https://github.com/abhijithshetty12/MazeSolver",
    tags: ["Java", "Breadth-First Search", "Graph Traversal"],
  },
];

export const NAV_LINKS = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Skills",
    link: "/skills",
  },
  {
    title: "Experience",
    link: "/experience",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Contact",
    link: "/contact",
  },
] as const;

export const EDUCATION = [
  {
    school: "Thakur College of Engineering and Technology",
    degree: "Bachelor of Technology in AI & ML",
    year: "2025 - Present",
    description:
      "Pursuing a B.Tech degree with a focus on AI and ML, gaining expertise in cutting-edge technologies and applications in the field.",
  },
  {
    school: "Government Polytechnic Mumbai, Bandra",
    degree: "Diploma in Information Technology",
    year: "2022 - 2025",
    description:
      "Completed a Diploma in Information Technology, acquiring a strong foundation in computer science principles, programming languages, and software development.",
  },
  {
    school: "Powai Municipal English Medium School",
    degree: "SSLC",
    year: "2022",
    description:
      "Completed primary and secondary education with a focus on academics and extracurricular activities.",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/abhijithshetty12",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/abhijithshetty12/",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/trulyabhijith/",
  },
] as const;

export const INFO_CARDS = [
  {
    Icon: FaRegEnvelope,
    label: "Email",
    sub: "Direct inquiries",
    display: "abhijithshetty2006@gmail.com",
    href: "mailto:abhijithshetty2006@gmail.com",
  },
  {
    Icon: FiPhone,
    label: "Phone",
    sub: "Mon – Fri, 9 am – 6 pm IST",
    display: "+91 9082907975",
    href: "tel:+919082907975",
  },
  {
    Icon: FaMapMarkerAlt,
    label: "Location",
    sub: "Remote & On-site",
    display: "Mumbai, Maharashtra, IN",
    href: null,
  },
] as const;
