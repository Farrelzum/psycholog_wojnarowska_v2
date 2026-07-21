'use server'

import { transporter } from '../lib/services/transporter';
import { UserData } from '@/lib/types/UserData';
import { getTherapistEmailHtml, getClientEmailHtml } from '@/lib/utils/emailTemplates';

export async function sendEmail(formData: UserData) {
    const { name, email, phone = '', message } = formData;

    const mailToTherapist = {
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: `Nowe zgłoszenie ze strony - ${name}`,
        text: `Imię: ${name}\nEmail: ${email}\nTelefon: ${phone}\n\nWiadomość:\n${message}`,
        html: getTherapistEmailHtml(name, email, phone, message),
    }

    const mailToClient = {
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Potwierdzenie otrzymania wiadomości',
        text: 'Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe :)',
        html: getClientEmailHtml(name),
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
        console.error("Nodemailer sending error: ", error);
        return { success: false };
    }
}