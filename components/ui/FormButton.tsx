"use client"

import { motion, HTMLMotionProps } from 'framer-motion';
import { PenTool } from 'lucide-react';

export default function FormButton({ className = '', ...props }: HTMLMotionProps<"button">) {
    return (
        <motion.button
            className={`flex items-center justify-center gap-2
                bg-[hsl(43_60%_49%)] rounded-md border text-pearl p-2 font-serif btn-focus ${className}`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert("Tymczasowy znacznik: Otwieram formularz!")}
            {...props}
        >
            <PenTool size={18} /> Umów się na spotkanie
        </motion.button>
    );
}