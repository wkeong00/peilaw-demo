'use client'; // Marking as client component for consistency, or if any future interactivity is added

import React from 'react';
import Image from "next/image";
import p5 from "../../../public/aboutphoto/p-5.jpeg";

const About = () => {
    const teamMembers = [
        {
            name: 'Pei Ling Cao ',
            title: 'Principal',
            bio: 'Pei Ling Cao is the Principal at Cao Legal Solutions, bringing a wealth of experience and a client-centered approach to every case. With a strong background in family law, Pei has also developed expertise across a diverse range of practice areas, including migration law, debt recovery, property conveyancing, and employment law. Fluent in Mandarin, Cantonese, and Bahasa, Pei is dedicated to bridging cultural and linguistic gaps, ensuring clear communication and effective representation for clients from diverse backgrounds. Driven by a commitment to serve the multicultural community, Pei founded Cao Legal Solutions to provide accessible and comprehensive legal services that address the unique needs of each client.',
            image: p5,
        },
        // {
        //     name: 'Sarah Chen',
        //     title: 'Senior Associate, Family Law',
        //     bio: 'Sarah specializes in family law, providing compassionate and effective legal representation in divorce, child custody, and domestic disputes. Her empathetic approach ensures clients feel supported through challenging times.',
        //     image: p5, // Placeholder image
        // },
        // {
        //     name: 'David Lee',
        //     title: 'Associate, Criminal Defense',
        //     bio: 'David is a tenacious advocate for his clients in criminal defense cases. With a strong track record of successful outcomes, he is committed to upholding justice and protecting the rights of the accused.',
        //     image: p5, // Placeholder image
        // },
    ];

    return (
        <section id="about" className="py-20 bg-slate-50 text-slate-800">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-800 leading-tight">
                    About <span className="text-blue-600">Cao Legal Solutions</span>
                </h2>

                {/* Our Firm Section */}
                <div className="bg-white p-10 rounded-xl shadow-lg mb-20">
                    <h3 className="text-4xl font-bold text-blue-700 mb-6 border-b-4 border-blue-500 pb-2">Our Firm</h3>
                    <p className="text-lg leading-relaxed mb-6">
                        At Cao Legal Solutions, we are committed to providing comprehensive and compassionate legal solutions tailored to the unique needs of individuals and businesses. Driven by values. Defined by service. Founded on principles of compassion, leadership, and strength, we pride ourselves on delivering strategic and effective solutions that align with our clients' objectives. 
                    </p>
                    <p className="text-lg leading-relaxed">
                        We believe in building strong, lasting relationships through clear communication, unwavering support, and a steadfast commitment to achieving the best possible outcomes. Your success is our paramount concern.
                    </p>
                </div>

                {/* Our Team Section */}
                <div className="bg-white p-10 rounded-xl shadow-lg">
                    <h3 className="text-4xl font-bold text-blue-700 mb-10 border-b-4 border-blue-500 pb-2 text-center md:text-left">Our Team</h3>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> */}
                    <div className="grid grid-cols-1 gap-10">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-6 bg-slate-100 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={128}
                                    height={128}
                                    className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-blue-400 shadow-md"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.onerror = null;
                                        target.src = "https://placehold.co/150x150/CCE5FF/000000?text=👤";
                                    }} // Fallback image
                                />
                                <h4 className="text-2xl font-semibold text-blue-800 mb-2">{member.name}</h4>
                                <p className="text-blue-600 font-medium mb-4">{member.title}</p>
                                <p className="text-md leading-relaxed text-slate-700">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
