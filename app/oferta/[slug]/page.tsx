import FormButton from '@/components/ui/FormButton';
import Image from 'next/image';
import offer_bg from '../../../public/offer_bg.png';
import { offers } from '@/lib/constants/offers';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Divider from '@/components/ui/Divider';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const offer = offers.find((of) => resolvedParams.slug === of.slug);

  if (!offer) {
    return {
      title: 'Nie znaleziono oferty',
    };
  }

  return {
    title: offer.name,
    description: offer.description.substring(0, 160) + '...',
    openGraph: {
      title: offer.name,
      description: offer.description.substring(0, 160) + '...',
      images: [offer.image],
    },
  };
}

export default async function OfferPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const offer = offers.find((of) => resolvedParams.slug === of.slug);

  if (!offer) {
    notFound();
  }

  return (
    <article className="
      relative w-full min-h-page shadow-lg overflow-hidden
      flex flex-col justify-start items-start pt-4
      md:grid md:grid-cols-2 md:auto-rows-max md:gap-6 md:px-[4rem]"
    >
      <Image 
            src={offer_bg} 
            alt="" 
            fill 
            className="object-cover object-center -z-10" 
            priority
      />
      <div className='
        m-4 md:p-4
        bg-ivory shadow-md rounded-lg
        md:col-span-2 md:row-start-1 md:max-w-[75ch] md:mx-auto'>
        <div className='
          flex flex-row items-center mt-4
           md:w-full'>
          <Image
            src={offer.image}
            alt={offer.name}
            className='h-[100px] lg:h-[150px] w-[100px] lg:w-[150px] mr-3'
            width={300}
            height={300}
            priority
          />
          <h1 className='lg:text-4xl'>{offer.name}</h1>
        </div>
        <p className='
          m-4 text-left text-green-800
          whitespace-pre-line
          max-w-[75ch] md:mx-auto
          md:col-span-2 md:row-start-2 md:m-0
          lg:text-lg'
        >
            {offer.description}
        </p>
        <Divider className='p-4' />
        <div className='
          flex flex-col w-fit
          md:border md:border-1 md:border-gold md:rounded-lg
          hover:border-transparent transition-colors duration-300
          md:flex-row-reverse md:items-center
          md:col-span-2 md:row-start-3 md:m-0'>
          <p
            className='ml-4 pr-4 text-left text-green-800 font-bold lg:text-lg'
          >
            Koszt: {offer.price}
          </p>
          <FormButton className='m-4 md:m-auto lg:text-lg lg:p-3'/>
        </div>
      </div>
    </article>
  );
}