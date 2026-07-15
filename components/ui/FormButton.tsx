"use client"

import { motion, HTMLMotionProps } from 'framer-motion';
import { PenTool } from 'lucide-react';

export default function FormButton({ className = '', ...props }: HTMLMotionProps<"button">) {
    return (
        <motion.button
            className={`flex items-center gap-2 bg-green-700 rounded-md text-soft-beige p-2 font-serif btn-focus ${className}`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert("Tymczasowy znacznik: Otwieram formularz!")}
            {...props}
        >
            <PenTool size={18}/> Umów się
        </motion.button>
    );
}