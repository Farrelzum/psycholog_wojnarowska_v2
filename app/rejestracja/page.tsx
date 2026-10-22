import RegistrationForm from "./_components/RegistrationForm";

export default function RegistrationPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-8">
            <h1 className="
                mb-4 font-semibold
                md:mb-6 self-center md:font-normal
                lg:mb-8"
            >
                Załóż konto
            </h1>
            <RegistrationForm />
        </main>
    );
}