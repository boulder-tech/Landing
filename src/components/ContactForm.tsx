'use client';
import React from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    //Toast notifications
    const toastSuccess = () => toast.success("Your email has been sent! We'll get back to you shortly");
    const toastEmailError = () => toast.error('Please enter a valid email');
    const toastError = () => toast.error('Please complete the entire form');

    //Function called when form is submited
    const submitContact = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())

        if(data.email && data.name && data.message) {
            if(ValidateEmail(String(data.email))){
                sendEmail({ email: String(data.email), name: String(data.name), org: String(data.org) || '-', message: String(data.message) });
                e.currentTarget.reset();
                void toastSuccess();
                return;
            }
            void toastEmailError();
            return;
        }
        void toastError();
    }

    //Function for calling email api
    const sendEmail = async ({email, name, org, message}: {email: string, name: string, org: string, message: string}) => {
        await fetch('/api/sendmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, name, org, message }),
            })
            .then((res) => {
                if (!res.ok) {
                throw new Error()
                }
                return res.json()
            })
            .catch((err) => {
                console.log('Error', err)
                throw new Error('Network error.')
            })
    }

    //Function for validating email adress
    const ValidateEmail = (mail: string) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true) //Valid email
        }
        return (false) //Invalid
    }

    return (
        <form action="submit" onSubmit={submitContact} className="grid gap-4 md:max-w-[32rem] md:min-w-[20rem] w-full z-10">
            <input name="name" placeholder="Your name *" type="text" className="w-full p-3 pl-5 h-fit rounded-lg border border-gray-100 bg-[#fafbff0a] backdrop:blur-[5px] placeholder:text-[#485069] shadow-md" />
            <div className="flex sm:flex-row flex-col gap-4">
                <input name="email" placeholder="Email *" type="text" className="w-full p-3 pl-5 h-fit rounded-lg border border-gray-100 bg-[#fafbff0a] backdrop:blur-[5px] placeholder:text-[#485069] shadow-md" />
                <input name="org" placeholder="Organization" type="text" className="w-full p-3 pl-5 h-fit rounded-lg border border-gray-100 bg-[#fafbff0a] backdrop:blur-[5px] placeholder:text-[#485069] shadow-md" />
            </div>
            <textarea name="message" placeholder="Message *" className="w-full resize-none  p-3 pl-5 h-32 flex items-start justify-start rounded-lg border border-gray-100 bg-[#fafbff0a] backdrop:blur-[5px] placeholder:text-[#485069] shadow-md"/>
            <button type="submit" className="p-3 rounded-[0.625rem] bg-accent sm:w-[9.5rem] w-full">Submit</button>
        </form>
    );
}

export default ContactForm;