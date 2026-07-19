import bg from '../../../public/background.png';
import FormButton from '@/components/ui/FormButton';
import Image from 'next/image';

export default async function OfferPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return (
    <article className="
      relative w-full min-h-page shadow-lg overflow-hidden
      flex flex-col justify-start items-start
      md:grid md:grid-cols-2 md:auto-rows-max md:gap-6 md:px-[4rem]"
    >
      <Image 
        src={bg} 
        alt="" 
        fill 
        className="-z-10 object-cover md:scale-110" 
        priority
      />
      <div className='
        flex flex-row items-center mt-4
        md:col-span-2 md:row-start-1 md:w-full md:max-w-[75ch] md:mx-auto'>
        <Image
          src="/adhd_diagnosis.png"
          alt='Diagnoza ADHD'
          className='h-[100px] w-[100px]'
          width={300}
          height={300}
          priority
        />
        <h1>Diagnoza ADHD</h1>
      </div>
      <p className='
        m-4 text-justify text-green-800
        max-w-[75ch] md:mx-auto
        md:col-span-2 md:row-start-2 md:m-0'
      >
          Wiem, jak wyczerpujące bywa codzienne zmaganie się z natłokiem myśli i poczuciem, że Twój umysł nigdy nie odpoczywa. W mojej pracy do diagnozy ADHD podchodzę przede wszystkim z empatią, rzetelnością i uważnością na Twoje granice. Zależy mi na tym, abyś podczas naszych spotkań czuł się bezpiecznie i komfortowo - to przestrzeń, w której wspólnie, w spokojnym tempie, przyjrzymy się Twoim doświadczeniom. Nie oceniam, lecz pomagam zrozumieć, w jaki sposób funkcjonuje Twój układ nerwowy. Celem diagnozy nie jest przyklejenie etykiety, ale znalezienie odpowiedzi, które pozwolą Ci odzyskać równowagę i lepiej zadbać o siebie w codziennym życiu.
      </p>
      <div className='
        flex flex-col
        md:flex-row md:w-full md:items-center
        md:col-span-2 md:row-start-3 md:m-0 md:justify-around'>
        <p
          className='ml-4 text-left text-green-800 font-bold'
        >
          Koszt: 200
        </p>
        <FormButton className='m-4 md:self-end'/>
        </div>
    </article>
  );
}