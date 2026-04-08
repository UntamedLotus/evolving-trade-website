import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import { Copyright } from "lucide-react";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700"],
});

const siteUrl = "https://www.evolvingtradesolutions.com";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	alternates: {
		canonical: "/",
	},
	title: {
		default: "Evolving Trade Solutions | Global Exporters of Natural Resources",
		template: "%s | Evolving Trade Solutions",
	},
	description:
		"Evolving Trade Solutions is a leading export company specializing in the global trade of premium natural resources, including turmeric, spices, herbs, and other agricultural products. We connect sustainable sources with international markets, ensuring quality and reliability in every shipment.",
	keywords: [
		"export",
		"agriculture",
		"spices",
		"turmeric",
		"herbs",
		"global trade",
		"natural resources",
		"sustainable sourcing",
		"Indian exporter",
		"agro products",
	],
	authors: [{ name: "Evolving Trade Solutions" }],
	creator: "Evolving Trade Solutions",
	publisher: "Evolving Trade Solutions",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: "Evolving Trade Solutions | Global Exporters of Natural Resources",
		description:
			"Connecting sustainable agricultural sources with international markets. Premium quality spices, herbs, and natural resources.",
		url: siteUrl,
		siteName: "Evolving Trade Solutions",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Evolving Trade Solutions - Global Agro Exports",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Evolving Trade Solutions | Global Exporters of Natural Resources",
		description:
			"Premium agricultural exports from India to the world. Spices, herbs, and more.",
		images: ["/twitter-image.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const organizationSchema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Evolving Trade Solutions",
		"url": siteUrl,
		"logo": `${siteUrl}/evolving-trade-solutions-transparent-bg.png`,
		"sameAs": [
			"https://www.facebook.com/evolvingtradesolutions",
			"https://www.linkedin.com/company/evolvingtradesolutions",
			"https://www.instagram.com/evolvingtradesolutions"
		],
		"contactPoint": {
			"@type": "ContactPoint",
			"telephone": "+91-9545133774",
			"contactType": "sales",
			"areaServed": "Global",
			"availableLanguage": "English"
		},
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Shantai Park, 705, Barne Empire Rd, Pawar Nagar, Thergaon",
			"addressLocality": "Pimpri-Chinchwad",
			"addressRegion": "Maharashtra",
			"postalCode": "411033",
			"addressCountry": "IN"
		}
	};

	return (
		<html lang='en'>
			<head>
				<StructuredData data={organizationSchema} />
			</head>
			<body
				className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navigation />

				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
