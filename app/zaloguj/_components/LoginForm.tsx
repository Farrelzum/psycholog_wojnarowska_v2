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
    const [email, setEmail] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const showToast = useToastStore((state) => state.showToast);
    const router = useRouter();

    useEffect(() => {
        const savedEmail = localStorage.getItem("rememberedEmail");
        if (savedEmail) {
            // Dodajemy ten komentarz, żeby linter przestał marudzić:
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setEmail(savedEmail);
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setRememberMe(true);
        }
    }, []);

    useEffect(() => {
        if (state?.message) {
            const toastStatus = state.success ? "success" : "error";
            showToast(toastStatus, state.message);
        }

        if (state?.success) {
            if (rememberMe) {
                localStorage.setItem("rememberedEmail", email);
            } else {
                localStorage.removeItem("rememberedEmail");
            }
            router.push('/');
            router.refresh();
        }

    }, [state, router, email, rememberMe, showToast]);

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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                        className="p-2 pr-10 bg-white ring-1 ring-green-800 rounded focus:outline-none focus:ring-2 focus:ring-green-600 transition-shadow w-full"
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
            <div className="flex items-center gap-2 md:col-span-2">
                <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="
                        w-4 h-4 text-green-800 accent-green-800
                        bg-white ring-1 ring-green-800 rounded focus:ring-green-600 "
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember" className="text-base text-gray-800 select-none cursor-pointer">
                    Zapamiętaj mnie
                </label>
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