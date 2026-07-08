import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../../public/favicon.png';

interface LogoProps {
    className?: string;
    textClassName?: string;
    onClick?: () => void;     
    hideText?: boolean;  
}

export default function Logo({ className = '', textClassName = '', onClick, hideText = false }: LogoProps) {
    return (
        <Link 
            href="/" 
            onClick={onClick}
            className={`flex items-center gap-2 transition-opacity duration-300 ease-in-out hover:opacity-80 rounded btn-focus ${className}`}
        >
            <Image 
                src={logoImg} 
                alt="Logo Psycholog Barbara Wojnarowska" 
                width={40} 
                height={40} 
                className="w-10 h-10 object-contain" 
                priority 
            />
            {!hideText && (
                <h1 className={`font-medium text-lg tracking-wide ${textClassName}`}>
                    Psycholog Barbara Wojnarowska
                </h1>
            )}
        </Link>
    );
}