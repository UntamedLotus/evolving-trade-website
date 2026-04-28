"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
    User,
    AtSign,
    Briefcase,
    MessageSquare,
    Send,
    CheckCircle2,
    AlertCircle,
    Loader2,
    Phone as PhoneIcon,
} from "lucide-react";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
        "idle"
    );
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSubmitting(true);
        setSubmitStatus("idle");

        const formData = new FormData(formRef.current);
        const phone = formData.get("phone") as string;
        const phoneDigits = phone?.replace(/\D/g, "") || "";
        
        if (phoneDigits.length < 10) {
            setSubmitStatus("error");
            setErrorMessage("Please enter a valid phone number with at least 10 digits.");
            setIsSubmitting(false);
            return;
        }

        try {
            // Note: These env variables should be prefixed with NEXT_PUBLIC_ to be available on the client
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
            );

            setSubmitStatus("success");
            formRef.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setSubmitStatus("error");
            setErrorMessage("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='bg-white rounded-3xl p-8 md:p-10 shadow-2xl h-full flex flex-col justify-center'>
            <h2 className='text-2xl md:text-3xl font-bold text-primary-blue mb-8'>
                Send us a Message
            </h2>

            {submitStatus === "success" && (
                <div className='mb-8 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700 animate-in fade-in slide-in-from-top-2 duration-300'>
                    <CheckCircle2 className='w-6 h-6 shrink-0' />
                    <p className='font-medium'>
                        Thank you! Your message has been sent successfully.
                    </p>
                </div>
            )}

            {submitStatus === "error" && (
                <div className='mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 animate-in fade-in slide-in-from-top-2 duration-300'>
                    <AlertCircle className='w-6 h-6 shrink-0' />
                    <p className='font-medium'>{errorMessage}</p>
                </div>
            )}

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='space-y-6'
            >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                        <label className='text-sm font-medium text-primary-grey ml-1'>
                            First Name
                        </label>
                        <div className='relative'>
                            <User className='absolute left-4 top-3.5 w-5 h-5 text-gray-400' />
                            <input
                                name='first_name'
                                required
                                className='w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-ocean focus:ring-2 focus:ring-primary-ocean/20 outline-none transition-all bg-gray-50 focus:bg-white text-primary-blue'
                                placeholder='John'
                            />
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <label className='text-sm font-medium text-primary-grey ml-1'>
                            Last Name
                        </label>
                        <div className='relative'>
                            <User className='absolute left-4 top-3.5 w-5 h-5 text-gray-400' />
                            <input
                                name='last_name'
                                required
                                className='w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-ocean focus:ring-2 focus:ring-primary-ocean/20 outline-none transition-all bg-gray-50 focus:bg-white text-primary-blue'
                                placeholder='Doe'
                            />
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <label className='text-sm font-medium text-primary-grey ml-1'>
                            Email Address
                        </label>
                        <div className='relative'>
                            <AtSign className='absolute left-4 top-3.5 w-5 h-5 text-gray-400' />
                            <input
                                name='email'
                                type='email'
                                required
                                className='w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-ocean focus:ring-2 focus:ring-primary-ocean/20 outline-none transition-all bg-gray-50 focus:bg-white text-primary-blue'
                                placeholder='john@example.com'
                            />
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <label className='text-sm font-medium text-primary-grey ml-1'>
                            Phone Number
                        </label>
                        <div className='relative'>
                            <PhoneIcon className='absolute left-4 top-3.5 w-5 h-5 text-gray-400' />
                            <input
                                name='phone'
                                type='tel'
                                required
                                minLength={10}
                                maxLength={20}
                                pattern='^\+?[0-9\s\-\(\)]{10,20}$'
                                title='Please enter a valid phone number (e.g. +91 98765 43210)'
                                className='w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-ocean focus:ring-2 focus:ring-primary-ocean/20 outline-none transition-all bg-gray-50 focus:bg-white text-primary-blue'
                                placeholder='+91 98765 43210'
                                onInput={(e) => {
                                    const target = e.target as HTMLInputElement;
                                    target.value = target.value.replace(/[^\d\+\s\-\(\)]/g, '');
                                }}
                            />
                        </div>
                    </div>

                    <div className='space-y-2 md:col-span-2'>
                        <label className='text-sm font-medium text-primary-grey ml-1'>
                            Subject / Company
                        </label>
                        <div className='relative'>
                            <Briefcase className='absolute left-4 top-3.5 w-5 h-5 text-gray-400' />
                            <input
                                name='subject'
                                required
                                className='w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-ocean focus:ring-2 focus:ring-primary-ocean/20 outline-none transition-all bg-gray-50 focus:bg-white text-primary-blue'
                                placeholder='Inquiry about Spices Export'
                            />
                        </div>
                    </div>
                </div>

                <div className='space-y-2'>
                    <label className='text-sm font-medium text-primary-grey ml-1'>
                        Your Message
                    </label>
                    <div className='relative'>
                        <MessageSquare className='absolute left-4 top-3.5 w-5 h-5 text-gray-400' />
                        <textarea
                            name='message'
                            className='w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-ocean focus:ring-2 focus:ring-primary-ocean/20 outline-none transition-all bg-gray-50 focus:bg-white min-h-[120px] text-primary-blue'
                            placeholder='Tell us how we can help you...'
                            required
                        />
                    </div>
                </div>

                <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full bg-primary-ocean hover:bg-secondary-ocean text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none'
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className='w-5 h-5 animate-spin' />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className='w-5 h-5' />
                            Send Message
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
