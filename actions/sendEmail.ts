'use server'

import { transporter } from '../lib/services/transporter';
import { FormData } from '@/lib/types/FormData';

export async function sendEmail(formData: FormData) {
    const { name, email, phone, message, honey } = formData;

    if (honey) {
        console.log("Bot has been catched!");
        return { success: true }; 
    }

    const mailToTherapist = {
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: `Nowe zgłoszenie ze strony - ${name}`,
        text: `Imię: ${name}\nEmail: ${email}\nTelefon: ${phone}\n\nWiadomość:\n${message}`,
    }

    const mailToClient = {
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Potwierdzenie otrzymania wiadomości',
        text: 'Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe :)'
    };

    try {
        await transporter.verify();
        console.log("Server is ready to take our messages");
    } catch (err) {
        console.error("Verification failed:", err);
        return { success: false };
    }

    try {
        await Promise.all([
            transporter.sendMail(mailToTherapist),
            transporter.sendMail(mailToClient)
        ])

        return { success: true };
    } catch(error) {
        return { success: false };
    }


}