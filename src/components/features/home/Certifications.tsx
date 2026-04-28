import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const Certifications = () => {
    return (
        <div className='bg-white py-10 px-6 md:px-20 lg:px-40 space-y-10 lg:space-y-20'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <h2 className='text-3xl md:text-4xl font-bold text-primary-blue text-center'>
                    <span className='text-primary-ocean'>Certifications & Membership</span>
                </h2>
                <div className='flex items-center gap-2'>
                    <div className='h-1 w-16 md:w-20 mt-2 bg-secondary-ocean rounded-full'></div>
                    <CheckCircle className='text-secondary-ocean w-6 h-6 md:w-8 md:h-8' />
                    <div className='h-1 w-16 md:w-20 mt-2 bg-secondary-ocean rounded-full'></div>
                </div>
                <p className='text-primary-grey font-medium text-base md:text-lg max-w-2xl text-center'>
                    We are committed to maintaining the highest global standards of quality and safety.
                </p>
            </div>

            <div className="relative h-[700px] w-full">
                <Image
                    src="/images/pages/certifications/certifications.webp"
                    alt="certification"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default Certifications;
