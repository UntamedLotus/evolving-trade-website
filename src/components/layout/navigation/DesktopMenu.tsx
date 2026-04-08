import Link from "next/link";
import React from "react";
import { ChevronDown } from "lucide-react";
import { navLinks } from "./constants";

interface DesktopMenuProps {
    pathname: string;
}

const DesktopMenu = ({ pathname }: DesktopMenuProps) => {
    return (
        <ul className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => {
                const isActive =
                    pathname === link.href ||
                    (link.href && link.href !== "#" && link.href !== "/" && pathname.startsWith(link.href));

                if (link.dropdown) {
                    return (
                        <li key={link.name} className='relative group'>
                            <div
                                className={`text-sm font-medium transition-all duration-300 relative py-2 flex items-center gap-1 cursor-default ${isActive
                                    ? "text-primary-ocean"
                                    : "text-primary-grey hover:text-primary-ocean"
                                    }`}
                            >
                                {link.name}
                                <ChevronDown
                                    size={14}
                                    className='group-hover:rotate-180 transition-transform duration-300'
                                />
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-ocean transform origin-left transition-transform duration-300 ${isActive
                                        ? "scale-x-100"
                                        : "scale-x-0 group-hover:scale-x-100"
                                        }`}
                                ></span>
                            </div>

                            {/* Dropdown Menu */}
                            <div className='absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white shadow-2xl rounded-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 border border-slate-100 z-[100]'>
                                <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-tl border-slate-100'></div>
                                {link.dropdown.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className='block px-5 py-2.5 text-sm text-primary-grey hover:bg-primary-blue/5 hover:text-primary-ocean transition-all font-medium'
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </li>
                    );
                }

                return (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            className={`text-sm font-medium transition-all duration-300 relative py-1 group flex items-center ${isActive
                                ? "text-primary-ocean"
                                : "text-primary-grey hover:text-primary-ocean"
                                }`}
                        >
                            {link.name}
                            <span
                                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-ocean transform origin-left transition-transform duration-300 ${isActive
                                    ? "scale-x-100"
                                    : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                            ></span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default DesktopMenu;
