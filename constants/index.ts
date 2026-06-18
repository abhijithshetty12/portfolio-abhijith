import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  { skill_name: "HTML", image: "/skills/html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "/skills/css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "/skills/js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "/skills/tailwind.png", width: 80, height: 80 },
  { skill_name: "React", image: "/skills/react.png", width: 80, height: 80 },
  { skill_name: "Redux", image: "/skills/redux.png", width: 80, height: 80 },
  { skill_name: "React Query", image: "/skills/reactquery.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "/skills/ts.png", width: 80, height: 80 },
  { skill_name: "Next.js 14", image: "/skills/next.png", width: 80, height: 80 },
  { skill_name: "Framer Motion", image: "/skills/framer.png", width: 80, height: 80 },
  { skill_name: "Stripe", image: "/skills/stripe.png", width: 80, height: 80 },
  { skill_name: "Node.js", image: "/skills/node.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "/skills/mongodb.png", width: 40, height: 40 },
] as const;

export const FRONTEND_SKILL = [
  { skill_name: "HTML", image: "/skills/html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "/skills/css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "/skills/js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "/skills/tailwind.png", width: 80, height: 80 },
  { skill_name: "Material UI", image: "/skills/mui.png", width: 80, height: 80 },
  { skill_name: "React", image: "/skills/react.png", width: 80, height: 80 },
  { skill_name: "Redux", image: "/skills/redux.png", width: 80, height: 80 },
  { skill_name: "React Query", image: "/skills/reactquery.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "/skills/ts.png", width: 80, height: 80 },
  { skill_name: "Next.js 14", image: "/skills/next.png", width: 80, height: 80 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "Node.js", image: "/skills/node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "/skills/express.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "/skills/mongodb.png", width: 40, height: 40 },
  { skill_name: "Firebase", image: "/skills/firebase.png", width: 55, height: 55 },
  { skill_name: "PostgreSQL", image: "/skills/postgresql.png", width: 70, height: 70 },
  { skill_name: "MySQL", image: "/skills/mysql.png", width: 70, height: 70 },
  { skill_name: "Prisma", image: "/skills/prisma.png", width: 70, height: 70 },
  { skill_name: "Graphql", image: "/skills/graphql.png", width: 80, height: 80 },
] as const;

export const FULLSTACK_SKILL = [
  { skill_name: "React Native", image: "/skills/reactnative.png", width: 70, height: 70 },
  { skill_name: "Docker", image: "/skills/docker.png", width: 70, height: 70 },
  { skill_name: "Figma", image: "/skills/figma.png", width: 50, height: 50 },
] as const;

export const OTHER_SKILL = [
  { skill_name: "Go", image: "/skills/go.png", width: 60, height: 60 },
] as const;

export const PROJECTS = [
  {
    title: "Cinescape",
    description:
      "Cinescape is a cutting-edge movie discovery platform that allows users to explore trending movies, search for their favorites, and delve into detailed movie information. Built with modern web technologies, it offers an immersive cinematic experience with a sleek and intuitive interface.",
    image: "/projects/cinescape.png",
    link: "https://cinescape-films.vercel.app/",
    github: "https://github.com/abhijithshetty12/cinescape",
    tags: ["React", "Vite", "Tailwind CSS", "TypeScript","TMDB API", "Firebase"],
  },
  {
    title: "SkySense",
    description:
      'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience. Ditching the conventional static layout, this portfolio leverages interactive cards to showcase my skills, projects, and personality in an engaging and dynamic manner.',
    image: "/projects/skysense.png",
    link: "https://skysense-weather.vercel.app/",
    github: "https://github.com/abhijithshetty12/skysense",
    tags: ["React", "Vite", "Tailwind CSS", "TypeScript", "Weather API"],
  },
  {
    title: "EduFlow",
    description:
      'EduFlow is an innovative educational platform designed to streamline the learning experience. It offers a comprehensive suite of tools and resources to facilitate effective teaching and learning, making education more accessible and engaging for students and educators alike.',
    image: "/projects/eduflow.png",
    link: "https://eduflow-education.vercel.app/",
    github: "https://github.com/abhijithshetty12/eduflow",
    tags: ["React", "Vite", "Tailwind CSS", "TypeScript", "Firebase"],
  }
] as const;

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
    description: "Pursuing a B.Tech degree with a focus on AI and ML, gaining expertise in cutting-edge technologies and applications in the field.",
  },
  {
    school: "Government Polytechnic Mumbai, Bandra",
    degree: "Diploma in Information Technology",
    year: "2022 - 2025",
    description: "Completed a Diploma in Information Technology, acquiring a strong foundation in computer science principles, programming languages, and software development.",
  },
  {
    school: "Powai Municipal English Medium School",
    degree: "SSLC",
    year: "2022",
    description: "Completed primary and secondary education with a focus on academics and extracurricular activities.",
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