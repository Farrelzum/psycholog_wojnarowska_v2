'use server'

import prisma from "@/lib/prisma";
import { z } from "zod";
import bcrypt from "bcryptjs";

const patientSchema = z.object({
    email: z.email("Nieprawidłowy adres email"),
    password: z
        .string()
        .min(6, "Hasło musi mieć co najmniej 6 znaków,\nzawierać małą i wielką literę oraz cyfrę")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Hasło musi mieć co najmniej 6 znaków,\nzawierać małą i wielką literę oraz cyfrę"),
    repeatedPassword: z.string(),
    name: z
        .string()
        .min(2, "Imię musi mieć co najmniej 2 znaki")
        .max(30, "Imię zbyt długie. Maksymalnie 30 znaków"),
    surname: z
        .string()
        .min(2, "Nazwisko musi mieć co najmniej 2 znaki")
        .max(30, "Nazwisko zbyt długie. Maksymalnie 30 znaków"),
    phone: z
        .string()
        .trim()
        .regex(/^\+?(\d\s*){9,}$/, "Nieprawidłowy format numeru telefonu")
        .or(z.literal(""))
        .optional(),
}).refine((data) => data.password === data.repeatedPassword, {
    message: "Hasła nie są identyczne",
    path: ["repeatedPassword"],
});

export type ActionState = {
    success: boolean;
    message: string;
    fields?: {
        email?: string;
        name?: string;
        surname?: string;
        phone?: string;
    };
} | null;

export async function createPatient(
    prevState: ActionState,
    formData: FormData
): Promise<ActionState> {
    const rawData = {
        email: (formData.get("email") as string) ?? "",
        password: (formData.get("password") as string) ?? "",
        repeatedPassword: (formData.get("repeatedPassword") as string) ?? "",
        name: (formData.get("name") as string) ?? "",
        surname: (formData.get("surname") as string) ?? "",
        phone: (formData.get("phone") as string) ?? "",
    };

    const isCorrect = patientSchema.safeParse(rawData);

    if (!isCorrect.success) {
        const firstErrorMessage = isCorrect.error.issues[0]?.message || "Niepoprawne dane użytkownika";
        return {
            success: false,
            message: firstErrorMessage,
            fields: {
                email: rawData.email,
                name: rawData.name,
                surname: rawData.surname,
                phone: rawData.phone,
            },
        };
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email: isCorrect.data.email },
        });

        if (existingUser) {
            return {
                success: false,
                message: "Użytkownik z tym adresem email już istnieje",
                fields: {
                    email: rawData.email,
                    name: rawData.name,
                    surname: rawData.surname,
                    phone: rawData.phone,
                },
            };
        }

        const hashedPassword = await bcrypt.hash(isCorrect.data.password, 10);

        const newPatient = await prisma.user.create({
            data: {
                email: isCorrect.data.email,
                password: hashedPassword,
                name: isCorrect.data.name,
                surname: isCorrect.data.surname,
                phone: isCorrect.data.phone || null,
                role: "PATIENT",
            },
        });

        console.log("Dodano pacjenta: ", `${isCorrect.data.name} ${isCorrect.data.surname} Id: ${newPatient.id}`);

        return { success: true, message: "Pacjent został pomyślnie dodany" };
    } catch (error) {
        console.error("Błąd podczas dodawania pacjenta:", error);

        return {
            success: false,
            message: "Nie udało się stworzyć pacjenta",
            fields: {
                email: rawData.email,
                name: rawData.name,
                surname: rawData.surname,
                phone: rawData.phone,
            },
        };
    }
}