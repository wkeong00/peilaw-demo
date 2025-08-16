'use client';

import React, { useState } from 'react';
import { Home, Info, Handshake, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home size={18} /> }, // Added Home link
    { name: 'About', href: '/about', icon: <Info size={18} /> },
    { name: 'Services', href: '/services', icon: <Handshake size={18} /> },
    { name: 'Contact', href: '/contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand/Logo */}
        <a href="/" className="flex items-center space-x-2 text-2xl font-bold text-white tracking-wide">
          <Home size={28} />
          <span>Sterling & Associates</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-300 font-medium px-3 py-2 rounded-lg"
              onClick={() => setIsOpen(false)} // Close menu on click for desktop too, though not strictly necessary
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
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
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
