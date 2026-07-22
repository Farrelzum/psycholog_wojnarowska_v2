'use client'
import { easeInOut, motion } from 'framer-motion';

import { LucideIcon } from 'lucide-react';

interface Props {
    Icon: LucideIcon;
    name: string;
}

export default function IconBox({ Icon, name }: Props) {
    return (
        <div 
            className="
                flex flex-col items-center gap-2
                text-center max-w-[120px]"
        >
            <motion.div 
                className='
                    flex items-center justify-center
                    p-4 bg-transparent
                    rounded-full border border-main
                    shadow-lg'
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: easeInOut,
                }}
            >
                <Icon
                    size={60}
                    className='text-green-700'
                    aria-hidden="true"
                />
            </motion.div>
            <span
                className='
                text-sm font-semibold text-green-800 leading-tight'
            >{name}</span>
        </div>
    );
}