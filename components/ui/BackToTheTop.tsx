"use client"
import { ArrowUp } from "lucide-react";

export default function BackToTheTop() {
    const back = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <section
            className='
                flex justify-center items-center bg-ivory
                border border-black rounded-xl
                p-2'
            onClick={() => back()}
        >
            <ArrowUp className="size-6" />
        </section>
    );
}