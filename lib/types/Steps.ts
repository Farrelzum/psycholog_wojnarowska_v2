import { StaticImageData } from "next/image";

export interface Steps {
    title: string;
    step: number;
    image: StaticImageData;
}