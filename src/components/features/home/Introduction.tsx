import React from "react";
import Image from "next/image";
import Link from "next/link";
const Introduction = () => {
	return (
		<div className='grid grid-cols-1 items-center lg:grid-cols-2 p-6 md:p-10 lg:px-40 gap-10 lg:gap-20 mt-10'>
			<div className='relative h-64 md:h-80 shadow-4xl border border-slate-400 rounded-tl-4xl rounded-br-4xl'>
				<Image
					src='/images/pages/home/about-us.webp'
					alt='Agro products'
					fill
					className='object-cover border-4 border-white rounded-tl-4xl rounded-br-4xl shadow-2xl'
				/>
			</div>

			<div className='flex flex-col items-start gap-6 pb-10 lg:pb-20 justify-center'>
				<h1 className='font-bold text-xl md:text-3xl text-primary-blue leading-tight'>
					Welcome to{" "}
					<span className='text-primary-ocean'>
						Evolving Trade Solutions
					</span>
				</h1>
				<p className='leading-relaxed text-primary-grey text-base'>
					We believe trade should evolve with the times; faster
					processes, smarter logistics, and meaningful partnerships
					built on trust.
				</p>

				<p className='italic text-secondary-ocean font-medium border-l-4 border-tertiary-ocean pl-4 py-1 text-sm md:text-base'>
					- Connecting Markets, Creating Opportunity.
				</p>
				<Link
					href='/about-us'
					className='bg-primary-ocean hover:bg-secondary-ocean font-medium text-white py-3 px-8 text-sm rounded-tl-2xl rounded-br-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-4 text-center'
				>
					More About Us
				</Link>
			</div>
		</div>
	);
};

export default Introduction;
