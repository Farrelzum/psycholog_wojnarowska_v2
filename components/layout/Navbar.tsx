'use client'

import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { offers } from "@/lib/offers";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Play, Sun } from "lucide-react";
import Link from "next/link";
import Logo from "../ui/Logo";
import { useRef } from "react";

interface NavProps {
    isOpen: boolean;
    isOfertaOpen: boolean;
    setIsOpen: (bool: boolean) => void;
    setIsOfertaOpen: (bool: boolean) => void;
    toggleIsOpen: () => void;
    toggleIsOfertaOpen: () => void;
}

export default function NavBar({
    isOpen,
    isOfertaOpen,
    setIsOpen,
    setIsOfertaOpen,
    toggleIsOpen,
    toggleIsOfertaOpen
}: NavProps) {
    const dropdownRef = useRef<HTMLLIElement>(null);

    useOnClickOutside(dropdownRef, () => {
        if (!isOpen) {
            setIsOfertaOpen(false);
        }
    });
    
    return (
            <nav className='
                relative flex justify-between items-center
                h-16 px-8 md:px-10 lg:px-16 py-2 bg-emerald-600 shadow-sm'
            >
                <Logo textClassName='text-sm md:text-base' onClick={() => setIsOpen(false)}/>
                <ul className='
                    hidden w-auto h-auto gap-6 lg:gap-10
                    lg:flex items-center justify-between'
                >
                    <li>
                        <Link href='/o-mnie'
                            onClick={() => setIsOfertaOpen(false)}
                            className='
                                text-white hover:text-gold
                                transition-colors duration-500 ease-in-out
                                lg:font-medium lg:text-lg'
                            >O mnie</Link>
                    </li>
                    <li ref={dropdownRef} className='relative'>
                        <button 
                            onClick={toggleIsOfertaOpen}
                            className="
                                flex items-center gap-1
                                text-white hover:text-gold
                                transition-colors duration-500 ease-in-out
                                lg:font-medium lg:text-lg"
                        >
                            Oferta
                            <motion.div animate={{ rotate: isOfertaOpen ? 90 : 0 }}>
                                <Play size={14} />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {isOfertaOpen && 
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className='absolute top-full left-0 p-4'>
                                    <ul className='
                                        flex flex-col gap-4 p-4
                                        w-max whitespace-nowrap
                                        bg-light-green/90 shadow-md rounded-b-md'
                                    >
                                        {offers.map((item, idx) => (
                                            <li key={idx}>
                                                <Link 
                                                    href={item.path}  
                                                    className="
                                                    flex items-center gap-2
                                                    text-white hover:text-gold-light
                                                    text-sm font-medium opacity-90"
                                                    onClick={() => setIsOfertaOpen(false)}
                                                >
                                                    <item.Icon size={16} /> {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>  
                                </motion.div>}
                        </AnimatePresence>
                    </li>
                    <li>
                        <Link href="/dla-rodzicow"
                            onClick={() => setIsOfertaOpen(false)}
                            className="
                                text-white hover:text-gold
                                transition-colors duration-500 ease-in-out
                                lg:font-medium lg:text-lg"
                            >Dla rodziców</Link>
                    </li>
                    <li>
                        <Link href="/cennik"
                            onClick={() => setIsOfertaOpen(false)}
                            className="
                                text-white hover:text-gold
                                transition-colors duration-500 ease-in-out
                                lg:font-medium lg:text-lg"
                            >Cennik</Link>
                    </li>
                    <li>
                        <Link href='/kontakt'
                            onClick={() => setIsOfertaOpen(false)}
                            className='
                                text-white hover:text-gold
                                transition-colors duration-500 ease-in-out
                                lg:font-medium lg:text-lg'
                            >Kontakt</Link>
                    </li>
                </ul>
 
                <button type="button" onClick={toggleIsOpen} className='lg:hidden'>
                    <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                            <motion.div
                                key="sun"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Sun size={28} className='text-gold-light'/>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={28} className='text-white'/>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </nav>
    );
}