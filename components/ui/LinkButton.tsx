"use client"

import { motion } from 'framer-motion';
import { PenTool } from 'lucide-react';
import Link  from 'next/link';

const MotionLink = motion.create(Link);

interface Props {
    className?: string;
    askLabel?: boolean;
}

export default function FormButton({ className = '', askLabel = false }: Props) {
    return (
        <MotionLink
            className={`
                flex items-center justify-center gap-2
                bg-gold rounded-md border text-pearl p-2 font-serif btn-focus max-w-96 md:max-w-60 lg:text-lg
                ${askLabel ? 'bg-main' : ''}
                ${className}`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="/kontakt"
        >
            <PenTool size={18} /> { askLabel ? 'Zapytaj o TUS' : 'Umów się na spotkanie'}
        </MotionLink>
    );
}