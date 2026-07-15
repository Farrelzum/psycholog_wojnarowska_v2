import hero_bg from '../../public/hero_bg_2.png'
import therapist_img from '../../public/therapist-portrait.png'
import Image from 'next/image';
import FormButton from '../ui/FormButton';

export default function Hero() {
    return (
        <section className="relative w-full min-h-page shadow-lg overflow-hidden">
            <Image 
                src={hero_bg} 
                alt="" 
                fill 
                className="-z-10 object-cover md:scale-110" 
                priority
            />
            <div className="container mx-auto relative z-10 grid grid-cols-1 md:gap-[2rem] md:grid-cols-2 min-h-page items-start">
                
                <div className='md:col-span-2'>
                    <h1 className="m-10">
                        Wspólnie stwórzmy <br/>
                        <span className="font-bold">Twoją drogę</span> <br/>
                        do lepszego jutra
                    </h1>
                <FormButton />
                </div>
            </div>
            <Image 
                src={therapist_img}
                alt="Psycholog Barbara Wojnarowska"
                className="
                    absolute bottom-0 right-0
                    max-w-[66%] max-h-[70%]
                    -scale-x-100 md:w-[30%] md:max-h-full
                    lg:w-[50%]
                    object-contain object-left-bottom drop-shadow-2xl brightness-90 saturate-[1.2]"
                priority
            />
        </section>
    );
}