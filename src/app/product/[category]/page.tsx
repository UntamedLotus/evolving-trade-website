import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, products } from "@/lib/product-data";
import { MoveLeft, ArrowRight, BadgeCheck, Sprout } from "lucide-react";
import StructuredData from "@/components/seo/StructuredData";

type Props = {
	params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { category } = await params;
	const categoryData = categories.find((c) => c.slug === category);

	if (!categoryData) {
		return {
			title: "Category Not Found",
		};
	}

	return {
		title: `${categoryData.name} | Evolving Trade Solutions`,
		description: categoryData.description,
	};
}

const CategoryPage = async ({ params }: Props) => {
	const { category } = await params;
	const categoryData = categories.find((c) => c.slug === category);

	if (!categoryData) {
		notFound();
	}

	const filteredProducts = products.filter((p) => p.category === categoryData.id);
	const siteUrl = "https://www.evolvingtradesolutions.com";

	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "Home",
				"item": siteUrl
			},
			{
				"@type": "ListItem",
				"position": 2,
				"name": "Products",
				"item": `${siteUrl}/product`
			},
			{
				"@type": "ListItem",
				"position": 3,
				"name": categoryData.name,
				"item": `${siteUrl}/product/${category}`
			}
		]
	};

	return (
		<div className='min-h-screen bg-slate-50 flex flex-col'>
			<StructuredData data={breadcrumbSchema} />
			{/* Header Section */}
			<section className='relative bg-primary-blue pt-32 pb-24 px-6 overflow-hidden'>
				<div className='absolute top-0 right-0 w-[600px] h-[600px] bg-primary-ocean/10 rounded-full blur-[120px] -mr-64 -mt-64'></div>

				<div className='max-w-7xl mx-auto relative z-10'>
					<Link
						href='/'
						className='inline-flex items-center gap-2 text-tertiary-ocean hover:text-white transition-all mb-12 font-medium group'
					>
						<MoveLeft className='w-5 h-5 transition-transform group-hover:-translate-x-1' />
						Back to Home
					</Link>

					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div className='space-y-6'>
							<div className='flex items-center gap-2 text-tertiary-ocean'>
								<Sprout className='w-5 h-5' />
								<span className='text-sm font-bold tracking-[0.2em] uppercase'>
									Premium selection
								</span>
							</div>
							<h1 className='text-5xl md:text-7xl font-bold text-white tracking-tight uppercase'>
								{categoryData.name}
							</h1>
							<p className='text-secondary-grey text-lg md:text-xl leading-relaxed max-w-xl font-light'>
								{categoryData.description}
							</p>
						</div>
						<div className='relative h-[400px] md:h-[500px] rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-2xl border-4 border-white/10'>
							<Image
								src={categoryData.image}
								alt={categoryData.name}
								fill
								className='object-cover'
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Products List */}
			<section className='max-w-7xl mx-auto px-6 md:px-12 py-24'>
				<div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'>
					<div className='space-y-4'>
						<h2 className='text-3xl md:text-4xl font-bold text-primary-blue'>
							Our Available{" "}
							<span className='text-primary-ocean'>
								{categoryData.name}
							</span>
						</h2>
						<div className='h-1 w-20 bg-secondary-ocean rounded-full'></div>
					</div>
					<div className='px-6 py-2 bg-white rounded-full shadow-sm border border-slate-100'>
						<p className='text-primary-grey font-medium text-sm'>
							<span className='text-primary-ocean font-bold'>
								{filteredProducts.length}
							</span>{" "}
							Premium Items
						</p>
					</div>
				</div>

				{filteredProducts.length > 0 ? (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
						{filteredProducts.map((product) => (
							<div
								key={product.id}
								className='group bg-white rounded-tl-3xl rounded-br-3xl p-4 hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col'
							>
								<div className='relative h-64 w-full mb-6 rounded-tl-2xl rounded-br-2xl overflow-hidden'>
									<Image
										src={product.image}
										alt={product.name}
										fill
										className='object-cover transition-transform duration-700 group-hover:scale-110'
									/>
									<div className='absolute top-4 right-4'>
										<div className='bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg'>
											<BadgeCheck className='w-5 h-5 text-primary-ocean' />
										</div>
									</div>
								</div>
								<div className='px-4 pb-4 flex flex-col grow'>
									<h3 className='text-2xl font-bold text-primary-blue mb-3 group-hover:text-primary-ocean transition-colors'>
										{product.name}
									</h3>
									<p className='text-primary-grey leading-relaxed grow text-sm mb-6'>
										{product.description}
									</p>
									<Link
										href='/contact'
										className='inline-flex items-center gap-2 text-primary-ocean font-bold text-sm uppercase tracking-wider group/link'
									>
										Contact Us
										<ArrowRight className='w-4 h-4 transition-transform group-hover/link:translate-x-2' />
									</Link>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className='text-center py-32 bg-white rounded-[40px] border border-slate-100 shadow-sm'>
						<Sprout className='w-16 h-16 text-secondary-grey mx-auto mb-6 opacity-40' />
						<p className='text-primary-grey text-xl font-medium'>
							No products found in this category yet. Check back
							soon!
						</p>
					</div>
				)}
			</section>

			{/* CTA Section */}
			<section className='max-w-7xl mx-auto px-6 mb-32'>
				<div className='bg-primary-ocean rounded-tl-[60px] rounded-br-[60px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-3xl'>
					<div className='absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl'></div>

					<div className='relative z-10 max-w-3xl mx-auto space-y-8'>
						<h3 className='text-3xl md:text-5xl font-bold leading-tight'>
							Looking for Bulk Exports of {categoryData.name}?
						</h3>
						<p className='text-lg md:text-xl text-white/90 font-light leading-relaxed'>
							We specialize in large scale logistics and supply
							chain management for international markets. Partner
							with us for reliable, high quality sourcing.
						</p>
						<Link
							href='/contact'
							className='inline-block bg-primary-blue text-white px-12 py-4 rounded-tl-2xl rounded-br-2xl font-bold text-lg hover:bg-white hover:text-primary-blue transition-all transform hover:-translate-y-1 shadow-2xl'
						>
							Contact Us
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CategoryPage;
