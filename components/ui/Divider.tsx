import { Leaf } from 'lucide-react';

interface Props {
    className?: string;
}

export default function Divider({ className = '' }: Props) {
    return (
        <div className={`flex justify-center items-center gap-4 w-full ${className}`}>
            <div className="w-full border-t border-main" />
            <Leaf size={16} className="text-main shrink-0" />
            <div className="w-full border-t border-main" />
            
        </div>
    );
}