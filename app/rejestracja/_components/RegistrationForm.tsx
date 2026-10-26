"use client"

import { useActionState, useEffect } from "react";
import { createPatient } from "@/actions/users";
import { useToastStore } from "@/lib/store/useToastStore";
import { motion } from "framer-motion";

export default function RegistrationForm() {
    const [state, formAction, isPending] = useActionState(createPatient, null);
    const showToast = useToastStore((state) => state.showToast);

    useEffect(() => {
        if (state?.message) {
            const toastStatus = state.success ? "success" : "error";
            showToast(toastStatus, state.message);
        }
    }, [state, showToast]);

    return (
        <form 
            action={formAction} 
            className="
                flex flex-col gap-4
                md:grid md:grid-cols-2 md:gap-x-[2rem] md:gap-y-[1.25rem]
                w-full max-w-4xl mx-auto"
        >
            <div className="flex flex-col gap-1 md:gap-[0.5rem]">
                <label htmlFor="email" className="font-medium text-gray-800">
                    Email:
                </label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    defaultValue={state?.fields?.email}
                    placeholder="twój@email.pl"
                    className="p-2 bg-white ring-1 ring-green-800 rounded focus:outline-none focus:ring-2 focus:ring-green-600 transition-shadow"
                    autoComplete="email"
                    required
                />
            </div>
                        <div className="flex flex-col gap-1 md:gap-[0.5rem]">
                <label htmlFor="phone" className="font-medium text-gray-800">
                    Numer telefonu (opcjonalnie):
                </label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    defaultValue={state?.fields?.phone}
                    placeholder="+48 123 456 789"
                    className="p-2 bg-white ring-1 ring-green-800 rounded focus:outline-none focus:ring-2 focus:ring-green-600 transition-shadow"
                    autoComplete="tel"
                />
            </div>
            <div className="flex flex-col gap-1 md:gap-[0.5rem]">
                <label htmlFor="password" className="font-medium text-gray-800">
                    Hasło:
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Wpisz swoje hasło"
                    className="p-2 bg-white ring-1 ring-green-800 rounded focus:outline-none focus:ring-2 focus:ring-green-600 transition-shadow"
                    required
                />
            </div>
            <div className="flex flex-col gap-1 md:gap-[0.5rem]">
                <label htmlFor="repeatedPassword" className="font-medium text-gray-800">
                    Powtórz hasło:
                </label>
                <input
                    type="password"
                    name="repeatedPassword"
                    id="repeatedPassword"
                    placeholder="Powtórz swoje hasło"
                    className="p-2 bg-white ring-1 ring-green-800 rounded focus:outline-none focus:ring-2 focus:ring-green-600 transition-shadow"
                    required
                />
            </div>
            <div className="flex flex-col gap-1 md:gap-[0.5rem]">
                <label htmlFor="name" className="font-medium text-gray-800">
                    Imię:
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={state?.fields?.name}
                    placeholder="Wpisz swoje imię"
                    className="p-2 bg-white ring-1 ring-green-800 rounded focus:outline-none focus:ring-2 focus:ring-green-600 transition-shadow"
                    autoComplete="given-name"
                    required
                />
            </div>
            <div className="flex flex-col gap-1 md:gap-[0.5rem]">
                <label htmlFor="surname" className="font-medium text-gray-800">
                    Nazwisko:
                </label>
                <input
                    type="text" 
                    name="surname"
                    id="surname"
                    defaultValue={state?.fields?.surname}
                    placeholder="Podaj swoje nazwisko"
                    className="p-2 bg-white ring-1 ring-green-800 rounded focus:outline-none focus:ring-2 focus:ring-green-600 transition-shadow"
                    autoComplete="family-name"
                    required
                />
            </div>
            <motion.button
                type="submit"
                disabled={isPending}
                className="
                    flex items-center justify-center gap-2 mt-4 mx-auto
                    bg-gold rounded-md border p-2 btn-focus
                    font-serif text-pearl
                    w-full max-w-md md:col-span-2 md:max-w-[15rem]"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
            >
                {isPending ? "Trwa rejestracja..." : "Zarejestruj się"}
            </motion.button>
        </form>
    );
}