import Image from 'next/image';
import aboutImage from '../../public/projekt_zdjęcia.png';
import Divider from '@/components/ui/Divider';
import { description, specialization } from '@/lib/constants/aboutMe';
import IvoryTile from '@/components/ui/IvoryTile';
import IvoryCard from '@/components/ui/IvoryCard';
import graduationCap from '@/images/aboutMe/graduation_cap.svg';
import diploma from '@/images/aboutMe/diploma.svg';
import suitcase from '@/images/aboutMe/suitcase.svg';
import bg from '@/images/aboutMe/aboutMe_bg-1.jpg';

export default function AboutPage() {
  return (
    <section className='bg-gradient-to-b from-ivory from-20% to-transparent to-[25%]'>
      <main className="flex min-h-screen flex-col items-center w-full pb-20">
        
        {/* --- 1. SEKCJA GŁÓWNA (Z OGRANICZENIEM SZEROKOŚCI) --- */}
        <div className="
          w-full max-w-5xl px-4 md:px-8 pt-12 md:pt-16 flex flex-col items-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-main mb-6">O mnie</h1>
          <Image
            src={aboutImage}
            alt="Portret psycholog Barbara Wojnarowska w gabinecie"
            className="mb-8 w-full object-cover object-center rounded-md max-h-[60vh]"
            priority
          />
          <Divider className='mb-8 w-full'/>
          <div className="w-full">
            {description.map((par, index) => (
              <p className='
                text-main whitespace-pre-line
                py-2 lg:text-lg' key={index}>
                {par}
              </p>
            ))}
          </div>
        </div>

        {/* --- 2. SEKCJA Z TŁEM NA PEŁNĄ SZEROKOŚĆ (FULL WIDTH) --- */}
        <section className="relative w-full py-16 mt-16 mb-16 overflow-hidden">
          <Image 
            src={bg} 
            alt="" 
            fill 
            className="object-cover object-center absolute inset-0 -z-10" 
          />
          
          {/* Wewnętrzny kontener, żeby tekst nie dotykał krawędzi ekranu */}
          <div className="w-full max-w-5xl mx-auto px-4 md:px-8">
            <h2 className='
              mb-8 text-2xl md:text-3xl lg:text-4xl
              font-bold text-ivory'
            >
              Kwalifikacje i doświadczenie
            </h2>
            
            <IvoryTile className='w-full px-6 md:px-10 py-8 md:py-10 flex flex-col shadow-lg'>
              <div className="flex flex-row items-center gap-4 w-full mb-6">
                <Image alt="" src={graduationCap} className='w-20 md:w-28 scale-110 h-auto text-main' aria-hidden loading="eager" />
                <h3 className='text-xl md:text-2xl font-bold text-main'>Kwalifikacje</h3>
              </div>
              <ul className='text-main font-semibold list-disc list-inside w-full mb-10 ml-2 md:ml-6 space-y-2'>
                <li className="pl-6 -indent-6">Uniwersytet SWPS w Poznaniu –&nbsp;magister&nbsp;psychologii, specjalność:&nbsp; psychologia kliniczna dzieci i młodzieży.</li>
                <li className="pl-6 -indent-6">Wyższa Szkoła Bankowa –&nbsp;magister&nbsp;pedagogiki, specjalność:&nbsp;edukacja elementarna z diagnozą i terapią pedagogiczną.</li>
              </ul>

              <div className="flex flex-row items-center gap-4 w-full mb-6">
                <Image alt="" src={diploma} className='w-20 md:w-28 scale-110 h-auto text-main' aria-hidden loading="eager" />
                <h3 className='text-xl md:text-2xl font-bold text-main'>Studia podyplomowe</h3>
              </div>
              <ul className='text-main font-semibold list-disc list-inside w-full mb-10 ml-2 md:ml-6 space-y-2'>
                <li className='pl-4'>Integracja Sensoryczna</li>
                <li className='pl-4'>Mediacje</li>
                <li className='pl-4'>Psychotraumatologia – w trakcie</li>
              </ul>

              <div className="flex flex-row items-center gap-4 w-full mb-6">
                <Image alt="" src={suitcase} className='w-20 md:w-28 scale-110 md:scale-100 h-auto text-main' aria-hidden loading="eager" />
                <h3 className='text-xl md:text-2xl font-bold text-main'>
                  Kwalifikacje zawodowe
                </h3>
              </div>
              <ul className='text-main font-semibold list-disc list-inside w-full ml-2 md:ml-6 space-y-2'>
                <li>Terapeuta Integracji Sensorycznej</li>
                <li>Terapeuta ręki</li>
                <li className="pl-6 -indent-6">Trener Treningu Umiejętności Społecznych&nbsp;(TUS)</li>
                <li>Mediator sądowy</li>
                <li className="pl-6 -indent-6">Terapia Skoncentrowana na Rozwiązaniach&nbsp;(TSR)</li>
                <li className="mt-6 list-none">
                  <span className='font-bold'>Diagnoza psychologiczna z wykorzystaniem wystandaryzowanych narzędzi:</span>
                  <ul className='list-[circle] list-inside w-full mt-3 ml-4 space-y-1'>
                    <li>Stanford–Binet 5 (SB5)</li>
                    <li>Conners 3</li>
                    <li>DIVA-5</li>
                  </ul>
                </li>
              </ul>
            </IvoryTile>
            <h3 className='my-8 text-2xl md:text-3xl lg:text-4xl font-bold text-ivory'>Członkostwo</h3>
            <p className='mb-8 text-lg text-ivory whitespace-pre-line'>
              {`Członek Polskiego Towarzystwa Terapii Skoncentrowanej na Rozwiązaniach.\n
              Regularnie uczestniczę w szkoleniach i konferencjach, stale rozwijając swoje kompetencje zawodowe zgodnie z aktualną wiedzą i standardami pracy psychologa.`}
            </p>
          </div>
        </section>

        {/* --- 3. SPECJALIZACJE (Z OGRANICZENIEM SZEROKOŚCI) --- */}
        <div className="w-full max-w-5xl px-4 md:px-8 flex flex-col">
          <h2 className='
            mb-4 text-2xl md:text-3xl lg:text-4xl
            font-bold text-main'
          >
            Specjalizacje i obszary wsparcia
          </h2>
          <p className='mb-10 text-green-800 lg:text-lg'>
            Oferuję konsultacje psychologiczne, diagnozę psychologiczną oraz wsparcie dzieci, młodzieży i osób dorosłych. Pomagam osobom doświadczającym trudności emocjonalnych, rozwojowych oraz kryzysów życiowych.
          </p>
          
          <div className='
            w-full flex flex-col items-center gap-8
            lg:grid lg:grid-cols-2 lg:items-stretch'
          >
            {specialization.map((el, index) => (
              <IvoryCard
                key={el.title ? el.title : `spec-card-${index}`}
                title={el.title}
                list={el.specialties}
                icon={
                  <Image
                    alt=""
                    src={el.image}
                    className={`
                      w-40 md:w-60 h-auto
                      object-cover object-center text-main
                      ${index === 0 ? 'scale-140' : ''}`}
                    aria-hidden
                    loading="eager"
                  />
                }
                splitList={index === 0 ? true : false}
              />
            ))}
          </div>
        </div>

      </main>
    </section>
  );
}