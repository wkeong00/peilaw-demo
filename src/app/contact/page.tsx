'use client'; // This component uses useState, so it must be a Client Component

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target as HTMLFormElement);
        formData.append("access_key", "cae8d009-9e33-4315-8967-ef983d3b2f40");

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
        <section id="contact" className="py-20 bg-slate-50 text-slate-800">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-800 leading-tight">
                    Get In <span className="text-blue-600">Touch</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-10 rounded-xl shadow-lg">
                    {/* Contact Information */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-blue-700 mb-6 border-b-4 border-blue-500 pb-2">Contact Information</h3>
                        <p className="text-lg leading-relaxed mb-6">
                            Feel free to reach out to us with any questions or to schedule a free 30-minute consultation. Our team is ready to assist you.
                        </p>
                        <div className="space-y-6 text-lg">
                            <div className="flex items-center space-x-4">
                                <Mail size={24} className="text-blue-600" />
                                <span>info@caolegal.com.au</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone size={24} className="text-blue-600" />
                                <span>0481 568 585</span>
                            </div>
                            <div className="flex items-start space-x-4">
                                <MapPin size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                                <span>
                                    217 Flinders Street
                                    <br />
                                    Adelaide SA 5000
                                    <br />
                                    (by appointment only)
                                </span>
                            </div>
                        </div>
                        {/* Map Placeholder */}
                        <div className="mt-10 rounded-lg overflow-hidden shadow-md">
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
                        <h3 className="text-3xl font-bold text-blue-700 mb-6 border-b-4 border-blue-500 pb-2">Send Us a Message</h3>
                        <form onSubmit={onSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-md font-medium text-slate-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-200"
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
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-200"
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
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-200"
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
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-200 resize-y"
                                    placeholder="Type your message here..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </form>
                        <span className="block mt-4 text-blue-700 font-semibold">{result}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
