import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "psycholog-wjonarowska.pl",
  description: "Jestem psychologiem dziecięcym i osób dorosłych, mediatorem oraz pedagogiem ze specjalnością w edukacji elementarnej z diagnozą i terapią pedagogiczną",
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
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
