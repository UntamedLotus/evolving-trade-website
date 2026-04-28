import React, { JSX } from "react";
import Image from "next/image";
import {
	MapPin,
	Mail as MailIcon,
	Phone as PhoneIcon,
} from "lucide-react";

import { Metadata } from "next";
import ContactForm from "@/components/features/contact/ContactForm";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Get in touch with Evolving Trade Solutions. We are here to answer your questions and discuss how we can meet your agricultural export needs.",
};

export default function ContactPage(): JSX.Element {
	return (
		<div className='relative min-h-screen w-full bg-primary-blue'>
			{/* Background Image with Overlay */}
			<div className='absolute inset-0 z-0'>
				<Image
					src='/images/pages/contact-us/contact-bg.webp'
					alt='Contact Background'
					fill
					className='object-cover'
					priority
				/>
				<div className='absolute inset-0 bg-gradient-to-br from-primary-blue/95 via-primary-blue/90 to-primary-ocean/80' />
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28'>
				{/* Header Section */}
				<div className='text-center max-w-3xl mx-auto mb-16 text-white'>
					<h5 className='text-tertiary-ocean font-semibold tracking-wider uppercase mb-3'>
						Get in Touch
					</h5>
					<h1 className='text-4xl md:text-5xl font-bold leading-tight mb-6'>
						Let's Start a Conversation
					</h1>
					<p className='text-white/80 text-lg leading-relaxed'>
						Whether you're looking for premium spices, grains, or just want
						to say hello, we'd love to hear from you. Our team is ready to
						assist with all your export needs.
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch'>
					{/* Left Column: Contact Info Panel */}
					<div className='lg:col-span-5 h-full'>
						<div className='bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between gap-8 text-white shadow-xl'>
							<div>
								<h3 className='text-2xl font-bold mb-6'>Contact Information</h3>
								<p className='text-white/80 leading-relaxed'>
									Fill up the form and our Team will get back to you within 24
									hours.
								</p>
							</div>

							<div className='space-y-8'>
								<div>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2357442529874!2d73.81144817519271!3d18.563407582538442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb01d259663%3A0xd1c97c51e4c773f1!2sEvolving%20Trade%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1769964535997!5m2!1sen!2sin'
										width='100%'
										height='250'
										style={{ border: 0, borderRadius: "1rem" }}
										loading='lazy'
									></iframe>
								</div>
								{/* Address */}
								<div className='flex items-start gap-4'>
									<div className='p-3 bg-tertiary-ocean/20 rounded-full shrink-0'>
										<MapPin className='w-6 h-6 text-tertiary-ocean' />
									</div>
									<div>
										<h4 className='text-lg font-semibold mb-1'>Visit Us</h4>
										<p className='text-white/80 text-sm leading-relaxed'>
											Anupama Society, Body Gate, A-6, Phase 1, Siddarth Nagar
											Society, Aundh, Pune, Maharashtra 411007
										</p>
									</div>
								</div>

								{/* Email */}
								<div className='flex items-start gap-4'>
									<div className='p-3 bg-tertiary-ocean/20 rounded-full shrink-0'>
										<MailIcon className='w-6 h-6 text-tertiary-ocean' />
									</div>
									<div>
										<h4 className='text-lg font-semibold mb-1'>Email Us</h4>
										<a
											href='mailto:evolvingtradesolutions@gmail.com'
											className='text-white/80 text-sm hover:text-tertiary-ocean transition-colors'
										>
											evolvingtradesolutions@gmail.com
										</a>
									</div>
								</div>

								{/* Phone */}
								<div className='flex items-start gap-4'>
									<div className='p-3 bg-tertiary-ocean/20 rounded-full shrink-0'>
										<PhoneIcon className='w-6 h-6 text-tertiary-ocean' />
									</div>
									<div>
										<h4 className='text-lg font-semibold mb-1'>Call Us</h4>
										<a
											href='tel:+917887322121'
											className='text-white/80 text-sm hover:text-tertiary-ocean transition-colors'
										>
											+91 7887322121
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Contact Form */}
					<div className='lg:col-span-7 h-full'>
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
}


