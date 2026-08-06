import Image from 'next/image';
import bg from '@/images/aboutMe/aboutMe_bg.jpg';
import IvoryTile from '@/components/ui/IvoryTile';
import graduationCap from '@/images/aboutMe/graduation_cap.svg';
import diploma from '@/images/aboutMe/diploma.svg';
import suitcase from '@/images/aboutMe/suitcase.svg';

export default function AboutQualifications() {
    return (
        <section className="relative w-full py-16 mt-16 mb-16 overflow-hidden">
          <Image 
            src={bg} 
            alt="" 
            fill 
            className="object-cover object-center absolute inset-0 -z-10" 
          />
          <div className="w-full max-w-5xl mx-auto px-4 md:px-8">
            <h2 className='
              mb-8 text-2xl md:text-3xl lg:text-4xl
              font-bold text-ivory'
            >
              Kwalifikacje i doświadczenie
            </h2>
            
            <IvoryTile className='w-full px-6 md:px-10 py-8 md:py-10 flex flex-col shadow-lg'>
              <div className="flex flex-row items-center gap-4 w-full mb-6">
                <Image alt="" src={graduationCap} className='w-20 md:w-28 scale-110 h-auto text-main' aria-hidden />
                <h3 className='text-xl md:text-2xl font-bold text-main'>Kwalifikacje</h3>
              </div>
              <ul className='text-main font-semibold list-disc list-inside w-full mb-10 ml-2 md:ml-6 space-y-2'>
                <li className="pl-6 -indent-6">Uniwersytet SWPS w Poznaniu –&nbsp;magister&nbsp;psychologii, specjalność:&nbsp; psychologia kliniczna dzieci i młodzieży.</li>
                <li className="pl-6 -indent-6">Wyższa Szkoła Bankowa –&nbsp;magister&nbsp;pedagogiki, specjalność:&nbsp;edukacja elementarna z diagnozą i terapią pedagogiczną.</li>
              </ul>

              <div className="flex flex-row items-center gap-4 w-full mb-6">
                <Image alt="" src={diploma} className='w-20 md:w-28 scale-110 h-auto text-main' aria-hidden />
                <h3 className='text-xl md:text-2xl font-bold text-main'>Studia podyplomowe</h3>
              </div>
              <ul className='text-main font-semibold list-disc list-inside w-full mb-10 ml-2 md:ml-6 space-y-2'>
                <li className='pl-4'>Integracja Sensoryczna</li>
                <li className='pl-4'>Mediacje</li>
                <li className='pl-4'>Psychotraumatologia – w trakcie</li>
              </ul>

              <div className="flex flex-row items-center gap-4 w-full mb-6">
                <Image alt="" src={suitcase} className='w-20 md:w-28 scale-110 md:scale-100 h-auto text-main' aria-hidden />
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
    );
}