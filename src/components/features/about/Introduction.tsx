import React from "react";
import Image from "next/image";

const Introduction = () => {
	return (
		<section className='py-16 px-4 md:px-8 lg:px-16 bg-white'>
			<div className='max-w-7xl mx-auto'>
				<div className='flex flex-col md:flex-row gap-12 items-center'>
					<div className='w-full md:w-1/2'>
						<div className='relative h-[400px] w-full rounded-2xl overflow-hidden bg-secondary-grey'>
							<Image
								src='/about-us-banner.webp'
								alt='About Us Background'
								fill
								className='object-cover'
							/>
						</div>
					</div>
					<div className='w-full md:w-1/2'>
						<h2 className='text-3xl md:text-4xl font-bold mb-6 text-primary-blue'>
							About{" "}
							<span className='text-primary-ocean'>
								Evolving Trade Solutions
							</span>
						</h2>
						<p className='text-primary-grey mb-6 leading-relaxed text-lg'>
							Evolving Trade Solutions is a Pune based
							international trading company committed to
							connecting markets and fostering global commerce. We
							are specialized in import and export operations,
							offering end to end trade solutions with focus on
							reliability, efficiency and integrity.
						</p>
						<p className='text-primary-grey mb-6 leading-relaxed text-lg'>
							At Evolving Trade Solutions, we envision becoming a
							leading name in India’s global trade ecosystem known
							for professionalism, strong partnerships and long
							term value creation.
						</p>

						<p className='text-primary-grey mb-6 leading-relaxed text-lg'>
							Our company is built on the principle of
							transparency, customer satisfaction and sustainable
							growth. We aim to simplify cross border trade by
							ensuring smooth logistics, regulatory compliance and
							consistent product quality. Whether sourcing premium
							products from international suppliers or exporting
							India’s finest offerings to the world, we serve as a
							trusted partner in global business.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Introduction;
