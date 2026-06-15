import { ContactContent } from "@/components/main/contact";

export const metadata = {
  title: "Contact | Abhijith Shetty",
  description:
    "Have a project in mind or want to collaborate? Get in touch with Abhijith Shetty.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full">
      <ContactContent />
    </main>
  );
}
