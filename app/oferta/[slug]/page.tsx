import FormButton from '@/components/ui/FormButton';
import Image from 'next/image';

export default async function OfferPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return (
    <article className="
      relative w-full min-h-page shadow-lg overflow-hidden
      flex flex-col justify-start items-start"
    >
      <div className='flex flex-row items-center mt-4'>
        <Image
          src="/adhd_diagnosis_no_bg.png"
          alt='Diagnoza ADHD'
          className='h-[100px] w-[100px]'
          width={300}
          height={300}
          priority
        />
        <h1>Diagnoza ADHD</h1>
      </div>
      <p className='m-4 text-justify'>Wiem, jak wyczerpujące bywa codzienne zmaganie się z natłokiem myśli i poczuciem, że Twój umysł nigdy nie odpoczywa. W mojej pracy do diagnozy ADHD podchodzę przede wszystkim z empatią, rzetelnością i uważnością na Twoje granice. Zależy mi na tym, abyś podczas naszych spotkań czuł się bezpiecznie i komfortowo – to przestrzeń, w której wspólnie, w spokojnym tempie, przyjrzymy się Twoim doświadczeniom. Nie oceniam, lecz pomagam zrozumieć, w jaki sposób funkcjonuje Twój układ nerwowy. Celem diagnozy nie jest przyklejenie etykiety, ale znalezienie odpowiedzi, które pozwolą Ci odzyskać równowagę i lepiej zadbać o siebie w codziennym życiu.</p>
      <p className='m-2 text-left'>Koszt: 200</p>
    </article>
  );
}