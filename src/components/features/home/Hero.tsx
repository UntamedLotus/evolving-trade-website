// Next.js + TS Carousel using next/image (no Flowbite)
"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const heroData = [
	{
		backgroundImage:
			"/images/pages/home/slides/home-slide-banner-for-spices.webp",
		text: "Experience the authentic aroma of India with our premium handpicked spices",
	},

	{
		backgroundImage:
			"/images/pages/home/slides/home-slide-banner-for-fruits.webp",
		text: "Bright colours, bold flavours, Better health. Bring home nature’s best with our fresh produce.",
	},

	{
		backgroundImage:
			"/images/pages/home/slides/home-slide-banner-rice.webp",
		text: "Crystal clear grains, rich aroma, unmatched taste. Choose our finest quality rice for your kitchen",
	},
	{
		backgroundImage:
			"/images/pages/home/slides/home-slide-banner-for-vegetables.webp",
		text: "Bringing you the finest vegetables with care, consistency, and a commitment you can trust.",
	},
	{
		backgroundImage:
			"/images/pages/home/slides/home-slide-banner-for-aayush-products.webp",
		text: "Where ancient wisdom meets modern care; premium herbal products made for you.",
	},
];

export default function Hero() {
	const [current, setCurrent] = useState(0);
	const length = heroData.length;

	const nextSlide = useCallback(() => {
		setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
	}, [length]);

	const prevSlide = () => {
		setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
	};

	useEffect(() => {
		const interval = setInterval(() => nextSlide(), 4000);
		return () => clearInterval(interval);
	}, [nextSlide]);

	return (
		<div>
			<div
				className='relative h-dvh overflow-hidden rounded-base'
				style={{ height: "calc(100dvh - 64px)" }}
			>
				{heroData.map((data, i) => (
					<div key={i} className='absolute inset-0'>
						<Image
							src={data?.backgroundImage}
							alt={`Slide ${i + 1}`}
							fill
							priority={i === 0}
							className={`object-cover transition-opacity duration-700 ease-in-out ${
								i === current ? "opacity-100" : "opacity-0"
							}`}
						/>
					</div>
				))}
			</div>

			<div className='absolute inset-0 bg-gradient-to-b from-primary-blue/60 via-primary-blue/30 to-primary-blue/60'></div>

			<div className='absolute inset-0 flex flex-col items-center justify-center text-center px-6'>
				<p className='text-white font-semibold text-xl md:text-4xl mt-6 max-w-2xl drop-shadow-md transition-all duration-700 ease-in-out'>
					{heroData[current].text}
				</p>
				<Link
					href='/product/spices'
					className='mt-8 px-8 py-3 bg-tertiary-ocean text-primary-blue font-semibold rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
				>
					Explore Products
				</Link>
			</div>

			<div className='absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3'>
				{heroData.map((_, i) => (
					<button
						key={i}
						aria-label={`Slide ${i + 1}`}
						onClick={() => setCurrent(i)}
						className={`w-3 h-3 rounded-full transition-all duration-300 ${
							current === i
								? "bg-tertiary-ocean w-8"
								: "bg-white/50 hover:bg-white/80"
						}`}
					></button>
				))}
			</div>

			<button
				onClick={prevSlide}
				className='absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 group'
			>
				<span className='inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 group-hover:bg-white/50'>
					<svg
						className='w-5 h-5 text-white'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth='2'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m15 19-7-7 7-7'
						/>
					</svg>
				</span>
			</button>

			<button
				onClick={nextSlide}
				className='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 group'
			>
				<span className='inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 group-hover:bg-white/50'>
					<svg
						className='w-5 h-5 text-white'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth='2'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m9 5 7 7-7 7'
						/>
					</svg>
				</span>
			</button>
		</div>
	);
}
