import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export interface Offer {
        name: string;
        description: string;
        price: string;
        path: string;
        Icon: LucideIcon;
        image: StaticImageData;
        slug: string;
}