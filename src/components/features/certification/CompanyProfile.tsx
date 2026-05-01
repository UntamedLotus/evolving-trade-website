import React from "react";
import { Building2 } from "lucide-react";

const CompanyProfile = () => {
	const profileData = [
		{
			label: "Nature of Business",
			value: "Export and Trading. We are prominent traders for the supply of the following pre-dominantly with a minimum order and supply of 20' FCL.",
		},
		{ label: "Managing Director", value: "Mr. Abhijeet Vijay Kumbhar" },
		{
			label: "Registered Address",
			value: "Anupama Society, Body Gate, A-6, Phase 1, Siddarth Nagar Society, Aundh, Pune, Maharashtra 411007",
		},
		{ label: "Contact No", value: "+91 7887322121" },
		{
			label: "Business Email ID",
			value: "evolvingtradesolutions@gmail.com",
		},
		{
			label: "Website",
			value: "www.evolvingtradesolutions.com",
		},
		{ label: "Business Type", value: "Merchant Importer Exporter" },
		{ label: "Establishment", value: "2025" },
		{ label: "Exporter Importer Code", value: "-" },
		{ label: "GST Certificate Registration Number", value: "-" },
		{ label: "Export Percentage", value: "100%" },
		{
			label: "Product Samples",
			value: "Free samples available on request. Freight Charges to be borne by Buyer",
		},
		{
			label: "Markets service",
			value: "Israel, UAE, USA, UK, Netherlands, Australia, Malaysia, Singapore, Saudi Arabia, Qatar, Oman and Gulf.",
		},
		{
			label: "Supply Potential and Capability",
			value: "As per order and size.",
		},
		{
			label: "Payment Terms",
			value: "Advance Payment, D/P 50%, L/C at Sight, T/T.",
		},
		{ label: "Accepted Delivery Terms", value: "FOB / CIF" },
		{
			label: "Accepted Payment Currency",
			value: "USD $, EURO €, GBP £, YEN ¥",
		},
		{
			label: "Legal Status of Firm",
			value: "Limited Liability Partnership (LLP)",
		},
		{ label: "Statutory Credentials", value: "APEDA, MSME" },
	];

	return (
		<div className='bg-white py-10 px-6 md:px-20 lg:px-40 space-y-10'>
			<div className='flex flex-col items-center justify-center gap-4'>
				<h2 className='text-3xl md:text-4xl font-bold text-primary-ocean text-center'>
					Company Profile
				</h2>
				<div className='flex items-center gap-2'>
					<div className='h-1 w-16 md:w-20 mt-2 bg-secondary-ocean rounded-full'></div>
					<Building2 className='text-secondary-ocean w-6 h-6 md:w-8 md:h-8' />
					<div className='h-1 w-16 md:w-20 mt-2 bg-secondary-ocean rounded-full'></div>
				</div>
			</div>

			<div className='overflow-hidden border border-secondary-grey/60 rounded-lg shadow-sm w-full'>
				<table className='w-full text-left border-collapse'>
					<tbody className='divide-y divide-secondary-grey/60'>
						{profileData.map((item, index) => (
							<tr
								key={index}
								className={`
                                    flex flex-col md:table-row
                                    ${index % 2 === 0 ? "bg-secondary-ocean/5" : "bg-white"}
                                    hover:bg-secondary-ocean/10 transition-colors
                                `}
							>
								<th className='px-6 py-4 text-sm font-semibold text-primary-blue md:w-1/3 align-top'>
									{item.label}
								</th>
								<td className='px-6 py-4 text-sm text-primary-grey md:w-2/3 align-top'>
									{item.value}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default CompanyProfile;
