import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Mail,
	Phone,
	MapPin,
	ArrowRight,
} from "lucide-react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-primary-blue text-white pt-16 pb-8'>
			<div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
				{/* Company Info */}
				<div className='space-y-6'>
					<div className='flex items-center gap-2'>
						<Image
							src='/images/logos/evolving-trade-footer-logo.webp'
							alt='Evolving Trade Solutions Logo'
							width={180}
							height={60}
							className='w-auto object-contain'
						/>
					</div>
					<p className='text-gray-300 text-sm leading-relaxed'>
						Evolving Trade Solutions is a trusted name in the global
						agro-export industry, delivering premium quality
						agricultural products with a commitment to integrity and
						sustainability.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className='text-xl font-semibold mb-6 relative inline-block'>
						Quick Links
						<span className='absolute -bottom-2 left-0 w-1/2 h-1 bg-tertiary-ocean rounded-full'></span>
					</h3>
					<ul className='space-y-3'>
						{["Home", "About Us", "Products", "Contact Us"].map(
							(item) => (
								<li key={item}>
									<Link
										href={
											item === "Home"
												? "/"
												: item === "Products"
													? "/product"
													: `/${item
															.toLowerCase()
															.replace(" ", "-")}`
										}
										className='text-gray-300 hover:text-tertiary-ocean transition-colors flex items-center gap-2 group'
									>
										<ArrowRight
											size={16}
											className='opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300'
										/>
										{item}
									</Link>
								</li>
							)
						)}
					</ul>
				</div>

				{/* Products (Optional - can be replaced with something else) */}
				<div>
					<h3 className='text-xl font-semibold mb-6 relative inline-block'>
						Our Products
						<span className='absolute -bottom-2 left-0 w-1/2 h-1 bg-tertiary-ocean rounded-full'></span>
					</h3>
					<ul className='space-y-3'>
						{[
							{ name: "Vegetables", slug: "vegetables" },
							{ name: "Fruits", slug: "fruits" },
							{ name: "Rice", slug: "rice" },
							{ name: "Spices", slug: "spices" },
							{
								name: "Aayush Products",
								slug: "aayush-products",
							},
						].map((item) => (
							<li key={item.name}>
								<Link
									href={`/product/${item.slug}`}
									className='text-gray-300 hover:text-tertiary-ocean transition-colors'
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Contact Info */}
				<div>
					<h3 className='text-xl font-semibold mb-6 relative inline-block'>
						Contact Us
						<span className='absolute -bottom-2 left-0 w-1/2 h-1 bg-tertiary-ocean rounded-full'></span>
					</h3>
					<ul className='space-y-4'>
						<li className='flex items-start gap-3 text-gray-300'>
							<MapPin
								size={20}
								className='text-tertiary-ocean shrink-0 mt-1'
							/>
							<span className='text-sm'>
								Anupama Society, Body Gate, A-6, Phase 1,
								Siddarth Nagar Society, Aundh, Pune, Maharashtra
								411007
							</span>
						</li>
						<li className='flex items-center gap-3 text-gray-300'>
							<Phone
								size={20}
								className='text-tertiary-ocean shrink-0'
							/>
							<span className='text-sm'>+91 7887322121</span>
						</li>
						<li className='flex items-center gap-3 text-gray-300'>
							<Mail
								size={20}
								className='text-tertiary-ocean shrink-0'
							/>
							<span className='text-sm'>
								evolvingtradesolutions@gmail.com
							</span>
						</li>
					</ul>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className='border-t border-white/10 pt-8'>
				<div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4'>
					<p className='text-sm text-gray-400 text-center md:text-left'>
						Copyright © {currentYear} Evolving Trade Solutions. All
						rights reserved.
					</p>
					<div className='flex gap-4'>
						<Link
							href='https://www.facebook.com/profile.php?id=61585266255129'
							aria-label='Facebook'
							target='_blank'
							className='bg-white/10 p-2 rounded-full hover:bg-tertiary-ocean hover:text-primary-blue transition-all duration-300'
						>
							<Facebook size={20} />
						</Link>
						{/* <Link
							href='#'
							aria-label="Twitter"
							className='bg-white/10 p-2 rounded-full hover:bg-tertiary-ocean hover:text-primary-blue transition-all duration-300'
						>
							<Twitter size={20} />
						</Link> */}
						<Link
							href='https://www.instagram.com/evolvingtradesolutions'
							aria-label='Instagram'
							target='_blank'
							className='bg-white/10 p-2 rounded-full hover:bg-tertiary-ocean hover:text-primary-blue transition-all duration-300'
						>
							<Instagram size={20} />
						</Link>
						<Link
							href='#'
							aria-label='LinkedIn'
							className='bg-white/10 p-2 rounded-full hover:bg-tertiary-ocean hover:text-primary-blue transition-all duration-300'
						>
							<Linkedin size={20} />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
