'use client'; // This component uses useState, so it must be a Client Component

import React, { useState } from 'react';
import DynamicLucideIcon from './DynamicLucideIcon'; // Import the new dynamic icon component
import Link from "next/link";
import Heart from "lucide-react"; // Importing Heart icon directly for demonstration
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    type LucideIconName =
        | "Home"
        | "Info"
        | "Handshake"
        | "Contact"
        | "Mail";

    const navLinks: { name: string; href: string; iconName: LucideIconName }[] = [
        { name: 'Home', href: '/', iconName: 'Home' },
        { name: 'About', href: '/about', iconName: 'Info' },
        { name: 'Services', href: '/services', iconName: 'Handshake' },
        { name: 'Contact', href: '/contact', iconName: 'Mail' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-lg z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Brand/Logo */}
                <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-white tracking-wide">
                    <Image src="/vercel.svg" alt="Logo" width={32} height={32} />
                    <span>Cao Legal Solutions</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-300 font-medium px-3 py-2 rounded-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            <DynamicLucideIcon name={link.iconName} size={18} /> {/* No more 'as any' */}
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {/* Using a simple SVG for the hamburger icon for consistency */}
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-blue-700 pb-4 shadow-inner">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block px-8 py-3 text-white hover:bg-blue-600 transition-colors duration-300 flex items-center space-x-3 text-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            <DynamicLucideIcon name={link.iconName} size={18} /> {/* No more 'as any' */}
                            <span>{link.name}</span>
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
