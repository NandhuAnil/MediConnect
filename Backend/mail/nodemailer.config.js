import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for port 587
  auth: {
    user: process.env.SMTP_EMAIL, // Your email address
    pass: process.env.SMTP_PASSWORD, // Your email password or app password
  },
  tls: {
    rejectUnauthorized: false, // Prevent self-signed certificate rejection
  },
});

export const sender = `"MediConnect" <no-reply@mediconnect.com>`;
