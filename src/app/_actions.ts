"use server";
import nodemailer from 'nodemailer';

export async function sendEmail({email, name, org, message}: {email: string, name?: string, org?: string, message?: string}){
    const HOST = process.env.NEXT_PUBLIC_HOST;
    const EMAIL = process.env.NEXT_PUBLIC_EMAIL;
    const PASS = process.env.NEXT_PUBLIC_PASS;
    const EMAILTO = process.env.NEXT_PUBLIC_TOEMAIL;
    const BACKEND_URL = process.env.BACKEND_URL;
    
    // Conection with nodemailer
    const mailTransporter = nodemailer.createTransport({
        host: HOST,
        port: 587,
        secure: false,
        service: "Gmail",
        auth: {
            user: EMAIL,
            pass: PASS,
        },
    });
    
    //Prepare the message
    let mailDetails = message ? {
        from: EMAIL,
        to: EMAILTO,
        subject: org ? `Contact request by ${name}, from ${org}` : `Contact request by ${name}`,
        text: `${email}: ${message}`,
        } : {
        from: EMAIL,
        to: EMAILTO,
        subject: `${email} has joined the waitlist!`,
    }
    
    //Send Email
    await new Promise((resolve, reject) => {
        mailTransporter.sendMail(mailDetails, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });

    // Save email
    try {
        await fetch(`${BACKEND_URL}api/wait-list/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
    } catch (e) {
        console.log(e);
    }

    return { success: true };
}