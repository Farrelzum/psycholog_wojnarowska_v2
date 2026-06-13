'use client'

import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/favicon.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Sun } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(prev => !prev);
    }


    return (
    <nav className='flex justify-between h-auto px-8 py-2 bg-soft-beige shadow-sm'>
        <Link href="/" className='flex justify-between items-center gap-2 transition-opacity duration-300 ease-in-out hover:opacity-80'>
            <Image src={logo} alt="Site logo" width={40} height={40} className='w-10 h-10 object-contain' priority />
            <h1>Psycholog Barbara Wojnarowska</h1>
        </Link>
        <ul className='hidden w-auto h-auto items-center justify-between gap-8 text-sm font-medium text-warm-brown  md:flex'>
            <li>
                <Link href='/o-mnie' className='hover:text-warm-accent transition-colors duration-300 ease-in-out'>O mnie</Link>
            </li>
            <li>
                <Link href='/oferta' className='hover:text-warm-accent transition-colors duration-300 ease-in-out'>Oferta</Link>
            </li>
            <li>
                <Link href='/kontakt' className='hover:text-warm-accent transition-colors duration-300 ease-in-out'>Kontakt</Link>
            </li>
        </ul>
        <button type="button" onClick={toggleIsOpen} className='md:hidden'>
            <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                    <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Sun size={28} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="menu"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Menu size={28} />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    </nav>
    );
}