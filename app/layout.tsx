import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://psycholog-wojnarowska.pl"),
  title: {
    default: "Barbara Wojnarowska | Psycholog, Mediator, Pedagog Szczecin",
    template: "%s | Barbara Wojnarowska - Gabinet Psychologiczny",
  },
  description:
    "Psycholog dziecięcy i osób dorosłych, mediator oraz pedagog ze specjalnością w edukacji elementarnej z diagnozą i terapią pedagogiczną w Szczecinie.",
  keywords: [
    "psycholog Szczecin",
    "psycholog dziecięcy Szczecin",
    "mediator Szczecin",
    "terapia pedagogiczna Szczecin",
    "dobry psycholog",
    "pomoc psychologiczna",
    "Barbara Wojnarowska"
  ],
  openGraph: {
    title: "Barbara Wojnarowska | Psycholog i Mediator Szczecin",
    description: "Profesjonalne wsparcie psychologiczne dla dzieci i dorosłych. Mediacje i terapia pedagogiczna.",
    url: "https://psycholog-wojnarowska.pl",
    siteName: "Gabinet Psychologiczny Barbara Wojnarowska",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": "Barbara Wojnarowska",
              "description": "Psycholog dziecięcy i dorosłych, mediator, terapeuta w Szczecinie.",
              "url": "https://psycholog-wojnarowska.pl",
              "telephone": "+48790798993",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Szczecin",
                "addressCountry": "PL"
              },
              "medicalSpecialty": [
                "Psychology",
                "Pediatric Psychology"
              ]
            })
          }}
        />
        <Header/>
        {children}
        </body>
    </html>
  );
}
