'use server'

import prisma from "@/lib/prisma";

export async function createPatient(formData: FormData) {
    const name = formData.get("name") as string;
    const surname = formData.get("surname") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    try {
        const newPatient = await prisma.user.create({
            data: {
                name,
                surname,
                email,
                phone: phone || null,
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