import Link from "next/link";
import React, { useState } from "react";
import { X, ChevronRight, ChevronDown, Mail, Phone } from "lucide-react";
import { navLinks } from "./constants";

interface MobileMenuProps {
	open: boolean;
	setOpen: (open: boolean) => void;
	pathname: string;
}

const MobileMenu = ({ open, setOpen, pathname }: MobileMenuProps) => {
	const [activeDropdown, setActiveDropdown] = useState<string | null>(
		"Products"
	);

	const toggleDropdown = (name: string) => {
		setActiveDropdown(activeDropdown === name ? null : name);
	};

	return (
		<>
			{/* Mobile Menu Overlay */}
			<div
				className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
					open ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
				onClick={() => setOpen(false)}
			></div>

			{/* Mobile Menu Sidebar */}
			<div
				className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
					open ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className='p-6 border-b border-gray-100 flex justify-between items-center'>
					<span className='font-bold text-primary-blue text-lg uppercase tracking-tight'>
						Menu
					</span>
					<button
						onClick={() => setOpen(false)}
						className='p-2 bg-slate-50 rounded-full hover:bg-slate-100 text-primary-grey shadow-sm transition-all'
					>
						<X size={20} />
					</button>
				</div>

				<div className='flex-1 overflow-y-auto py-6 px-6'>
					<ul className='flex flex-col gap-2'>
						{navLinks.map((link) => {
							const isActive =
								pathname === link.href ||
								(link.href &&
									link.href !== "#" &&
									link.href !== "/" &&
									pathname.startsWith(link.href));

							const isDropdownOpen = activeDropdown === link.name;

							if (link.dropdown) {
								return (
									<li
										key={link.name}
										className='flex flex-col'
									>
										<button
											className={`flex items-center justify-between text-lg font-bold py-4 border-b border-slate-50 cursor-pointer w-full text-left transition-colors ${
												isActive || isDropdownOpen
													? "text-primary-ocean"
													: "text-primary-blue"
											}`}
											onClick={() =>
												toggleDropdown(link.name)
											}
										>
											<span className='flex items-center gap-2'>
												{link.name}
											</span>
											<ChevronDown
												size={18}
												className={`transition-transform duration-300 ${
													isDropdownOpen
														? "rotate-180"
														: ""
												}`}
											/>
										</button>

										{/* Mobile Dropdown Items */}
										<div
											className={`overflow-hidden transition-all duration-500 ease-in-out ${
												isDropdownOpen
													? "max-h-[500px] opacity-100"
													: "max-h-0 opacity-0"
											}`}
										>
											<ul className='bg-slate-50/50 rounded-2xl mt-2 mb-4 overflow-hidden border border-slate-100'>
												{link.dropdown.map((item) => (
													<li key={item.name}>
														<Link
															href={item.href}
															onClick={() =>
																setOpen(false)
															}
															className={`block px-6 py-3.5 text-base font-medium transition-colors border-b border-white last:border-0 ${pathname === item.href ? "text-primary-ocean bg-white" : "text-primary-grey hover:text-primary-ocean hover:bg-white"}`}
														>
															{item.name}
														</Link>
													</li>
												))}
											</ul>
										</div>
									</li>
								);
							}

							return (
								<li key={link.name}>
									<Link
										href={link.href}
										onClick={() => setOpen(false)}
										className={`flex items-center justify-between text-lg font-bold py-4 border-b border-slate-50 transition-colors ${
											isActive
												? "text-primary-ocean"
												: "text-primary-blue"
										}`}
									>
										{link.name}
										<ChevronRight
											size={18}
											className={
												isActive
													? "text-primary-ocean"
													: "text-slate-300"
											}
										/>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default MobileMenu;
