import { Metadata } from "next";
import ContactForm from "@/app/kontakt/_components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Skontaktuj się z gabinetem psychologicznym...",
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-6 min-h-page">
      <h1 className="text-3xl font-bold text-center mb-4">Napisz do mnie</h1>
      <ContactForm />
    </main>
  );
}