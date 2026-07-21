import FormButton from '@/components/ui/FormButton';
import Image from 'next/image';
import { offers } from '@/lib/constants/offers';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

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
      <div className='
        flex flex-row items-center mt-4
        md:col-span-2 md:row-start-1 md:w-full md:max-w-[75ch] md:mx-auto'>
        <Image
          src={offer.image}
          alt={offer.name}
          className='h-[100px] w-[100px] mr-3'
          width={300}
          height={300}
          priority
        />
        <h1>{offer.name}</h1>
      </div>
      <p className='
        m-4 text-left text-green-800
        max-w-[75ch] md:mx-auto
        md:col-span-2 md:row-start-2 md:m-0'
      >
          {offer.description}
      </p>
      <div className='
        flex flex-col
        md:flex-row md:w-full md:items-center
        md:col-span-2 md:row-start-3 md:m-0 md:justify-around'>
        <p
          className='ml-4 text-left text-green-800 font-bold'
        >
          Koszt: {offer.price}
        </p>
        <FormButton className='m-4 md:self-end'/>
        </div>
    </article>
  );
}