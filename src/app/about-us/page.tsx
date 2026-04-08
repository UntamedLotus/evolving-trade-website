import React from "react";
import Hero from "@/components/features/about/Hero";
import Introduction from "@/components/features/about/Introduction";
import CustomerCentric from "@/components/features/about/CustomerCentric";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us",
	description: "Learn about Evolving Trade Solutions, our mission, vision, and commitment to delivering premium agricultural products globally.",
};

const AboutUsPage = () => {
	return (
		<main>
			<Hero />
			<Introduction />
			<CustomerCentric />
		</main>
	);
};

export default AboutUsPage;
