import React from "react";
import { Eye, HeartHandshake, Sprout, Target } from "lucide-react";

const CustomerCentric = () => {
    const coreValues = [
        {
            title: "Our Mission",
            description: "To deliver high-quality, responsibly sourced food and agricultural products that meet international standards, while building lasting relationships with our global partners through reliability and trust.",
            icon: Target,
        },
        {
            title: "Our Vision",
            description: "To establish a strong global presence by collaborating with trusted trade partners worldwide and consistently delivering products that reflect quality, integrity, and timely execution.",
            icon: Eye,
        },
        {
            title: "Our Values",
            description: "We operate with a commitment to quality, ethics, and transparency. By upholding responsible business practices, we aim to create sustainable growth for our farmers, partners, employees, and customers.",
            icon: HeartHandshake,
        },
    ];

    return (
        <section className='py-16 px-4 md:px-8 lg:px-16 bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col items-center justify-center gap-4 mb-12 text-center'>
                    <h2 className='text-3xl md:text-4xl font-bold text-primary-blue'>
                        Our <span className='text-primary-ocean'>Core Purpose</span>
                    </h2>
                    <div className='flex items-center gap-2'>
                        <div className='h-1 w-16 bg-secondary-ocean rounded-full'></div>
                        <Sprout className='text-secondary-ocean w-6 h-6' />
                        <div className='h-1 w-16 bg-secondary-ocean rounded-full'></div>
                    </div>
                    <p className='text-primary-grey font-medium text-lg max-w-3xl'>
                        Guided by a clear mission, a forward-looking vision, and strong values, we work to elevate the standards of global agricultural trade.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {coreValues.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className='bg-white shadow-lg hover:shadow-2xl border border-secondary-grey/20 p-8 flex flex-col items-center text-center rounded-2xl transition-all duration-300 transform hover:-translate-y-2 group'
                            >
                                <div className="p-5 bg-secondary-grey/10 rounded-full mb-6 group-hover:bg-primary-ocean transition-colors duration-300">
                                    <Icon className='w-12 h-12 text-primary-ocean group-hover:text-white transition-colors duration-300' />
                                </div>
                                <h3 className='text-2xl font-bold text-primary-blue mb-4 group-hover:text-primary-ocean transition-colors duration-300'>
                                    {item.title}
                                </h3>
                                <p className='text-primary-grey leading-relaxed text-base'>
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CustomerCentric;
