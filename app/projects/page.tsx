import { Projects } from "@/components/main/projects";

export const metadata = {
  title: "Projects | Abhijith Shetty",
  description: "View my portfolio of projects and work samples.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-black h-full w-full pt-20">
      <Projects />
    </main>
  );
}
