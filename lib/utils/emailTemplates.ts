export const getTherapistEmailHtml = (name: string, email: string, phone: string, message: string) => `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #166534; margin-bottom: 20px;">Nowa wiadomość ze strony</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Imię:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #166534;">${email}</a></td>
            </tr>
            <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Telefon:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${phone || 'Nie podano'}</td>
            </tr>
        </table>
        <h3 style="color: #166534; margin-bottom: 10px;">Treść wiadomości:</h3>
        <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; white-space: pre-wrap; line-height: 1.5;">${message}</div>
    </div>
`;

export const getClientEmailHtml = (name: string) => `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; background-color: beige; margin: 0 auto; padding: 20px; border: 1px solid gold; border-radius: 8px;">
        <h2 style="color: #166534;">Dzień dobry, ${name}!</h2>
        <p style="font-size: 16px; line-height: 1.5;">Dziękuję za kontakt. Potwierdzam otrzymanie Twojej wiadomości.</p>
        <p style="font-size: 16px; line-height: 1.5;">Postaram się odpowiedzieć najszybciej jak to możliwe.</p>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
        
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td style="font-size: 14px; color: #4b5563; line-height: 1.4; vertical-align: top;">
                    Pozdrawiam serdecznie,<br/>
                    <strong style="color: #166534;">Barbara Wojnarowska</strong><br/>
                    Psycholog | Terapeuta Integracji Sensorycznej
                </td>
                
                <td style="vertical-align: center; text-align: right; width: 100px;">
                    <img 
                        src="https://i.postimg.cc/65Dx9gk0/favicon-transp.png" 
                        alt="Logo" 
                        style="display: block; margin-left: auto; max-width: 80px; height: auto;" 
                    />
                </td>
            </tr>
        </table>
    </div>
`;

//"https://psycholog-wojnarowska.pl/favicon.png"