"use client"

import { motion, HTMLMotionProps } from 'framer-motion';

interface FormButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
}

export default function FormButton({ children, className = '', ...props }: FormButtonProps) {
    return (
        <motion.button
            className={`flex items-center gap-2 bg-green-700 rounded-md text-soft-beige p-2 font-serif btn-focus ${className}`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert("Tymczasowy znacznik: Otwieram formularz!")}
            {...props}
        >
            {children}
        </motion.button>
    );
}