import LoginForm from "./_components/LoginForm";
import Image from "next/image";
import bg from '@/images/logIn/bg_login.webp';


export default function LoginPage() {
    return (
        <main className="flex overflow-y-hidden flex-col items-center p-8">
            <Image 
                src={bg} 
                alt="" 
                fill 
                className="object-cover object-center -z-10" 
                priority
            />
            <h1 className="
                mb-4 font-semibold
                md:mb-6 self-center md:font-normal
                lg:mb-8"
            >
                Zaloguj
            </h1>
            <div className="
                w-full max-w-md 
                mt-2 p-10 
                bg-warm-brown rounded-md shadow-md"
            >
                <LoginForm />
            </div>
        </main>
    );
}