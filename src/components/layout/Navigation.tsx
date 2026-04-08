"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "./navigation/Logo";
import DesktopMenu from "./navigation/DesktopMenu";
import MobileMenu from "./navigation/MobileMenu";

const Navigation = () => {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>

			{/* Main Navigation */}
			<nav
				className={`w-full transition-all duration-300 sticky top-0 z-50 ${scrolled
					? "bg-white/95 backdrop-blur-md shadow-md py-3"
					: "bg-white py-5"
					}`}
			>
				<div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
					<Logo />

					<DesktopMenu pathname={pathname} />



					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-primary-blue hover:text-primary-ocean transition-colors"
						onClick={() => setOpen(!open)}
						aria-label={open ? "Close menu" : "Open menu"}
					>
						{open ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>
			</nav>

			<MobileMenu open={open} setOpen={setOpen} pathname={pathname} />
		</>
	);
};

export default Navigation;
