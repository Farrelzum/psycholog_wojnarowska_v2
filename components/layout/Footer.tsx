import Image from 'next/image';
import location from '@/images/footer/location.webp';
import Link from 'next/link';
import { MapPin, Clock, Phone } from 'lucide-react';
import Divider from '../ui/Divider';

export default function Footer() {
    return (
        <section className='
            flex flex-col gap-4
            bg-main'>
            <Image 
                src={location}
                alt=''
                className='
                    w-1/2 h-auto
                    mx-auto mt-4
                    rounded-xl object-cover
                    border-2 border-ivory'
            />
            <div className='flex flex-col gap-8 w-fit mx-auto mt-4'>
                <div className='flex flex-col gap-4 items-start'>
                    <div className='flex gap-2 justify-center items-start  '>
                        <MapPin className='size-6 text-ivory'/>
                        <p className='
                            whitespace-pre-wrap
                            ml-2 text-white'
                        >
                            {`Centrum Medyczne - Port Zdrowie\nul. Andre Citroena 8\n70-772 Szczecin (Prawobrzeże)\n`} 
                        </p>
                    </div>
                    <div className='flex gap-2 justify-center items-start  '>
                        <Clock className='size-6 text-ivory'/>
                        <p className='
                            whitespace-pre-wrap
                            ml-2 text-white'
                        >
                            {`Godziny otwarcia:\npon-pt 8:00-18:00`} 
                        </p>
                    </div>
                    <div className='flex gap-2 justify-center items-start  '>
                        <Phone className='size-6 text-ivory'/>
                        <p className='
                            whitespace-pre-wrap
                            ml-2 text-white'
                        >
                            TELEFON +48 790 798 993 
                        </p>
                    </div>
                </div>

                <div>
                    <ul className='flex flex-col gap-1'>
                        <li>
                            <Link
                                href="/"
                                className="
                                    text-ivory font-medium
                                    rounded btn-focus"
                                >Strona główna</Link>
                        </li>
                        <li>
                            <Link
                                href="/o-mnie"
                                className="
                                    text-ivory font-medium
                                    rounded btn-focus"
                                >O mnie</Link>
                        </li>
                        <li>
                            <Link
                                href="/cennik"
                                className="
                                    text-ivory font-medium
                                    rounded btn-focus"
                                >Cennik</Link>
                        </li>
                        <li>
                            <Link
                                href="/faq"
                                className="
                                    text-ivory font-medium
                                    rounded btn-focus"
                                >FAQ</Link>
                        </li>
                        <li>
                            <Link
                                href="/kontakt"
                                className="
                                    text-ivory font-medium
                                    rounded btn-focus"
                                >Kontakt</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}