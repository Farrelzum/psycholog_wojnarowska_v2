import Link from "next/link";
import { motion }from 'framer-motion'

interface Props {
    onClose: () => void,
}

export default function MenuMobile({ onClose }: Props) {
    return (
        <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='absolute top-16 left-0 w-full bg-light-green flex flex-col justify-start items-center py-8 shadow-md z-50'>
            <ul className='flex flex-col gap-8'>
                <li>
                    <Link href="/o-mnie" className="text-xl text-white font-medium" onClick={onClose}>O mnie</Link>
                </li>
                <li>
                    <Link href="/oferta" className="text-xl text-white font-medium" onClick={onClose}>Oferta</Link>
                </li>
                <li>
                    <Link href="/kontakt" className="text-xl text-white font-medium" onClick={onClose}>Kontakt</Link>
                </li>
            </ul>
        </motion.nav>
    );
}