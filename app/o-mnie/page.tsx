import { Metadata } from 'next';
import AboutHero from './_components/AboutHero';
import AboutQualifications from './_components/AboutQualifications';
import AboutSpecializations from './_components/AboutSpecializations';

export const metadata: Metadata = {
  title: 'O mnie | Psycholog Barbara Wojnarowska',
  description: 'Psycholog, diagnosta i terapeuta. Poznaj moje kwalifikacje, doświadczenie zawodowe oraz obszary wsparcia dla dzieci, młodzieży i dorosłych.',
  openGraph: {
    title: 'O mnie | Psycholog Barbara Wojnarowska',
    description: 'Psycholog, diagnosta i terapeuta. Poznaj moje kwalifikacje, doświadczenie zawodowe oraz obszary wsparcia.',
    url: 'https://psycholog-wojnarowska.pl/o-mnie', 
    siteName: 'Psycholog Barbara Wojnarowska',
    locale: 'pl_PL',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <section className='
      bg-gradient-to-b from-ivory from-20% to-transparent to-[25%]'
    >
      <main className="
        flex min-h-screen flex-col items-center
        w-full pb-20"
      >
        <AboutHero />
        <AboutQualifications />
        <AboutSpecializations />
      </main>
    </section>
  );
}