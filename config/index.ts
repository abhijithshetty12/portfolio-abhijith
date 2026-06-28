import type { Metadata } from "next";

export const siteConfig: Metadata = {
  metadataBase: new URL("https://abhijithshetty.vercel.app"),
  title: "Abhijith Shetty",
  description: "An immersive 3D portfolio built with Next.js App Router, TypeScript, and Three.js. Features fluid Framer Motion animations and Tailwind CSS.",
  keywords: [
    "reactjs", "nextjs", "vercel", "react", "space-portfolio", "portfolio",
    "react-icons", "cn", "clsx", "3d-portfolio", "3d-website", "sonner",
    "framer-motion", "motion", "animation", "heroicons", "next-themes",
    "postcss", "prettier", "react-dom", "tailwindcss", "tailwindcss-animate",
    "ui/ux", "js", "javascript", "typescript", "eslint", "html", "css"
  ] as Array<string>,
  authors: {
    name: "Abhijith Shetty",
    url: "https://github.com/abhijithshetty12",
  },
  openGraph: {
    type: "website",
    title: "Abhijith Shetty | Engineering Portfolio",
    description: "An immersive 3D portfolio built with Next.js App Router, TypeScript, and Three.js. Features fluid Framer Motion animations and Tailwind CSS.",
    url: "https://abhijithshetty.vercel.app",
    siteName: "Abhijith Shetty Portfolio",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Abhijith Portfolio preview image displaying the engineering layout interface",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijith Shetty | Engineering Portfolio",
    description: "An immersive 3D portfolio built with Next.js App Router, TypeScript, and Three.js. Features fluid Framer Motion animations and Tailwind CSS.",
    images: ["/opengraph.png"],
  },
  other: {
    "article:published_time": "2026-06-17T18:09:32Z",
    "publish-date": "2026-06-17T18:09:32Z",
  },
};