"use client"

import { Faq } from "@/lib/types/Faq";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
    item: Faq;
}

export default function FaqItem({ item }: Props) {
    const [toggleQ, setToggleQ] = useState(false);
    return (
        <article className="
            border rounded-md shadow-md bg-ivory
            p-2 px-4 md:py-4"
        >
            <button
                type="button" 
                className="
                    flex items-center justify-between
                    text-left gap-2 w-full"
                onClick={() => setToggleQ(!toggleQ)}
                aria-expanded={toggleQ}
            >
                <h3 className="
                    font-semibold text-main
                    md:text-lg lg:text-xl">
                    {`${item.id}. ${item.question}`}
                </h3>
                <motion.div animate={{ rotate: toggleQ ? 0 : 270 }}>
                    <ArrowDown 
                        className="
                            text-main font-bold
                            md:text-lg lg:text-xl
                            size-4 md:size-5 lg:size-6"
                    />
                </motion.div>
            </button>
            
            <AnimatePresence>
                {toggleQ && 
                    <motion.p 
                        className="
                            border-t border-dashed
                            whitespace-pre-wrap p-2 mt-3
                            overflow-hidden"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut"
                        }}
                    >
                        {item.answer}
                    </motion.p>
                }
            </AnimatePresence>
        </article>
    );
}