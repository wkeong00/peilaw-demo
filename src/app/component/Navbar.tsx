'use client';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Home, Info, Handshake, Mail, Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/', icon: <Home size={18} /> },
        { name: 'About', href: '/about', icon: <Info size={18} /> },
        { name: 'Services', href: '/services', icon: <Handshake size={18} /> },
        { name: 'Contact', href: '/contact', icon: <Mail size={18} /> },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            scrolled 
                ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/20' 
                : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Brand/Logo */}
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-[#c9a962]/50 group-hover:border-[#c9a962] transition-all duration-300">
                        <Image 
                            src="/caologo.png" 
                            alt="Cao Legal Solutions Logo" 
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="hidden sm:block">
                        <h1 className="text-xl font-bold tracking-wider">
                            <span className="text-gold">CAO LEGAL</span>
                        </h1>
                        <p className="text-xs text-[#a0a0a0] tracking-widest uppercase">Solutions</p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="group relative flex items-center space-x-2 text-[#a0a0a0] hover:text-white transition-colors duration-300 py-2"
                        >
                            <span className="text-[#c9a962] group-hover:text-[#e8d5a3] transition-colors duration-300">
                                {link.icon}
                            </span>
                            <span className="text-sm font-medium tracking-wider uppercase">{link.name}</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#c9a962] to-[#e8d5a3] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    ))}
                </div>

                {/* CTA Button - Desktop */}
                <div className="hidden md:block">
                    <Link 
                        href="/contact"
                        className="btn-gold text-sm px-6 py-2.5"
                    >
                        Free Consultation
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2 hover:text-[#c9a962] transition-colors duration-300"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/98 backdrop-blur-lg border-t border-[#c9a962]/20 transition-all duration-500 overflow-hidden ${
                isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex items-center space-x-3 text-[#a0a0a0] hover:text-white py-3 border-b border-white/5 hover:border-[#c9a962]/30 transition-all duration-300 group"
                            onClick={() => setIsOpen(false)}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <span className="text-[#c9a962] group-hover:text-[#e8d5a3] transition-colors duration-300">
                                {link.icon}
                            </span>
                            <span className="text-lg font-medium tracking-wider">{link.name}</span>
                        </Link>
                    ))}
                    <div className="pt-4">
                        <Link 
                            href="/contact"
                            className="btn-gold w-full text-center block py-3"
                            onClick={() => setIsOpen(false)}
                        >
                            Free Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
