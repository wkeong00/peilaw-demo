'use client'; // This component uses useState, so it must be a Client Component

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        const mailtoLink = `mailto:your_email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        window.location.href = mailtoLink;

        alert('Thank you for your inquiry! We have opened your email client to send the message. Please ensure it is sent.');
        setFormData({ name: '', email: '', subject: '', message: '' });
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
                            Feel free to reach out to us with any questions or to schedule a consultation. Our team is ready to assist you.
                        </p>
                        <div className="space-y-6 text-lg">
                            <div className="flex items-center space-x-4">
                                <Mail size={24} className="text-blue-600" />
                                <span>info@law.com</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone size={24} className="text-blue-600" />
                                <span>+1 (123) 456-7890</span>
                            </div>
                            <div className="flex items-start space-x-4">
                                <MapPin size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                                <span>
                                    123 Law Firm Avenue,
                                    <br />
                                    Suite 400, Legal City,
                                    <br />
                                    LC 98765, Country
                                </span>
                            </div>
                        </div>
                        {/* Map Placeholder */}
                        <div className="mt-10 rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5348.3676832488845!2d144.98349047750528!3d-37.917691589987626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66f344bd2f09f%3A0x2e59e244a2cf745f!2sBrighton%20beach!5e1!3m2!1sen!2smy!4v1755365081659!5m2!1sen!2smy"
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
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-md font-medium text-slate-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
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
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    value={formData.subject}
                                    onChange={handleChange}
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
                                    value={formData.message}
                                    onChange={handleChange}
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
