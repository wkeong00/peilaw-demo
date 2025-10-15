'use client'; // This component uses useState, so it must be a Client Component

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target as HTMLFormElement);
        formData.append("access_key", "abe87676-2adf-4026-ab8a-77895809e808");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            (event.target as HTMLFormElement).reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-yellow-50 to-white text-slate-800">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-extrabold text-center mb-16 leading-tight bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                    Get In <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Touch</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-10 rounded-xl shadow-lg">
                    {/* Contact Information */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-bold mb-6 pb-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent border-b-4 border-yellow-400">Contact Information</h3>
                        <p className="text-lg leading-relaxed mb-6">
                            Feel free to reach out to us with any questions or to schedule an initial consultation. Our team is ready to assist you.
                        </p>
                        <div className="space-y-6 text-lg">
                            <div className="flex items-center space-x-4">
                                <Mail size={24} className="text-yellow-500" />
                                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent font-bold">info@caolegal.com.au</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone size={24} className="text-yellow-500" />
                                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent font-bold">0481 568 585</span>
                            </div>
                            <div className="flex items-start space-x-4">
                                <MapPin size={24} className="text-yellow-500 flex-shrink-0 mt-1" />
                                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent font-bold">
                                    217 Flinders Street
                                    <br />
                                    Adelaide SA 5000
                                    <br />
                                    (by appointment only)
                                </span>
                            </div>
                        </div>
                        {/* WeChat QR Code */}
                        <div className="flex flex-col items-left mt-10">
                            <Image
                                src="/wechatqr.jpg"
                                alt="Cao Legal Solutions WeChat QR"
                                width={240}
                                height={320}
                                className="rounded-lg shadow-md mb-4"
                                priority
                            />
                            <span className="text-slate-500 text-sm mb-2">Scan to add us on WeChat</span>
                        </div>
                        {/* Map Placeholder */}
                        <div className="mt-6 rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5558.455083115339!2d138.6088418!3d-34.9269507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cece2009f969%3A0x278f62a34adf226e!2s217%20Flinders%20St%2C%20Adelaide%20SA%205000%2C%20Australia!5e1!3m2!1sen!2smy!4v1755967342497!5m2!1sen!2smy"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h3 className="text-3xl font-bold mb-6 pb-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent border-b-4 border-yellow-400">Send Us a Message</h3>
                        <form onSubmit={onSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-md font-medium text-slate-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all duration-200"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-md font-medium text-slate-700 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all duration-200"
                                    placeholder="john.doe@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-md font-medium text-slate-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all duration-200"
                                    placeholder="Inquiry about Legal Services"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-md font-medium text-slate-700 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all duration-200 resize-y"
                                    placeholder="Type your message here..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </form>
                        <span className="block mt-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent font-bold">{result}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
