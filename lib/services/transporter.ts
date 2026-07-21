import nodemailer from 'nodemailer';

const globalForNodemailer = globalThis as unknown as {
    transporter: nodemailer.Transporter | undefined;
};

export const transporter =
    globalForNodemailer.transporter ??
    nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

if (process.env.NODE_ENV !== 'production') {
    globalForNodemailer.transporter = transporter;
}