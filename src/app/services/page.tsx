'use client';

import React from 'react';
import { Gavel, Users, Building, Lightbulb, Banknote, Globe, ChevronRight } from 'lucide-react';

const Services = () => {
    const lawServices = [
        {
            title: 'Family Law',
            description: 'We provide compassionate and expert legal assistance in divorce, property settlements, and parenting matters, guiding you through sensitive family issues with care and professionalism.',
            icon: <Users size={40} className="text-yellow-500" />,
            bullets: [
                'Divorce Application',
                'Property Settlement & Spousal Maintenance',
                'Parenting Arrangements',
                'Binding Financial Agreements & Consent Orders',
            ],
        },
        {
            title: 'Property, Leasing & Conveyancing',
            description: 'At Cao Legal Solutions, we handle a range of conveyancing, commercial, and property transactions, including:',
            icon: <Gavel size={40} className="text-yellow-500" />,
            bullets: [
                'Residential Sales and Purchase',
                'Contract Review and Form 1s',
                'Commercial Conveyancing',
                'Commercial Leasing',
                'Caveats, Mortgages and Securities',
                'Liquor Licensing Applications',
                'Business Sale and Purchase Agreements',
                'Landlord and Tenant Disputes',
            ],
        },
        {
            title: 'Debt Recovery',
            description: 'We provide effective debt recovery services for both businesses and individuals. Combining legal expertise with practical, results-driven strategies, we work to recover outstanding debts efficiently while protecting your interests and preserving professional relationships wherever possible.',
            icon: <Banknote size={40} className="text-yellow-500" />,
            bullets: [
                'Motor Vehicle Accident Property Damage',
                'Letter of Demand/Final Notice',
                'Court Proceedings',
                'Judgment Enforcement',
            ],
        },
        {
            title: 'Wills and Estates',
            description: 'We assist with drafting clear and legally valid wills, establishing powers of attorney, creating enduring guardianship arrangements to ensure your wishes are respected, and applying for probate or letters of administration.',
            icon: <Building size={40} className="text-yellow-500" />,
            bullets: [
                'Will Drafting',
                'Enduring Powers of Attorney & Advanced Care Directives',
                'Probate Applications',
                'Estate Administration',
                'Family Provision Claims',
            ],
        },
        {
            title: 'Employment Law',
            description: 'We offer trusted legal advice on workplace rights, unfair dismissal, and discrimination, advocating for fair treatment in employment matters.',
            icon: <Lightbulb size={40} className="text-yellow-500" />,
            bullets: [
                'Unfair Dismissal',
                'Workplace Discrimination',
                'Employment Contracts',
                'Dispute Resolution',
            ],
        },
        {
            title: 'Migration Law',
            description: 'Our migration law services cover a broad range of visa applications and immigration matters. We provide tailored advice and support to individuals, families, and businesses, helping them navigate Australia\'s complex immigration system with confidence.',
            icon: <Globe size={40} className="text-yellow-500" />,
            bullets: [
                'Skilled Visas',
                'Skilled Assessments',
                'Partner Visas',
                'Student Visas',
                'Citizenship Applications',
            ],
        },
    ];

    return (
        <section id="services" className="py-20 bg-gray-950 text-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-extrabold text-center mb-16 leading-tight bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                    Our <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Practice Areas</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {lawServices.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col border border-yellow-600/20"
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-4 bg-gray-800 rounded-full shadow-inner">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold ml-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">{service.title}</h3>
                            </div>
                            <p className="text-md leading-relaxed text-gray-300 mb-4">{service.description}</p>
                            <ul className="space-y-2">
                                {service.bullets.map((item, i) => (
                                    <li key={i} className="flex items-start space-x-2 text-gray-300">
                                        <ChevronRight size={16} className="text-yellow-500 flex-shrink-0 mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;