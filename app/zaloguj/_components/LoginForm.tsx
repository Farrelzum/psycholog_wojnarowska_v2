"use client"
import { useEffect, useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/actions/loginUser";
import { useToastStore } from "@/lib/store/useToastStore";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
    const [state, formAction, isPending] = useActionState(loginUser, null);
    const [showPassword, setShowPassword] = useState(false);
    const showToast = useToastStore((state) => state.showToast);
    const router = useRouter();

    useEffect(() => {
        if (state?.message) {
            const toastStatus = state.success ? "success" : "error";
            showToast(toastStatus, state.message);
        }

        if (state?.success) {
            router.push('/');
            router.refresh();
        }

    }, [state, router, showToast]);

    return (
        <form
            action={formAction} 
            className="
                flex flex-col gap-4
                w-full max-w-sm mx-auto"
        >
            <div className="flex flex-col gap-1 md:gap-[0.5rem]">
                <label
                    htmlFor="email"
                    className="font-medium text-gray-800"
                >
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={state?.fields?.email}
                    placeholder="twój@email.pl"
                    className="p-2 bg-white ring-1 ring-green-800 rounded focus:outline-none focus:ring-2 focus:ring-green-600 transition-shadow"
                    autoComplete="email"
                    required
                />
            </div>
            <div className="flex flex-col gap-1 md:gap-[0.5rem]">
                <label
                    htmlFor="password"
                    className="font-medium text-gray-800"
                >
                    Hasło
                </label>
                <div className="relative w-full">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Wpisz swoje hasło"
                        className="p-2 bg-white ring-1 ring-green-800 rounded focus:outline-none focus:ring-2 focus:ring-green-600 transition-shadow w-full"
                        autoComplete="current-password"
                        required
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-800 focus:outline-none transition-colors"
                        aria-label={showPassword ? "Ukryj hasło" : "Pokaż hasło"}
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
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
                {isPending ? "Trwa logowanie..." : "Zaloguj się"}
            </motion.button>
        </form>
    );
}