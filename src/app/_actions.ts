"use server";
import { Resend } from "resend";
import nodemailer from 'nodemailer';

export async function sendEmail({email, name, org, message}: {email: string, name?: string, org?: string, message?: string}){
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
        from: process.env.NEXT_PUBLIC_EMAIL,
        to: process.env.NEXT_PUBLIC_TOEMAIL,
        subject: org ? `Contact request by ${name}, from ${org}` : `Contact request by ${name}`,
        text: `${email}: ${message}`,
        } : {
        from: process.env.NEXT_PUBLIC_EMAIL,
        to: process.env.NEXT_PUBLIC_TOEMAIL,
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