import { Leaf } from 'lucide-react';

interface Props {
    className?: string;
}

export default function TherapistCard({ className = '' }: Props) {
    return (
        <div className={`
                flex flex-col items-center
                rounded border bg-warm-sand 
                p-2 w-11/12 max-w-sm md:w-96
                ${className}`}
        >
            <h2 className='font-bold'>Barbara Wojnarowska</h2>
            <span className='font-semibold'>Psycholog | Terapeuta Integracji Sensorycznej</span>
            <Leaf size={40} className='text-gold' aria-hidden='true'/>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Barbara Wojnarowska",
                        "jobTitle": "Psycholog | Terapeuta Integracji Sensorycznej"
                    })
                }}
            />
        </div>
    );
}