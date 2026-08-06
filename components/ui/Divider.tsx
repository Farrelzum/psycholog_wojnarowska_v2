import { Leaf } from 'lucide-react';

interface Props {
    className?: string;
}

export default function Divider({ className = '' }: Props) {
    return (
        <div className={`
            flex justify-center items-center gap-4 w-full ${className}`}
            aria-hidden="true"
        >
            <div className="w-full border-t lg:border border-main" />
            <Leaf size={16} className="
                text-main shrink-0
                lg:w-6 lg:h-6"
            />
            <div className="w-full border-t lg:border border-main" />
            
        </div>
    );
}