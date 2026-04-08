import Hero from "@/components/features/home/Hero";
import Introduction from "@/components/features/home/Introduction";
import React from "react";
import Services from "@/components/features/home/Services";
import Products from "@/components/features/home/Products";
import Certifications from "@/components/features/home/Certifications";

export default function Home() {
	return (
		<div>
			<Hero />
			<Introduction />
			<Services />
			<Products />
		</div>
	);
}
