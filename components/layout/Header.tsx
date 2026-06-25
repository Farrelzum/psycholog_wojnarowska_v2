'use client'

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import MenuMobile from './MenuMobile';
import NavBar from './NavBar';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOfertaOpen, setIsOfertaOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(prev => !prev);
        setIsOfertaOpen(false);
    }

    const toggleIsOfertaOpen = () => {
        setIsOfertaOpen(prev => !prev);
    }


    return (
        <header className='relative w-full z-50'>
            <NavBar
                isOpen={isOpen}
                isOfertaOpen={isOfertaOpen}
                setIsOpen={setIsOpen}
                setIsOfertaOpen={setIsOfertaOpen}
                toggleIsOpen={toggleIsOpen}
                toggleIsOfertaOpen={toggleIsOfertaOpen}
            />
            <AnimatePresence>
                {isOpen && 
                <MenuMobile 
                    onClose={toggleIsOpen}
                    isOfertaOpen={isOfertaOpen}
                    toggleOferta={toggleIsOfertaOpen}
                />}
            </AnimatePresence>
        </header>

    );
}