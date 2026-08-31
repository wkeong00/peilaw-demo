import React from 'react';
export const metadata = {
    title: 'About Cao Legal Solutions',
    description: 'At Cao Legal Solutions, we offer expert legal services in family law, employment law, property conveyancing and migration law. Led by a principal lawyer from a migrant background, we bring a broader understanding of cultural diversity and lived experience to every matter we handle.',
    alternates: {
        canonical: 'https://www.caolegal.com.au/about',
    },
};
import Image from "next/image";
import peiPho from "../../../public/aboutphoto/PeiPho.jpeg";
import seraPho from "../../../public/aboutphoto/SeraPho.jpeg";
import harryCao from "../../../public/aboutphoto/Harry_cao.jpeg";
import jacobWang from "../../../public/aboutphoto/JacobWang.png";

const About = () => {
    const teamMembers = [
        {
            name: 'Pei Ling Cao',
            title: 'Principal',
            bio: 'Pei Ling Cao is the Principal at Cao Legal Solutions, bringing a wealth of experience and a client-centered approach to every case. With a strong background in family law, Pei has also developed expertise across a diverse range of practice areas, including migration law, debt recovery, property conveyancing, and employment law. Fluent in English, Mandarin, Cantonese, and Bahasa, Pei is dedicated to bridging cultural and linguistic gaps, ensuring clear communication and effective representation for clients from diverse backgrounds. Driven by a commitment to serve the multicultural community, Pei founded Cao Legal Solutions to provide accessible and comprehensive legal services that address the unique needs of each client.',
            image: peiPho,
        },
        {
            name: 'Harry Cao',
            title: 'Operations Manager',
            bio: 'As an experienced Operations Manager with over 19 years of experience across financial services and the disability sector, Harry brings strong experience in operations, compliance, risk management and team leadership. His background has developed strong skills in business process improvement, attention to detail, problem-solving and building effective stakeholder relationships. Harry values a strengths-based and collaborative approach and is focused on supporting efficient, compliant and well-organised day-to-day operations.',
            image: harryCao,
        },
        {
            name: 'Seraphina Zhang',
            title: 'Legal Assistant',
            bio: 'Seraphina is currently studying a Bachelor of Laws (Honours) and Philosophy at Adelaide University. She has a particular interest in family law, intellectual property law, and legal theory. Guided by a strong sense of integrity and justice, Seraphina is dedicated to approaching every client with the empathy, diligence, and consideration they deserve.',
            image: seraPho,
        },
        {
            name: 'Jacob Wang',
            title: 'Legal Assistant',
            bio: 'Having grown up in China before moving to Adelaide, Jacob is currently completing a Bachelor of Laws (Honours). Fluent in both English and Mandarin, Jacob enjoys connecting with people from diverse backgrounds and brings an open, approachable and thoughtful manner to his work. Curious, honest and genuinely people-focused, Jacob values meaningful conversations and brings these qualities to his developing legal career and interactions with clients.',
            image: jacobWang,
        },
    ];

    return (
        <section id="about" className="py-20 bg-gray-950 text-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-extrabold text-center mb-16 leading-tight bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                    About <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Cao Legal Solutions</span>
                </h2>

                {/* Our Firm Section */}
                <div className="bg-gray-900 p-10 rounded-xl shadow-lg mb-20 border border-yellow-600/20">
                    <h3 className="text-4xl font-bold mb-6 pb-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent border-b-4 border-yellow-400">Our Firm</h3>
                    <p className="text-lg leading-relaxed mb-6 text-gray-300">
                        At Cao Legal Solutions, we are here to offer legal help that truly fits you—whether you are an individual or a business. We are guided by values that matter and built on principles of compassion, leadership, and strength. What drives us is more than just providing solutions; it is about finding the right solutions that work for your unique situation.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-300">
                        We believe in building real, lasting relationships by communicating clearly, supporting you every step of the way, and staying committed to getting the best results possible. Your success means everything to us.
                    </p>
                </div>

                {/* Our Team Section */}
                <div className="bg-gray-900 p-10 rounded-xl shadow-lg border border-yellow-600/20">
                    <h3 className="text-4xl font-bold mb-10 pb-2 text-center md:text-left bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent border-b-4 border-yellow-400">Our Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 border border-yellow-600/20">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={192}
                                    height={192}
                                    className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-yellow-400 shadow-md"
                                />
                                <h4 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">{member.name}</h4>
                                <p className="font-bold text-lg mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">{member.title}</p>
                                <p className="text-md leading-relaxed text-gray-300 text-left md:text-center whitespace-pre-line">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;