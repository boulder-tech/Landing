"use server";
import { Resend } from "resend";
import nodemailer from 'nodemailer';

export async function sendEmail({email, name, org, message}: {email: string, name: string, org?: string, message?: string}){
    // Conection with nodemailer
    const mailTransporter = nodemailer.createTransport({
        host: process.env.NEXT_PUBLIC_HOST,
        port: 587,
        secure: false,
        service: "Gmail",
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL,
            pass: process.env.NEXT_PUBLIC_PASS,
        },
    });
    
    //Prepare the message
    let mailDetails = message ? {
        from: email,
        to: process.env.NEXT_PUBLIC_EMAIL,
        subject: `${name}, from ${org}`,
        text: `${email}: ${message}`,
        } : {
        from: email,
        to: process.env.NEXT_PUBLIC_EMAIL,
        subject: `${email} has joined the waitlist!`,
    }
    
    //Send Email
    await new Promise((resolve, reject) => {
        mailTransporter.sendMail(mailDetails, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
                return { success: false , err };
            } else {
                console.log(info);
                resolve(info);
                return { success: true , info };
            }
        });
    });
}