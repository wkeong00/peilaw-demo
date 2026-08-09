'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  X,
  ZoomIn
} from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "abe87676-2adf-4026-ab8a-77895809e808");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! Your message has been sent successfully.");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch {
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'info@caolegal.com.au',
      href: 'mailto:info@caolegal.com.au'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '(08) 7094 0883',
      href: 'tel:0870940883'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      value: 'Suite 808/147 Pirie Street, Adelaide SA 5000',
      href: 'https://maps.google.com/?q=Suite+808/147+Pirie+Street,+Adelaide+SA+5000'
    },
    {
      icon: <Clock size={24} />,
      title: 'Hours',
      value: 'Mon - Fri: 9:00 AM - 5:00 PM',
      href: null
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]"></div>
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a962]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal">
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Contact Us</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get In <span className="text-gold">Touch</span>
            </h1>
            <p className="text-[#a0a0a0] text-lg leading-relaxed max-w-2xl mx-auto">
              We are here to help you with your legal needs. Reach out to us for a consultation 
              or any inquiries about our services. Our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="card-dark p-6 group reveal hover:border-[#c9a962]/30"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c9a962]/20 to-[#c9a962]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-[#c9a962]/20">
                  <span className="text-[#c9a962]">{info.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                {info.href ? (
                  <a 
                    href={info.href}
                    className="text-[#a0a0a0] hover:text-[#c9a962] transition-colors duration-300 text-sm"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-[#a0a0a0] text-sm">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111] relative">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="reveal">
              <div className="card-dark p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a962]/20 to-[#c9a962]/5 flex items-center justify-center border border-[#c9a962]/20">
                    <MessageSquare size={24} className="text-[#c9a962]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Send Us a Message</h3>
                    <p className="text-[#a0a0a0] text-sm">We will get back to you within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#a0a0a0] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="input-gold w-full"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#a0a0a0] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="input-gold w-full"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#a0a0a0] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="input-gold w-full"
                        placeholder="(08) 7094 0883"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-[#a0a0a0] mb-2">
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#c9a962]/30 rounded-lg text-white appearance-none cursor-pointer transition-all duration-300 focus:outline-none focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 hover:border-[#c9a962]/50 [&>option]:bg-[#1a1a1a] [&>option]:text-white"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23c9a962' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 12px center',
                          backgroundSize: '20px'
                        }}
                      >
                        <option value="" className="bg-[#1a1a1a] text-white py-2">Select a service</option>
                        <option value="family" className="bg-[#1a1a1a] text-white py-2">Family Law</option>
                        <option value="conveyancing" className="bg-[#1a1a1a] text-white py-2">Conveyancing</option>
                        <option value="wills" className="bg-[#1a1a1a] text-white py-2">Wills & Estate</option>
                        <option value="employment" className="bg-[#1a1a1a] text-white py-2">Employment Law</option>
                        <option value="migration" className="bg-[#1a1a1a] text-white py-2">Migration Law</option>
                        <option value="debt" className="bg-[#1a1a1a] text-white py-2">Debt Recovery</option>
                        <option value="others" className="bg-[#1a1a1a] text-white py-2">Others</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#a0a0a0] mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="input-gold w-full resize-none"
                      placeholder="Please describe your legal matter..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full flex items-center justify-center gap-2 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#0a0a0a] border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
                
                {result && (
                  <div className={`mt-4 p-4 rounded-lg flex items-start gap-3 ${
                    result.includes('success') 
                      ? 'bg-emerald-500/10 border border-emerald-500/30' 
                      : result.includes('Sending') 
                        ? 'bg-[#c9a962]/10 border border-[#c9a962]/30'
                        : 'bg-red-500/10 border border-red-500/30'
                  }`}>
                    <CheckCircle2 size={20} className={
                      result.includes('success') 
                        ? 'text-emerald-500 flex-shrink-0' 
                        : result.includes('Sending')
                          ? 'text-[#c9a962] flex-shrink-0'
                          : 'text-red-500 flex-shrink-0'
                    } />
                    <p className={
                      result.includes('success') 
                        ? 'text-emerald-400 text-sm' 
                        : result.includes('Sending')
                          ? 'text-[#c9a962] text-sm'
                          : 'text-red-400 text-sm'
                    }>{result}</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Map & Additional Info */}
            <div className="space-y-8 reveal delay-200">
              {/* Map */}
              <div className="card-dark overflow-hidden">
                <div className="p-6 border-b border-[#c9a962]/10">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <MapPin size={20} className="text-[#c9a962]" />
                    Our Location
                  </h3>
                </div>
                <div className="h-80 bg-[#111]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5558.535897010707!2d138.60257437741697!3d-34.92575777458004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced11647dedd%3A0x6eac9fc6e00e0e0b!2sUnit%20808%2F147%20Pirie%20St%2C%20Adelaide%20SA%205000%2C%20Australia!5e1!3m2!1sen!2smy!4v1764338001902!5m2!1sen!2smy"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[#a0a0a0] text-sm">
                    <span className="text-white font-medium">Suite 808/147 Pirie Street</span><br />
                    Adelaide SA 5000, Australia<br />
                    <span className="text-[#c9a962]">(By appointment only)</span>
                  </p>
                </div>
              </div>
              
              {/* WeChat QR */}
              <div className="card-dark p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <MessageSquare size={20} className="text-[#c9a962]" />
                  Connect on WeChat
                </h3>
                <div className="flex items-center gap-6">
                  <div 
                    className="relative w-32 h-32 rounded-lg overflow-hidden border border-[#c9a962]/20 flex-shrink-0 cursor-pointer group"
                    onClick={() => setIsQRModalOpen(true)}
                    title="Click to enlarge"
                  >
                    <Image
                      src="/wechatqr.jpg"
                      alt="WeChat QR Code"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn size={24} className="text-[#c9a962]" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[#a0a0a0] text-sm mb-2">
                      Scan the QR code with your WeChat app to add us and stay connected.
                    </p>
                    <p className="text-[#c9a962] text-sm flex items-center gap-1">
                      <ZoomIn size={14} />
                      Click QR code to enlarge
                    </p>
                  </div>
                </div>
              </div>
              
              {/* QR Code Modal */}
              {isQRModalOpen && (
                <div 
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                  onClick={() => setIsQRModalOpen(false)}
                >
                  {/* Backdrop */}
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
                  
                  {/* Modal content */}
                  <div 
                    className="relative bg-[#1a1a1a] rounded-2xl p-8 max-w-sm w-full border border-[#c9a962]/30 shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close button */}
                    <button
                      onClick={() => setIsQRModalOpen(false)}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0a0a0a] border border-[#c9a962]/30 flex items-center justify-center text-[#a0a0a0] hover:text-[#c9a962] hover:border-[#c9a962] transition-all duration-300"
                    >
                      <X size={16} />
                    </button>
                    
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">Connect on WeChat</h3>
                      <p className="text-[#a0a0a0] text-sm">Scan with your WeChat app</p>
                    </div>
                    
                    {/* QR Code */}
                    <div className="relative w-64 h-64 mx-auto rounded-xl overflow-hidden border-2 border-[#c9a962]/30">
                      <Image
                        src="/wechatqr.jpg"
                        alt="WeChat QR Code"
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Footer text */}
                    <p className="text-center text-[#c9a962] text-sm mt-6">
                      Quick responses during business hours
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Contact;
