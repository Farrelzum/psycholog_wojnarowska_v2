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
                text-2xl md:text-3xl mb-10 md:mb-14
                font-serif"
            >
                Jak wygląda proces współpracy?
            </h2>
            
            <ul className='
                flex flex-col items-center gap-4 md:gap-6
                w-[90%] max-w-[20rem]
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
                                p-4 md:p-5 w-full
                                lg:flex-1 lg:max-w-[14rem]'
                            >
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    className='
                                        w-1/2 max-w-[7.5rem] h-auto object-contain mb-4' 
                                />
                                <h3 className='
                                    text-main font-semibold mt-auto text-center
                                    text-sm md:text-base'
                                >{`- Krok ${step.step} -`}</h3>
                                <p className='
                                    text-main font-semibold text-center
                                    text-sm md:text-base'
                                >{step.title}</p>
                            </li>
                            
                            {isNotLast && (
                                <li aria-hidden="true" className="flex justify-center items-center shrink-0">
                                    <ArrowDown
                                        size={32}
                                        className='text-gold lg:hidden'
                                    />
                                    <ArrowRight
                                        size={32}
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