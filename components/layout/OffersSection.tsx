"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { offers } from "@/lib/constants/offers";
import Divider from "../ui/Divider";

export default function OffersSection() {
    return (
        <section
            className="
                flex flex-col items-center justify-center gap-8
                text-main text-xl font-semibold
                my-10 md:text-2xl lg:text-3xl"
        >
            <h2 className="
                text-main mb-4
                text-2xl md:text-3xl
                font-serif">Sprawdź, w czym mogę Ci pomóc</h2>
            <Divider className="px-4"/>
            <ul className="
                flex flex-row flex-wrap justify-center gap-8 lg:gap-12
                w-full max-w-sm md:max-w-3xl lg:max-w-7xl mx-auto px-4"
            >
                {offers.map((offer, index) => {
                    return (
                        <motion.li 
                            key={offer.name}
                            initial={{ opacity: 0, y: 50 }} 
                            whileInView={{ 
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: "spring", 
                                    stiffness: 100,
                                    damping: 12,
                                    delay: index * 0.10
                                }
                            }} 
                            viewport={{ once: true, margin: "-50px" }} 
                            whileHover={{ 
                                scale: 1.03,
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 25,
                                }
                            }}
                            className="
                                w-full bg-ivory rounded-lg shadow-md
                                md:w-[calc(50%-3rem)] lg:w-[calc(33%-3rem)]
                                "
                        >
                            <Link 
                                href={offer.path}
                                className="
                                    flex flex-col justify-center items-center h-full
                                    rounded-lg btn-focus"
                            >
                                <Image 
                                    src={offer.mainPageImage}
                                    alt=''
                                    className="
                                        object-center
                                        w-full h-auto rounded-t-lg"
                                    priority={index === 0} 
                                    aria-hidden="true"
                                />
                                <h3 className="
                                    p-4 text-center w-full
                                    flex items-center justify-center
                                    min-h-[5rem] md:min-h-[6rem] lg:min-h-[7rem]"
                                >
                                    {offer.name}
                                </h3>
                            </Link>
                        </motion.li>
                    );
                })}
            </ul>
            <Divider className="px-4"/>
        </section>
    )
}