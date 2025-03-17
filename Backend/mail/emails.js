import { transporter, sender } from './nodemailer.config.js';
import { welcomeEmailTemplate } from './emailTemplate.js';

export const sendWelcomeEmail = async (email, name) => {
    const htmlTemplate = welcomeEmailTemplate.replaceAll('{name}', name);

    try {
        const info = await transporter.sendMail({
            from: sender,
            to: email,
            subject: 'Welcome to MediConnect',
            html: htmlTemplate
        });

        console.log('Welcome email sent:', info.messageId);
    } catch (error) {
        console.error('Error sending welcome email:', error.message);
        throw new Error(`Error sending welcome email: ${error.message}`);
    }
};