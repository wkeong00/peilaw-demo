'use client'; // Marking as client component for consistency

import React from 'react';
import {Gavel, Users, Building, Lightbulb, } from 'lucide-react';

const Services = () => {
    const lawServices = [
        // {
        //     title: 'Corporate & Business Law',
        //     description: 'We provide comprehensive legal counsel for businesses, from startups to large corporations, covering formation, contracts, mergers & acquisitions, and corporate governance.',
        //     icon: <Briefcase size={40} className="text-blue-500" />,
        // },
        {
            title: 'Family Law',
            description: 'We provide compassionate and expert legal assistance in divorce, property settlements, and parenting matters, guiding you through sensitive family issues with care and professionalism.',
            icon: <Users size={40} className="text-black-500" />, // Icon changed to Users
        },
        {
            title: 'Conveyancing',
            description: 'With our expertise, we aim to simplify the conveyancing process, safeguarding your interests throughout the property transaction.',
            icon: <Gavel size={40} className="text-black-500" />,
        },
        {
            title: 'Migration Law',
            description: 'We assist clients with various visa applications, permanent residency processes, and appeals, navigating the complexities of Australian immigration law with expertise.',
            icon: <Building size={40} className="text-black-500" />,
        },
        {
            title: 'Employment Law',
            description: 'We offer trusted legal advice on workplace rights, unfair dismissal, and discrimination, advocating for fair treatment in employment matters.',
            icon: <Lightbulb size={40} className="text-black-500" />,
        },
        // {
        //     title: 'Litigation & Dispute Resolution',
        //     description: 'When disputes arise, our skilled litigators represent clients in civil disputes, commercial litigation, and alternative dispute resolution methods, seeking efficient and favorable outcomes.',
        //     icon: <Scale size={40} className="text-blue-500" />,
        // },
    ];

    return (
    <section id="services" className="py-20 bg-gradient-to-br from-yellow-50 to-white text-slate-800">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-extrabold text-center mb-16 leading-tight bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                    Our <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Practice Areas</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {lawServices.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border border-yellow-400"
                        >
                            <div className="p-4 bg-blue-100 rounded-full mb-6 shadow-inner">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">{service.title}</h3>
                            <p className="text-md leading-relaxed text-slate-700">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default Services;
