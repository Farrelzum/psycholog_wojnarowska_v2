'use server'

import prisma from "@/lib/prisma";
import { z } from "zod";
import bcrypt from "bcryptjs";

const patientSchema = z.object({
    login: z
        .string()
        .min(3, "Login musi mieć conajmniej 3 znaki")
        .max(30, "Login zbyt długi. Maksymalnie 30 znaków"),
    password: z
        .string()
        .min(6, "Hasło musi mieć conajmniej 6 znaków")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Hasło musi zawierać małą i wielką literę oraz cyfrę"),
    name: z
        .string()
        .min(2, "Imię musi mieć conajmniej 2 znaki")
        .max(30, "Imię zbyt długie. Maksymalnie 30 znaków"),
    surname: z
        .string().min(2, "Nazwisko musi mieć conajmniej 2 znaki")
        .max(30, "Nazwisko zbyt długie. Maksymalnie 30 znaków"),
    email: z.email("Nieprawidłowy adres email"),
    phone: z
        .string()
        .regex(/^(\+?\d[\d\s]*){9,}$/, "Nieprawidłowy format numeru telefonu")
        .or(z.literal(""))
        .optional(),
})

export async function createPatient(formData: FormData) {
    const login = formData.get("login") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;
    const surname = formData.get("surname") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    const isCorrect = patientSchema.safeParse({
        login,
        password,
        name,
        surname,
        email,
        phone,
    });

    if (!isCorrect.success) {
        return { success: false, message: "Niepoprawne dane użytkownika"};
    }

    const hashedPassword = bcrypt.hashSync(isCorrect.data.password, 10);

    try {
        const newPatient = await prisma.user.create({
            data: {
                login: isCorrect.data.login,
                password: hashedPassword,
                name: isCorrect.data.name,
                surname: isCorrect.data.surname,
                email: isCorrect.data.email,
                phone: isCorrect.data.phone || null,
                role: 'PATIENT',
            }
        })

        console.log("Dodano pacjenta: ", `${name} ${surname} Id: ${newPatient.id}`);

        return { success: true, message: "Pacjent zostal pomyslnie dodany" };
    } catch(error) {
        console.error("Błąd podczas dodawania pacjenta:", error);

        return { success: false, message: "Nie udało się stworzyć pacjenta"};
    }

}