import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <div className='relative h-[60vh] w-full'>
            <div className='absolute inset-0'>
                <Image
                    src='/banner-certifications.webp'
                    alt='Certifications Background'
                    fill
                    className='object-cover'
                    priority
                />
                <div className='absolute inset-0 bg-gradient-to-r from-primary-blue/90 to-primary-blue/60' />
            </div>

            <div className='relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4'>
                <h1 className='text-3xl md:text-5xl font-bold mb-4'>
                    Certifications
                </h1>
                <p className='text-lg md:text-xl mb-6'>
                    Commitment to Quality and Safety
                </p>
                <nav className='flex items-center gap-2 text-sm'>
                    <Link
                        href='/'
                        className='hover:text-secondary-grey transition-colors'
                    >
                        Home
                    </Link>
                    <span>&gt;</span>
                    <span className='font-semibold'>Certification</span>
                </nav>
            </div>
        </div>
    );
};

export default Hero;
