'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserData } from '../../../lib/types/UserData';
import { sendEmail } from '@/actions/sendEmail';
import { useToastStore } from '@/lib/store/useToastStore';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const showToast = useToastStore((state) => state.showToast);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        if (formData.get('honey')) {
            showToast(
                'success',
                'Wiadomość została pomyślnie wysłana. Dziękuję za kontakt!'
            )
            setIsSubmitting(false);
            return;
        }

        const userData: UserData = {
            name: String(formData.get('name')),
            email: String(formData.get('email')),
            phone: formData.get('phone') ?
                String(formData.get('phone')) : '',
            message: String(formData.get('message')),
            rodo: formData.get('rodo') === 'on' ? true : false,
        }

        try {
            const result = await sendEmail(userData);
            if (!result.success) {
                throw new Error("Server sending error");
            }
            showToast(
                'success',
                'Wiadomość została pomyślnie wysłana. Dziękuję za kontakt!'
            )
            form.reset();
        } catch {
            showToast(
                'error',
                'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.'
            )
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form 
            className="
                flex flex-col gap-4
                md:grid md:grid-cols-2 md:gap-x-[2rem] md:gap-y-[1.25rem] w-full max-w-4xl mx-auto"
            onSubmit={handleSubmit}

        >
            <div className="flex flex-col gap-1 md:gap-[0.5rem]">
                <label htmlFor="name" className="font-medium text-gray-800">Imię:</label>
                <input
                    name="name" 
                    type="text"
                    id="name"
                    placeholder="Wpisz swoje imię"
                    className="p-2 bg-white ring-1 ring-green-800 rounded focus:outline-none focus:ring-2 focus:ring-green-600 transition-shadow"
                    autoComplete="name"
                    required
                />
            </div>
            <div className="flex flex-col gap-1 md:gap-[0.5rem]">
                <label htmlFor="email" className="font-medium text-gray-800">Email:</label>
                <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="twój@email.pl"
                    className="p-2 bg-white ring-1 ring-green-800 rounded focus:outline-none focus:ring-2 focus:ring-green-600 transition-shadow"
                    autoComplete="email"
                    required
                />
            </div>
            <div className="flex flex-col gap-1 md:gap-[0.5rem]">
                <label htmlFor="phone" className="font-medium text-gray-800">Numer telefonu (opcjonalnie):</label>
                <input
                    name="phone"
                    type="tel"
                    id="phone"
                    placeholder="+48 123 456 789"
                    className="p-2 bg-white ring-1 ring-green-800 rounded focus:outline-none focus:ring-2 focus:ring-green-600 transition-shadow"
                    autoComplete="tel"
                />
            </div>
            <div className="flex flex-col gap-1 md:gap-[0.5rem] md:col-start-2 md:row-start-1 md:row-span-3">
                <label htmlFor="message" className="font-medium text-gray-800">Treść wiadomości:</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Opisz, w czym mogę pomóc..."
                    className="p-2 bg-white ring-1 ring-green-800 rounded focus:outline-none focus:ring-2 focus:ring-green-600 transition-shadow resize-y h-32 md:h-full"
                    required
                />
            </div>
            <div className="flex items-start gap-2 md:gap-[0.5rem] md:col-span-2 md:mt-[0.5rem]">
                <input
                    type="checkbox"
                    name="rodo"
                    id="rodo"
                    required
                    className="mt-1 min-w-[1rem] min-h-[1rem] accent-green-800 cursor-pointer"
                />
                <label htmlFor="rodo" className="text-xs md:text-[0.875rem] text-gray-700 leading-snug cursor-pointer">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych przez Barbarę Wojnarowską – psychologa, w celu realizacji kontaktu oraz umówienia wizyty, zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO). Zostałam/em poinformowana/y, że mam prawo do wglądu, poprawiania i usunięcia swoich danych.
                </label>
            </div>
            
            {/* Honeypot */}
            <input
                name="honey"
                type="text"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
            />

            <motion.button 
                type="submit" 
                className={`
                    mt-2 md:mt-0 md:col-span-2 md:justify-self-end
                    px-8 py-3 bg-green-800 text-white rounded font-medium min-w-[200px] transition-colors btn-focus
                    ${isSubmitting ?
                        'opacity-70 cursor-not-allowed' : 'hover:bg-green-700'}`}
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { y: -5 } : {}}
                whileTap= {!isSubmitting ? { scale: 0.95 } : {}}
            >
                {isSubmitting ? "Wysyłanie..." : "Wyślij"}
            </motion.button>
        </form>
    )
}