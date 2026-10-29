"use server"

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export type ActionState = {
    success: boolean;
    message: string;
    fields?: {
        email?: string;
    };
} | null;

export async function loginUser(prevState: ActionState, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    try {
        const result = await signIn('credentials', { 
            redirect: false,
            email: email,
            password: password
        });

        if (!result || (typeof result === "string" && result.includes("error="))) {
            return {
                success: false,
                message: "Nieprawidłowy email lub hasło",
                fields: { email },
            };
        }

        return { 
            success: true,
            message: "Zalogowano pomyślnie!"
        };

    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { 
                        success: false,
                        message: "Nieprawidłowy email lub hasło",
                        fields: {
                            email: email
                        }
                    };
                default:
                    return { success: false, message: "Wystąpił błąd podczas logowania" };
            }
        }
        throw error;
    }
}