import { Sprout, MoveRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/product-data";

const Products = () => {
	// Show first 6 categories on home page
	const homeCategories = categories.slice(0, 6);

	return (
		<div className='py-20 px-6 md:px-20 lg:px-40 space-y-12 lg:space-y-16 bg-white'>
			<div className='flex flex-col items-center justify-center gap-4'>
				<h2 className='text-3xl md:text-5xl font-bold text-primary-blue text-center'>
					Our <span className='text-primary-ocean'>Products</span>
				</h2>
				<div className='flex items-center gap-2'>
					<div className='h-1 w-16 md:w-20 mt-2 bg-secondary-ocean rounded-full'></div>
					<Sprout className='text-secondary-ocean w-6 h-6 md:w-8 md:h-8' />
					<div className='h-1 w-16 md:w-20 mt-2 bg-secondary-ocean rounded-full'></div>
				</div>
				<p className='text-primary-grey font-medium text-base md:text-lg max-w-2xl text-center'>
					Powered by Purity, Proven by Quality – Driven by Vedic
					Values in Agro Exports.
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{homeCategories.map((category) => (
					<Link
						key={category.id}
						href={`/product/${category.slug}`}
						className='relative w-full h-80 group overflow-hidden rounded-3xl shadow-lg border border-slate-100'
					>
						<Image
							src={category.image}
							alt={category.name}
							fill
							className='object-cover transition-transform duration-700 group-hover:scale-110'
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/20 to-transparent group-hover:via-primary-blue/40 transition-all duration-300 flex flex-col justify-end p-8">
							<h3 className="text-white font-bold text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
								{category.name}
							</h3>
							<p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 line-clamp-2">
								{category.description}
							</p>
							<div className="mt-4 flex items-center text-tertiary-ocean font-bold gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
								<span>View More</span>
								<MoveRight className="w-4 h-4" />
							</div>
						</div>
					</Link>
				))}
			</div>

		</div>
	);
};

export default Products;
