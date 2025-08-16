'use client'; // Marking as client component for consistency

import React from 'react';
import { Briefcase, Gavel, Users, Building, Lightbulb, Scale } from 'lucide-react';

const Services = () => {
    const lawServices = [
        {
            title: 'Corporate & Business Law',
            description: 'We provide comprehensive legal counsel for businesses, from startups to large corporations, covering formation, contracts, mergers & acquisitions, and corporate governance.',
            icon: <Briefcase size={40} className="text-blue-500" />,
        },
        {
            title: 'Family Law',
            description: 'Navigating sensitive family matters requires compassion and expertise. We assist with divorce, child custody, spousal support, adoption, and prenuptial agreements.',
            icon: <Users size={40} className="text-blue-500" />, // Icon changed to Users
        },
        {
            title: 'Criminal Defense',
            description: 'Our experienced team defends clients against a wide range of criminal charges, ensuring their rights are protected throughout the legal process, from investigation to trial.',
            icon: <Gavel size={40} className="text-blue-500" />,
        },
        {
            title: 'Real Estate Law',
            description: 'From residential purchases to complex commercial developments, we offer legal guidance on property transactions, zoning, landlord-tenant disputes, and real estate litigation.',
            icon: <Building size={40} className="text-blue-500" />,
        },
        {
            title: 'Intellectual Property',
            description: 'Protecting your innovations is crucial. We handle trademarks, copyrights, patents, licensing agreements, and intellectual property litigation to safeguard your creative assets.',
            icon: <Lightbulb size={40} className="text-blue-500" />,
        },
        {
            title: 'Litigation & Dispute Resolution',
            description: 'When disputes arise, our skilled litigators represent clients in civil disputes, commercial litigation, and alternative dispute resolution methods, seeking efficient and favorable outcomes.',
            icon: <Scale size={40} className="text-blue-500" />,
        },
    ];

    return (
        <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-white text-slate-800">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-800 leading-tight">
                    Our <span className="text-blue-600">Legal Services</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {lawServices.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border border-blue-100"
                        >
                            <div className="p-4 bg-blue-100 rounded-full mb-6 shadow-inner">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-blue-700 mb-4">{service.title}</h3>
                            <p className="text-md leading-relaxed text-slate-700">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
