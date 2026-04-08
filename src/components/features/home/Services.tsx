import React from "react";
import { Anchor, Earth, Shield, Sprout } from "lucide-react";

type IconType = React.FC<React.SVGProps<SVGSVGElement>>;

interface CardItem {
	id: number;
	title: string;
	desc: string;
	icon: IconType;
}

const Services = () => {
	const cardItem: CardItem[] = [
		{
			id: 1,
			title: " Integrated Supply Solutions",
			desc: "We deliver a carefully curated range of agricultural and food products through a reliable, end-to-end supply network. Our integrated approach ensures consistency, efficiency, and dependable delivery across global markets.",
			icon: Anchor,
		},
		{
			id: 2,
			title: "Responsible & Sustainable Sourcing",
			desc: "We work closely with trusted farmers and producers who follow ethical and environmentally responsible practices. Our sourcing philosophy supports sustainability while maintaining high standards of quality and traceability.",
			icon: Earth,
		},
		{
			id: 3,
			title: "Quality & Compliance Assurance",
			desc: "Quality is central to everything we do. From sourcing and processing to packaging and shipment, every stage is managed with strict quality checks to meet international safety and compliance standards.",
			icon: Shield,
		},


	];

	return (
		<div className="bg-primary-blue py-10">
			<div className='py-10 px-6 md:px-20 lg:px-40 space-y-10 lg:space-y-20'>
				<div className='flex flex-col items-center justify-center gap-4'>
					<h2 className='text-3xl md:text-4xl font-bold text-white text-center'>
						Evolving Trade Solutions
					</h2>
					<div className='flex items-center gap-2'>
						<div className='h-1 w-16 md:w-20 mt-2 bg-secondary-ocean rounded-full'></div>
						<Sprout className='text-secondary-ocean w-6 h-6 md:w-8 md:h-8' />
						<div className='h-1 w-16 md:w-20 mt-2 bg-secondary-ocean rounded-full'></div>
					</div>
					<p className='text-white font-medium text-base md:text-lg max-w-2xl text-center'>
						Choose us for trusted quality, ethical sourcing, and
						partnerships rooted in responsibility and growth.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{cardItem.map((c) => {
						const Icon = c.icon;
						return (
							<div
								key={c.id}
								className='bg-white shadow-lg hover:shadow-2xl border border-secondary-grey/20 hover:border-secondary-ocean py-10 px-6 flex flex-col gap-4 items-center justify-center rounded-2xl transition-all duration-300 transform hover:-translate-y-2 group'
							>
								<div className="p-4 bg-primary-blue/5 rounded-full group-hover:bg-primary-ocean transition-colors duration-300">
									<Icon className='w-10 h-10 text-primary-ocean group-hover:text-white transition-colors duration-300' />
								</div>
								<h2 className='uppercase text-xl font-bold text-primary-blue group-hover:text-primary-ocean transition-colors duration-300 text-center'>
									{c.title}
								</h2>
								<p className='text-primary-grey text-center text-sm leading-relaxed'>
									{c.desc}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Services;
