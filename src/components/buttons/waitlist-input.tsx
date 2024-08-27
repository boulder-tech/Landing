'use client';
import { sendEmail } from '@/app/_actions';
import BrandButton from "./brand-button";
import React from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Waitlist = () => {
    //Toast notifications
    const toastSuccess = () => toast.success("Your email has been sent! We'll get back to you shortly");
    const toastEmailError = () => toast.error('Please enter a valid email');
    
    //Function called when form is submited
    const submitWaitlist = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
 
        if(ValidateEmail(String(data.email))){
            submitEmail({ email: String(data.email) });
            e.currentTarget.reset();
            void toastSuccess();
            return;
        }
        void toastEmailError();
        return;
    }

    //Function for validating email adress
    const ValidateEmail = (mail: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true) //Valid email
    }
    return (false) //Invalid
    }

    //Function for calling email api
    const submitEmail = async ({email}: { email: string }) => {
        await sendEmail({email})
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log('Error', err)
            throw new Error('Network error.')
        })
    }

    return (
        <form onSubmit={submitWaitlist} className="p-1 pl-4 bg-gray-100 border border-gray-100 max-w-sm w-full rounded-full flex gap-1 z-10">
          <input
            type="text"
            name='email'
            className="px-2 w-full font-medium outline-none border-none bg-transparent text-foreground-heading text-sm placeholder:text-foreground-dark"
            placeholder="Email address..."
          />
          <BrandButton>Sign up for Beta →</BrandButton>
        </form>
    );
  };
  export default Waitlist;