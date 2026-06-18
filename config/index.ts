import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Abhijith Shetty",
  description: "Welcome to my full stack Next.js 14 space portfolio.",
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "space-portfolio",
    "portfolio",
    "react-icons",
    "cn",
    "clsx",
    "3d-portfolio",
    "3d-website",
    "sonner",
    "framer-motion",
    "motion",
    "animation",
    "heroicons",
    "next-themes",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "css",
  ] as Array<string>,
  authors: {
    name: "Abhijith Shetty",
    url: "https://github.com/abhijithshetty12",
  },
  openGraph: {
    type: "website",
    title: "Abhijith Shetty",
    description: "Welcome to my full stack Next.js 14 portfolio.",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Abhijith Portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijith Shetty",
    description: "Welcome to my full stack Next.js 14 space portfolio.",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Abhijith Portfolio preview",
      },
    ],
  },
} as const;

