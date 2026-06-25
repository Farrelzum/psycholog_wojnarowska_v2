"use client";

import Link from "next/link";
import { AnimatePresence, motion }from 'framer-motion';
import { Phone, PenTool, Play } from 'lucide-react';
import { offers } from '../../lib/offers';
import LogoSVG from "../ui/LogoSVG";
import { useEffect } from "react";

interface Props {
    onClose: () => void;
    isOfertaOpen: boolean;
    toggleOferta: () => void;
}

export default function MenuMobile({ isOfertaOpen, toggleOferta, onClose }: Props) {
    

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.body.style.overflow = '';
        }
    }, []);

    return (
        <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='absolute top-full left-0 w-full h-[calc(100dvh-4rem)] bg-light-green flex flex-col justify-start items-start py-8 px-4 shadow-md -z-10 backdrop-blur-md overflow-hidden' 
            aria-label="Menu mobilne">
            <div className="flex w-full justify-between items-start flex-1">
                <ul className='flex flex-col gap-8 relative z-10 ml-4 whitespace-nowrap'>
                    <li>
                        <Link href="/" className="text-xl text-white font-medium" onClick={onClose}>Strona główna</Link>
                    </li>
                    <li>
                        <Link href="/o-mnie" className="text-xl text-white font-medium" onClick={onClose}>O mnie</Link>
                    </li>
                    <li>
                        <button 
                            onClick={toggleOferta}
                            className="text-xl text-white font-medium flex items-center gap-1"
                        >
                            Oferta
                            <motion.div animate={{ rotate: isOfertaOpen ? 0 : 90 }}>
                                <Play size={20} className='pt-1'/>
                            </motion.div>
                        </button>
                    </li>
                    <li>
                        <Link href="/dla-rodzicow" className="text-xl text-white font-medium" onClick={onClose}>Dla rodziców</Link>
                    </li>
                    <li>
                        <Link href="/cennik" className="text-xl text-white font-medium" onClick={onClose}>Cennik</Link>
                    </li>
                    <li>
                        <Link href="/kontakt" className="text-xl text-white font-medium" onClick={onClose}>Kontakt</Link>
                    </li>
                </ul>
                <div className="relative flex-1 h-full ml-4">
                    <AnimatePresence mode="wait">
                        {isOfertaOpen ? (
                            <motion.ul
                                key="lista-ofert"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                className="absolute left-0 top-0 flex flex-col gap-3 text-left"
                            >
                                {offers.map((item, idx) => (
                                    <li key={idx}>
                                        <Link 
                                            href={item.path} 
                                            onClick={onClose} 
                                            className="
                                                flex items-center gap-2
                                                text-white hover:text-gold-light text-sm
                                                font-medium opacity-90"
                                        >
                                            <item.Icon size={16} /> {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </motion.ul>
                        ) : (
                            <motion.div
                                key="logo-wodny-znak"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute right-[10%] top-[-10%] pointer-events-none"
                            >
                                <LogoSVG className="w-48 h-48 text-white opacity-20" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <div className='flex gap-2 mt-auto justify-evenly w-full'>
                <motion.a
                    href="tel:+48798763715"
                    className='
                        flex items-center gap-2
                        border rounded-md text-white p-2'
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Phone size={18} />Zadzwoń
                </motion.a>
                <motion.button 
                    type="button"
                    className='
                        flex items-center gap-2
                        bg-gold-light rounded-md
                        text-white p-2'
                        onClick={() => alert("Tymczasowy znacznik: Otwieram formularz!")}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                >
                    <PenTool size={18}/> Napisz do mnie
                </motion.button>
            </div>
        </motion.nav>
    );
}