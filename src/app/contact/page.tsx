'use client';

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
        <section id="contact" className="py-20 bg-gray-950 text-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-extrabold text-center mb-16 leading-tight bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                    Get In <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Touch</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-900 p-10 rounded-xl shadow-lg border border-yellow-600/20">
                    {/* Contact Information */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-bold mb-6 pb-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent border-b-4 border-yellow-400">Contact Information</h3>
                        <p className="text-lg leading-relaxed mb-6 text-gray-300">
                            Feel free to reach out to us with any questions or to schedule an initial consultation. Our team is ready to assist you.
                        </p>
                        <div className="space-y-6 text-lg">
                            <div className="flex items-center space-x-4">
                                <Mail size={24} className="text-yellow-500" />
                                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent font-bold">info@caolegal.com.au</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone size={24} className="text-yellow-500" />
                                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent font-bold">08 7094 0883</span>
                            </div>
                            <div className="flex items-start space-x-4">
                                <MapPin size={24} className="text-yellow-500 flex-shrink-0 mt-1" />
                                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent font-bold">
                                    Suite 808/147 Pirie Street
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
                            <span className="text-gray-400 text-sm mb-2">Scan to add us on WeChat</span>
                        </div>
                        {/* Map Placeholder */}
                        <div className="mt-6 rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5558.535897010707!2d138.60257437741697!3d-34.92575777458004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced11647dedd%3A0x6eac9fc6e00e0e0b!2sUnit%20808%2F147%20Pirie%20St%2C%20Adelaide%20SA%205000%2C%20Australia!5e1!3m2!1sen!2smy!4v1764338001902!5m2!1sen!2smy"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h3 className="text-3xl font-bold mb-6 pb-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent border-b-4 border-yellow-400">Send Us a Message</h3>
                        <form onSubmit={onSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-md font-medium text-gray-300 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all duration-200 text-gray-200 placeholder-gray-500"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-md font-medium text-gray-300 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all duration-200 text-gray-200 placeholder-gray-500"
                                    placeholder="john.doe@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-md font-medium text-gray-300 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all duration-200 text-gray-200 placeholder-gray-500"
                                    placeholder="Inquiry about Legal Services"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-md font-medium text-gray-300 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all duration-200 resize-y text-gray-200 placeholder-gray-500"
                                    placeholder="Type your message here..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                            >
                                Send Message
                            </button>
                        </form>
                        <span className="block mt-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent font-bold">{result}</span>
                    </div>
                </div>

                {/* Privacy Policy Section */}
                <div className="mt-20 bg-gray-900 p-10 rounded-xl shadow-lg border border-yellow-600/20">
                    <h3 className="text-4xl font-bold mb-10 pb-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent border-b-4 border-yellow-400">Privacy Policy</h3>
                    <p className="text-lg font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Cao Legal Solutions</p>
                    <p className="text-gray-400 mb-8">Last updated: 17 August 2026</p>

                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <p>Cao Legal Solutions respects your privacy and is committed to protecting the personal information we collect and hold about you.</p>
                        <p>This Privacy Policy explains how we collect, use, disclose, store and protect personal information when you contact us, engage our legal services, visit our website or otherwise interact with us.</p>
                        <p>Cao Legal Solutions handles personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs), where applicable.</p>

                        <div>
                            <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">1. What personal information do we collect?</h4>
                            <p className="mb-3">Depending on the nature of your enquiry or legal matter, we may collect personal information including:</p>
                            <ul className="list-disc list-inside space-y-1 pl-2">
                                <li>your name and contact details;</li>
                                <li>residential, postal and email addresses;</li>
                                <li>telephone and mobile numbers;</li>
                                <li>date of birth and identification information;</li>
                                <li>information relating to your legal matter;</li>
                                <li>financial and employment information where relevant to your matter;</li>
                                <li>information about family members, business associates or other relevant persons;</li>
                                <li>documents and correspondence provided to us;</li>
                                <li>information required for identification and verification purposes; and</li>
                                <li>any other information reasonably necessary to provide our legal services.</li>
                            </ul>
                            <p className="mt-3">Some legal matters may require us to collect sensitive information. We will only collect sensitive information where it is reasonably necessary and permitted by law, including where required to provide legal services to you.</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">2. How do we collect personal information?</h4>
                            <p className="mb-3">We may collect personal information directly from you when you:</p>
                            <ul className="list-disc list-inside space-y-1 pl-2">
                                <li>contact us by telephone, email or through our website;</li>
                                <li>make an enquiry about our legal services;</li>
                                <li>engage us to provide legal services;</li>
                                <li>provide documents or information to us;</li>
                                <li>complete a form or provide information through our website;</li>
                                <li>communicate with us in person; or</li>
                                <li>otherwise interact with our staff.</li>
                            </ul>
                            <p className="mt-3">In some circumstances, we may also collect information from third parties where this is reasonably necessary for your matter or permitted by law. This may include courts, government agencies, opposing parties, other lawyers, experts, barristers, conveyancers, financial institutions or other professional advisers.</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">3. Why do we collect your personal information?</h4>
                            <p className="mb-3">We may collect and use your personal information for purposes including:</p>
                            <ul className="list-disc list-inside space-y-1 pl-2">
                                <li>responding to your enquiries;</li>
                                <li>providing legal advice and legal services;</li>
                                <li>managing and administering your legal matter;</li>
                                <li>communicating with you about your matter;</li>
                                <li>preparing legal documents and correspondence;</li>
                                <li>complying with our legal and professional obligations;</li>
                                <li>verifying your identity;</li>
                                <li>processing payments and issuing invoices;</li>
                                <li>maintaining our records;</li>
                                <li>improving our services and website; and</li>
                                <li>communicating information about our services where you have consented or where otherwise permitted by law.</li>
                            </ul>
                            <p className="mt-3">We will generally only use your personal information for the purpose for which it was collected, or for a related purpose permitted by law.</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">4. Disclosure of personal information</h4>
                            <p className="mb-3">We may disclose your personal information where reasonably necessary to provide our legal services or where required or authorised by law.</p>
                            <p className="mb-3">Depending on your matter, this may include disclosure to:</p>
                            <ul className="list-disc list-inside space-y-1 pl-2">
                                <li>courts and tribunals;</li>
                                <li>government departments and agencies;</li>
                                <li>other parties to a legal matter;</li>
                                <li>opposing lawyers and legal representatives;</li>
                                <li>barristers and experts;</li>
                                <li>conveyancers and other professional advisers;</li>
                                <li>financial institutions;</li>
                                <li>service providers who assist us in operating our business;</li>
                                <li>information technology and cloud service providers; and</li>
                                <li>other persons where you have authorised us to do so or where disclosure is otherwise permitted or required by law.</li>
                            </ul>
                            <p className="mt-3">We do not sell your personal information.</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">5. Website and online enquiries</h4>
                            <p>When you use our website, we may collect information such as your name, contact details, enquiry details and other information you choose to provide.</p>
                            <p className="mt-2">Our website may also use cookies, analytics tools or similar technologies to understand how visitors use our website and to improve its performance.</p>
                            <p className="mt-2">Where we use third-party services such as website hosting, analytics, online forms, advertising or communication platforms, those providers may process information in accordance with their own privacy policies.</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">6. Google and online advertising</h4>
                            <p>Cao Legal Solutions may use online advertising and analytics services, including Google services, to promote our legal services and understand how visitors interact with our website.</p>
                            <p className="mt-2">These services may use cookies, pixels or similar technologies to collect information about website visits and interactions.</p>
                            <p className="mt-2">Where applicable, you may be able to manage or limit certain advertising and tracking preferences through your browser or the relevant service provider.</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">7. How do we protect your information?</h4>
                            <p>We take reasonable steps to protect personal information from misuse, interference, loss, unauthorised access, modification or disclosure.</p>
                            <p className="mt-2">These measures may include appropriate physical, electronic and administrative safeguards.</p>
                            <p className="mt-2">However, no method of storing or transmitting information electronically can be guaranteed to be completely secure. You should take care when sending confidential information over the internet.</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">8. How long do we keep personal information?</h4>
                            <p>Upon the finalisation of a matter, we will securely store all relevant files for a period of seven years.</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">9. Access to your personal information</h4>
                            <p>Subject to the exceptions contained in the Act, if you require access to the information held by Cao Legal Solutions, we will require requests to be forwarded in writing with a certified copy of your identification. Cao Legal Solutions reserves the right to charge the reasonable cost of the provision of the requested information. The cost of such will be provided upon the formal request being received by us and prior to the collection of the requested information, documents or material.</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">10. Correction of personal information</h4>
                            <p>We take reasonable steps to ensure that personal information we hold is accurate, complete and up to date.</p>
                            <p className="mt-2">If you believe that information we hold about you is inaccurate, incomplete or out of date, please contact us and request that the information be corrected.</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">11. Privacy complaints</h4>
                            <p>Any complaints regarding this policy should be made in writing to the Principal Solicitor of Cao Legal Solutions, Suite 808/147 Pirie St Adelaide SA 5000. In the event that we are unable to assist with the complaint, you can contact the Office of the Australian Information Consumer at the following website:{' '}
                                <a href="https://www.oaic.gov.au/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline">https://www.oaic.gov.au/</a>
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">12. Overseas disclosure</h4>
                            <p>Some of the technology, cloud storage or service providers we use may operate or store information outside Australia.</p>
                            <p className="mt-2">Where personal information is disclosed or stored overseas, we will take reasonable steps to ensure that applicable privacy obligations are considered.</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">13. Changes to this Privacy Policy</h4>
                            <p>We reserve the right to vary the contents of this policy from time to time to reflect changes to our services, technology, legal requirements or privacy practices.</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">14. Contact us</h4>
                            <p className="mb-3">If you have any questions about this Privacy Policy or how Cao Legal Solutions handles your personal information, please contact us:</p>
                            <div className="space-y-1">
                                <p className="font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Cao Legal Solutions</p>
                                <p>Email: info@caolegal.com.au</p>
                                <p>Phone: 08 7094 0883</p>
                                <p>Website: www.caolegal.com.au</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}