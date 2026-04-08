import React from "react";
import { categories } from "@/lib/product-data";
import Link from "next/link";
import Image from "next/image";
import { Sprout, MoveRight } from "lucide-react";

export const metadata = {
    title: "Our Products | Evolving Trade Solutions",
    description: "Explore our wide range of premium agricultural products including spices, grains, fruits, and vegetables.",
};

const ProductsPage = () => {
    return (
        <div className='min-h-screen bg-slate-50 pt-32 pb-24 px-6'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col items-center justify-center gap-4 mb-20'>
                    <h1 className='text-4xl md:text-6xl font-bold text-primary-blue text-center'>
                        Our <span className='text-primary-ocean'>Products</span>
                    </h1>
                    <div className='flex items-center gap-2'>
                        <div className='h-1 w-16 md:w-20 mt-2 bg-secondary-ocean rounded-full'></div>
                        <Sprout className='text-secondary-ocean w-6 h-6 md:w-8 md:h-8' />
                        <div className='h-1 w-16 md:w-20 mt-2 bg-secondary-ocean rounded-full'></div>
                    </div>
                    <p className='text-primary-grey font-medium text-base md:text-xl max-w-2xl text-center leading-relaxed'>
                        Sustainable Sourcing, Superior Quality – Bringing the finest agricultural gems from India to the global stage.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/product/${category.slug}`}
                            className='relative w-full h-96 group overflow-hidden rounded-[40px] shadow-xl border border-white/20'
                        >
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className='object-cover transition-transform duration-1000 group-hover:scale-110'
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-blue via-primary-blue/20 to-transparent group-hover:via-primary-blue/40 transition-all duration-500 flex flex-col justify-end p-10">
                                <h2 className="text-white font-bold text-3xl mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {category.name}
                                </h2>
                                <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 line-clamp-3 font-light leading-relaxed">
                                    {category.description}
                                </p>
                                <div className="mt-6 flex items-center text-tertiary-ocean font-bold gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                    <span className="text-sm uppercase tracking-widest">Explore Category</span>
                                    <MoveRight className="w-5 h-5" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
