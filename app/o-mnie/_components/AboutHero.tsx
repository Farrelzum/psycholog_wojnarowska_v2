    import Image from "next/image";
    import aboutImage from '@/images/aboutMe/projekt_zdjęcia.png';
    import Divider from "@/components/ui/Divider";
    import { description } from "@/lib/constants/aboutMe";

    export default function AboutHero() {
        return ( 
            <section className="
            w-full max-w-5xl px-4 md:px-8 pt-12 md:pt-16 flex flex-col items-center"
            >
            <h1 className="text-3xl lg:text-4xl font-bold text-main mb-6">O mnie</h1>
            <Image
                src={aboutImage}
                alt="Portret psycholog Barbara Wojnarowska w gabinecie"
                className="mb-8 w-full object-cover object-center rounded-md max-h-[60vh]"
                priority
            />
            <Divider className='mb-8 w-full'/>
            <div className="w-full">
                {description.map((par, index) => (
                <p className='
                    text-main whitespace-pre-line
                    font-semibold
                    py-2 lg:text-lg' key={index}>
                    {par}
                </p>
                ))}
            </div>
            </section>)
    }