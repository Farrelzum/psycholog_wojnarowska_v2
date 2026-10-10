import Image from 'next/image';
import location from '@/images/footer/location.webp';
import Link from 'next/link';
import { MapPin, Clock, Phone } from 'lucide-react';
import BackToTheTop from '../ui/BackToTheTop';

export default function Footer() {
    return (
        <section className='
            flex flex-col gap-4
            bg-main py-4
            border-t border-gold shadow-md
            md:grid md:grid-cols-2
            lg:grid-cols-3'>
            <Image 
                src={location}
                alt=''
                className='
                    w-1/2 h-auto
                    mx-auto mt-4
                    rounded-xl object-cover
                    border-2 border-ivory
                    md:col-start-2
                    lg:col-start-3'
            />
            <div className='
                flex flex-col gap-8
                w-fit mx-auto md:row-start-1
                lg:flex-row lg:ml-8
                lg:col-span-2 lg:justify-start lg:w-full
                lg:mt-4'>
                <div className='flex flex-col gap-4 items-start'>
                    <div className='flex gap-2 justify-center items-start  '>
                        <MapPin className='size-6 text-ivory'/>
                        <p className='
                            whitespace-pre-wrap
                            ml-2 text-white
                            text-[clamp(1rem,3vw,1.2rem)]
                            md:text-base'
                        >
                            {`Centrum Medyczne - Port Zdrowie\nul. Andre Citroena 8\n70-772 Szczecin (Prawobrzeże)\n`} 
                        </p>
                    </div>
                    <div className='flex gap-2 justify-center items-start  '>
                        <Clock className='size-6 text-ivory'/>
                        <p className='
                            whitespace-pre-wrap
                            ml-2 text-white
                            text-[clamp(1rem,3vw,1.2rem)]
                            md:text-base'
                        >
                            {`Godziny otwarcia:\npon-pt 8:00-18:00`} 
                        </p>
                    </div>
                    <div className='flex gap-2 justify-center items-start  '>
                        <Phone className='size-6 text-ivory'/>
                        <p className='
                            whitespace-pre-wrap
                            ml-2 text-white
                            text-[clamp(1rem,3vw,1.2rem)]
                            md:text-base'
                        >
                            TEL +48 790 798 993 
                        </p>
                    </div>
                </div>

                <div className='flex justify-between items-center lg:items-start lg:w-full'>
                    <ul className='flex flex-col gap-1'>
                        <li>
                            <Link
                                href="/"
                                className="
                                    text-ivory font-medium
                                    rounded btn-focus
                                    text-[clamp(1rem,3vw,1.2rem)]
                                    md:text-base"
                                >Strona główna</Link>
                        </li>
                        <li>
                            <Link
                                href="/o-mnie"
                                className="
                                    text-ivory font-medium
                                    rounded btn-focus
                                    text-[clamp(1rem,3vw,1.2rem)]
                                    md:text-base"
                                >O mnie</Link>
                        </li>
                        <li>
                            <Link
                                href="/cennik"
                                className="
                                    text-ivory font-medium
                                    rounded btn-focus
                                    text-[clamp(1rem,3vw,1.2rem)]
                                    md:text-base"
                                >Cennik</Link>
                        </li>
                        <li>
                            <Link
                                href="/faq"
                                className="
                                    text-ivory font-medium
                                    rounded btn-focus
                                    text-[clamp(1rem,3vw,1.2rem)]
                                    md:text-base"
                                >FAQ</Link>
                        </li>
                        <li>
                            <Link
                                href="/kontakt"
                                className="
                                    text-ivory font-medium
                                    rounded btn-focus
                                    text-[clamp(1rem,3vw,1.2rem)]
                                    md:text-base"
                                >Kontakt</Link>
                        </li>
                    </ul>
                    <BackToTheTop />
                </div>
            </div>
        </section>
    );
}