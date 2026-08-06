interface Props {
    children: React.ReactNode;
    className?: string;
}

export default function IvoryTile({ children, className = '' }: Props) {
    return (
        <div className={`bg-ivory rounded-md shadow-md ${className}`}>
            {children}
        </div>
    );
}