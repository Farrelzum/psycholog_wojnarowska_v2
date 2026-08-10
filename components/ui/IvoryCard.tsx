    "use client"
    import { motion } from 'framer-motion';

    interface Props {
        icon: React.ReactNode;
        title: string;
        list: string[];
        className?: string;
        splitList?: boolean;
    }

    export default function IvoryCard({ icon, title, list, className = '', splitList = false }: Props) {
        return (
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`
                    flex flex-col items-center justify-center
                    h-full w-full max-w-[400px]
                    md:max-w-none
                    lg:w-full lg:justify-start
                    m-2 lg:m-auto p-6 bg-ivory rounded-md shadow-md
                    md:w-[600px]
                    hover:shadow-xl transition-shadow duration-300
                    border border-main rounded-md shadow-md
                    ${className}
                    ${splitList ?
                        'lg:grid lg:grid-cols-[auto_1fr] lg:col-span-2 lg:h-auto lg:border-none' : ''}
                `}   
            >   
                <div className='lg:col-start-1 lg:mx-auto lg:self-start'>
                    {icon}
                    <h3 className={`
                        mt-3 mb-4
                        text-main text-xl font-bold text-center
                        ${splitList ? 'border border-main rounded-md shadow-md lg:border-none lg:shadow-none' : 'border border-main rounded-md shadow-md'}
                    `}
                    >
                        {title}
                    </h3>
                </div>
                <ul className={`
                    text-main font-semibold self-start
                    list-disc list-inside w-full
                    ${splitList ?
                        'lg:columns-2 lg:gap-x-8 lg:border lg:border-main lg:p-4 lg:rounded-md lg:shadow-md' : ''}`}
                >
                    {list.map((el, index) => (
                        <li
                            key={index}
                            className='
                                mb-1 break-inside-avoid
                                pl-6 -indent-6'
                        >
                            {el}
                        </li>
                    ))}
                </ul>
            </motion.div>
        );
    }