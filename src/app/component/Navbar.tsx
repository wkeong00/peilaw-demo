'use client'; // This component uses useState, so it must be a Client Component

import React, { useState } from 'react';

import Link from "next/link";
import Image from "next/image";
import { Home, Info, Handshake, Mail } from "lucide-react";
import { Playfair_Display } from 'next/font/google';

// const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700', '900'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks: { name: string; href: string; icon: React.ReactNode }[] = [
        { name: 'Home', href: '/', icon: <Home size={18} /> },
        { name: 'About', href: '/about', icon: <Info size={18} /> },
        { name: 'Services', href: '/services', icon: <Handshake size={18} /> },
        { name: 'Contact', href: '/contact', icon: <Mail size={18} /> },
    ];

    return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Brand/Logo */}
                <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-white tracking-wide">
                    <Image src="/caologo.png" alt="Logo" width={82} height={82} />
                    <span
                        className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent tracking-wide drop-shadow-lg"
                        style={{ letterSpacing: '2px' }}
                    >
                        Cao Legal Solutions
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-col items-end space-y-2">
                    <div className="flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="flex items-center space-x-2 font-medium px-3 py-2 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.icon}
                                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent drop-shadow-lg text-lg font-bold tracking-wide" style={{ letterSpacing: '2px' }}>{link.name}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-2 text-right w-full">
                        <span className="text-sm bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent font-bold tracking-wide drop-shadow-lg" style={{ letterSpacing: '1px' }}>
                            © {new Date().getFullYear()} Cao Legal Solutions
                        </span>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-md p-2"
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
                    <div className="md:hidden bg-gray-900 pb-4 shadow-inner flex flex-col items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-8 py-3 flex items-center space-x-3 text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.icon}
                                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent drop-shadow-lg font-bold tracking-wide" style={{ letterSpacing: '2px' }}>{link.name}</span>
                            </Link>
                        ))}
                        <span className="mt-2 text-sm bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent font-bold tracking-wide drop-shadow-lg text-center w-full" style={{ letterSpacing: '1px' }}>
                            © {new Date().getFullYear()} Cao Legal Solutions
                        </span>
                    </div>
                )}
        </nav>
    );
};

export default Navbar;
