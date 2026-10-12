import type { Metadata } from "next";
import { Lato, Federo, Caveat, Amatic_SC } from 'next/font/google';
import "./globals.css";
import Header from "@/components/layout/Header";
import Image from 'next/image';
import bg from '../public/background.png';
import Toast from "@/components/ui/Toast";
import Footer from "@/components/layout/Footer";

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

const lato = Lato({ 
  weight: ['300','400','700'],
  subsets: ['latin-ext'],
  variable: '--font-lato',
  display: 'swap',
});

const federo = Federo({ 
  weight: '400', 
  subsets: ['latin'], 
  variable: '--font-federo',
  display: 'swap',
});

const caveat = Caveat({ 
  subsets: ['latin-ext'], 
  variable: '--font-caveat',
  display: 'swap',
});

const amatic = Amatic_SC({ 
  weight: ['400', '700'], 
  subsets: ['latin-ext'], 
  variable: '--font-amatic',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
    >
      <body className={`
        ${lato.variable}
        ${federo.variable} 
        ${caveat.variable} 
        ${amatic.variable}
        min-h-page flex flex-col font-federo
      `}>
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
        <div className="fixed inset-0 -z-10">
          <Image 
            src={bg} 
            alt="" 
            fill 
            className="object-cover object-center" 
            priority
          />
        </div>
        <Header/>
        {children}
        <Footer />
        <Toast/>
        </body>
    </html>
  );
}
