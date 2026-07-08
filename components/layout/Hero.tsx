"use client"

import { motion } from 'framer-motion';
import hero_bg from '../../public/hero_bg_2.png'
import therapist_img from '../../public/therapist-portrait.png'
import Image from 'next/image';
import { PenTool } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative w-full min-h-[calc(100vh-4rem)] shadow-lg overflow-hidden">
            <Image 
                src={hero_bg} 
                alt="" 
                fill 
                className="-z-10 object-cover md:scale-110" 
                priority
            />
            <div className="container mx-auto relative z-10 grid grid-cols-1 md:gap-[2rem] md:grid-cols-2 min-h-[calc(100vh-4rem)] items-start">
                
                <div className='md:col-span-2'>
                    <h1 className="
                    text-[5dvh] md:text-[8dvh]
                    text-green-800 m-10 font-serif leading-tight">
                        Wspólnie stwórzmy <br/>
                        <span className="font-bold">Twoją drogę</span> <br/>
                        do lepszego jutra
                    </h1>
                    <motion.button
                        type="button"
                        className='
                            flex items-center gap-2
                            place-self-start ml-10
                            bg-green-700 rounded-md
                            text-soft-beige p-2 font-serif
                            btn-focus'
                            onClick={() => alert("Tymczasowy znacznik: Otwieram formularz!")}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                    >
                        <PenTool size={18}/> Umów się
                    </motion.button>
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