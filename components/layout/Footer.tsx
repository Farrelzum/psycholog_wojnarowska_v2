import Image from 'next/image';
import location from '@/images/mainPage/location.webp';

export default function Footer() {
    return (
        <section className='bg-main'>
            <Image 
                src={location}
                alt=''
                className='w-20 h-20 rounded-r-lg'
            />
        </section>
    );
}