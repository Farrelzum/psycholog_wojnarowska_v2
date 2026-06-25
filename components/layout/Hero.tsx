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
                alt="Tło" 
                fill 
                className="-z-10 object-cover" 
                priority
            />
            <div className="container mx-auto relative z-10 grid grid-cols-1 md:gap-[2rem] lg:grid-cols-2 min-h-[calc(100vh-4rem)] items-start">
                
                <div>
                    <h1 className="text-4xl lg:text-5xl text-green-800 m-10 font-serif leading-tight">
                        Wspólnie stwórzmy <br/>
                        <span className="font-bold">Twoją drogę</span> <br/>
                        do lepszego jutra
                    </h1>
                    <motion.button
                        type="button"
                        className='
                            flex items-center gap-2
                            place-self-end mr-12
                            bg-green-700 rounded-md
                            text-soft-beige p-2 font-serif'
                            onClick={() => alert("Tymczasowy znacznik: Otwieram formularz!")}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                    >
                        <PenTool size={18}/> Umów się
                    </motion.button>
                </div>
                <Image 
                    src={therapist_img}
                    alt="Psycholog Barbara Wojnarowska"
                    className="absolute bottom-0 left-0 w-2/3 lg:w-[40%] object-contain drop-shadow-2xl brightness-90 saturate-120"
                />
                
            </div>
        </section>
    );
}