import { AboutContent } from "@/components/main/about";

export const metadata = {
  title: "About Me | Abhijith Shetty",
  description: "Learn more about me and my experience as a fullstack developer.",
};

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen w-full">
      <AboutContent />
    </main>
  );
}

