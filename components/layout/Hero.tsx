'use client'

import hero_bg from '../../public/hero_bg_2.png'
import therapist_img from '../../public/therapist-portrait.png'
import Image from 'next/image';
import FormButton from '../ui/FormButton';
import Divider from '../ui/Divider';
import IconBox from '../ui/IconBox';
import { Brain, Users, HandHeart } from 'lucide-react';
import TherapistCard from './TherapistCard';

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
                    <div className="flex flex-col w-fit">
                        <h1 className="m-10 mb-6">
                            Każda zmiana <br/> zaczyna się od <br/>
                            <span className="font-bold">pierwszej rozmowy</span>
                        </h1>
                        <Divider className='w-3/4 px-10'/>
                        <p className='mx-10 my-6 text-main font-semibold'>
                            Wspieram dzieci, młodzież i dorosłych <br/>
                            w trudnościach emocjonalnych, kryzysach życiowych 
                            oraz trudnościach rozwojowych.
                        </p>
                        <ul className="
                                flex flex-col sm:flex-row items-center justify-between gap-8 my-8"
                        >
                            <li>
                                <IconBox
                                    Icon={Brain}
                                    name='Diagnoza psychologiczna'
                                    
                                />
                            </li>
                            <li>
                                <IconBox
                                    Icon={Users}
                                    name='Dzieci + Młodzież + Dorośli'
                                />
                            </li>
                            <li>
                                <IconBox
                                    Icon={HandHeart}
                                    name='Indiwidualne wsparcie i terapia'
                                />
                            </li>
                        </ul>
                        <FormButton className='m-10'/>
                    </div>
                </div>
            </div>
                <div className="flex justify-end self-end w-full h-full relative">
                    <Image
                        src={therapist_img}
                        alt="Psycholog Barbara Wojnarowska"
                        className="
                            static md:absolute md:bottom-0 md:right-0
                            max-w-[66%] max-h-[70%]
                            -scale-x-100 md:w-[30%] md:max-h-full
                            lg:w-[50%]
                            object-contain object-right-bottom drop-shadow-2xl brightness-90 saturate-[1.2]"
                        priority
                    />
                </div>
                <TherapistCard />
        </section>
    );
}