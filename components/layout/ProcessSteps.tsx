import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react';
import { steps } from '@/lib/constants/steps';
import React from 'react';

export default function ProcessSteps() {
    return (
        <section className="
            w-full h-auto py-8
            flex flex-col justify-center items-center
            relative bg-ivory"
        >
            <h2 className="
                text-main font-semibold
                text-2xl md:text-3xl mb-14"
            >
                Jak wygląda proces współpracy?
            </h2>
            
            <ul className='
                flex flex-col items-center gap-8
                w-[90%] max-w-[450px] /* <-- Poprawione mobile: 90% zamiast 60% */
                lg:max-w-none lg:w-full lg:flex-row lg:justify-center lg:items-stretch lg:flex-wrap
                lg:px-10 lg:pb-10'
            >
                {steps.map((step, index) => {
                    const isNotLast = index < steps.length - 1; 

                    return (
                        <React.Fragment key={step.title}>
                            <li className='
                                flex flex-col items-center
                                border-2 border-main rounded-lg
                                p-6 w-full /* <-- Usunięto sztywne max-w dla lg, by flex-1 zadziałało */
                                md:p-8
                                lg:flex-1 lg:max-w-[320px] /* <-- Kafelki dzielą się miejscem po równo */'
                            >
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    className='
                                        w-3/4 h-auto object-contain mb-6 /* <-- Bezpieczne powiększenie bez scale */' 
                                />
                                {/* Dodano mt-auto, aby przy różnej ilości tekstu stopki były wyrównane */}
                                <h3 className='
                                    text-main font-semibold mt-auto text-center
                                    md:text-lg'
                                >{`- Krok ${step.step} -`}</h3>
                                <p className='
                                    text-main font-semibold text-center
                                    md:text-lg'
                                >{step.title}</p>
                            </li>
                            
                            {isNotLast && (
                                <li aria-hidden="true" className="flex justify-center items-center shrink-0">
                                    <ArrowDown
                                        size={50}
                                        className='text-gold lg:hidden'
                                    />
                                    <ArrowRight
                                        size={50}
                                        className='text-gold hidden lg:block'
                                    />
                                </li>
                            )}
                        </React.Fragment>
                    );
                })}
            </ul>
        </section>
    )
}