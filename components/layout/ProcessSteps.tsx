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
                text-main text-xl font-semibold
                mb-14
                md:text-2xl
                lg:text-3xl
            ">Jak wygląda proces współpracy?</h2>
            <ul className='
                flex flex-col items-center gap-8
                max-w-[450px] w-[60%]
                lg:w-full lg:max-w-none lg:flex-row
                lg:px-10 lg:pb-10'
            >
                {steps.map((step, index) => {
                    const isNotLast = index + 1 === steps.length ?
                        false : true; 

                    return (
                        <React.Fragment key={step.title}>
                            <li className='
                                flex flex-col items-center
                                border-2 border-main rounded-lg
                                p-4 w-full max-w-[450px]
                                md:p-8'
                            >
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    className='
                                        w-3/5 h-auto object-contain
                                        scale-140 lg:w-4/5'
                                />
                                <h3 className='
                                    text-main font-semibold
                                    md:text-lg'
                                >{`- Krok ${step.step} -`}</h3>
                                <p className='
                                    text-main font-semibold
                                    md:text-lg pl-14 -indent-14'
                                >{step.title}</p>
                            </li>
                            {
                                isNotLast && <li aria-hidden="true">
                                    <ArrowDown
                                        size={50}
                                        className='text-gold lg:hidden'
                                    />

                                    <ArrowRight
                                        size={50}
                                        className='text-gold hidden lg:block'
                                    />
                                </li>
                            }
                        </React.Fragment>
                    );
                })}
            </ul>
        </section>
    )
}