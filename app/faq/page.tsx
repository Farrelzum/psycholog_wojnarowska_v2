import { faq } from "@/lib/constants/faq";
import FaqItem from "./_components/FaqItem";

export default function FAQ() {
  return (
    <main className="
      flex flex-col items-center min-h-screen
      p-8 mx-auto max-w-4xl"
    >
      <div className="flex flex-col self-start ml-4">
        <h1 className="text-3xl text-warm-brown lg:text-4xl">FAQ</h1>
        <h2 className="text-xl text-warm-brown lg:text-2xl font-semibold">Najczęściej zadawane pytania:</h2>      
      </div>
      <div className="flex flex-col gap-2 p-4 md:py-6">
        {faq.map((item) => {
          return (<FaqItem key={item.id} item={item} />)
        })}
      </div>
    </main>
  );
}