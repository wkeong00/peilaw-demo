'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Heart, Users, Shield, ArrowRight, Scale, Building2, Gavel, BookOpen } from 'lucide-react';

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

  const values = [
    {
      icon: <Heart size={32} />,
      title: 'Compassion',
      description: 'We listen closely and care deeply about your unique situation, ensuring you feel supported throughout your legal journey.'
    },
    {
      icon: <Users size={32} />,
      title: 'Leadership',
      description: 'Our experienced team takes charge with confidence and expertise, guiding you through complex legal challenges.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Strength',
      description: 'We stand firmly by your side, advocating with determination to protect your rights and secure the best outcome.'
    }
  ];

  const practiceAreas = [
    { icon: <Users size={24} />, title: 'Family Law', desc: 'Divorce, custody & parenting matters' },
    { icon: <Building2 size={24} />, title: 'Conveyancing', desc: 'Property transactions & transfers' },
    { icon: <BookOpen size={24} />, title: 'Wills & Estate', desc: 'Estate planning & probate' },
    { icon: <Gavel size={24} />, title: 'Employment Law', desc: 'Workplace rights & disputes' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]"></div>
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a962]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#c9a962]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <p className="text-[#c9a962] text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-medium">
              Excellence in Legal Services
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in-up delay-200">
            <span className="text-white">Your Legal Needs,</span>
            <br />
            <span className="text-gold-animate">Our Trusted Excellence</span>
          </h1>
          
          <p className="text-[#a0a0a0] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300">
            We offer more than legal solutions — we listen with compassion, 
            because your story matters. Experience the difference of truly 
            personalized legal care.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
            <Link 
              href="/contact"
              className="btn-gold flex items-center gap-2 text-base px-8 py-4"
            >
              <span>Book Consultation</span>
              <ArrowRight size={18} />
            </Link>
            <Link 
              href="/services"
              className="btn-outline-gold text-base px-8 py-4"
            >
              Our Services
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#c9a962]/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-[#c9a962] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 reveal">
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-gold">Practice Areas</span>
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Comprehensive legal services tailored to your unique needs, 
              delivered with expertise and compassion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <div 
                key={index}
                className="card-dark p-8 group reveal hover:border-[#c9a962]/30 transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c9a962]/20 to-[#c9a962]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#c9a962]/20">
                  <span className="text-[#c9a962]">{area.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">{area.title}</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{area.desc}</p>
                <div className="mt-6 flex items-center text-[#c9a962] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 reveal">
            <Link 
              href="/services"
              className="btn-outline-gold inline-flex items-center gap-2"
            >
              <span>View All Services</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a962]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a962]/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Who We Are</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Excellence in <br />
                <span className="text-gold">Legal Services</span>
              </h2>
              <p className="text-[#a0a0a0] text-lg leading-relaxed mb-6">
                At Cao Legal Solutions, we ensure your story is heard and represented with integrity. 
                Led by a principal lawyer from a migrant background, we bring a broader understanding 
                of cultural diversity to every matter we handle.
              </p>
              <p className="text-[#a0a0a0] leading-relaxed mb-8">
                Whether you are facing a complex legal issue, seeking advice about your rights, 
                or simply need someone who truly speaks your language — we are here to help.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/about"
                  className="btn-gold flex items-center gap-2"
                >
                  <span>About Us</span>
                  <ArrowRight size={18} />
                </Link>
                <Link 
                  href="/contact"
                  className="btn-outline-gold"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            
            <div className="relative reveal delay-200">
              <div className="relative z-10">
                <div className="aspect-square rounded-2xl overflow-hidden border border-[#c9a962]/20 shadow-2xl shadow-black/50">
                  <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#c9a962]/30 to-[#c9a962]/10 flex items-center justify-center border border-[#c9a962]/30">
                        <Scale size={40} className="text-[#c9a962]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Trusted Excellence</h3>
                      <p className="text-[#a0a0a0]">Your legal needs, our commitment</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#c9a962]/20 rounded-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#c9a962]/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 reveal">
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Our Foundation</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Culture, Mission <span className="text-gold">& Values</span>
            </h2>
            <p className="text-[#a0a0a0] max-w-3xl mx-auto">
              At Cao Legal Solutions, we are committed to embracing a culture of diversity and inclusiveness, 
              where every client is valued, and we uphold justice and equality as fundamental principles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="card-dark p-8 text-center group reveal hover:border-[#c9a962]/30"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#c9a962]/20 to-transparent flex items-center justify-center border border-[#c9a962]/20 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#c9a962]">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">{value.title}</h3>
                <p className="text-[#a0a0a0] leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a962]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Discuss <br />
              <span className="text-gold">Your Legal Matter?</span>
            </h2>
            <p className="text-[#a0a0a0] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Schedule a consultation with our experienced legal team. 
              We are here to listen, advise, and advocate for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact"
                className="btn-gold flex items-center gap-2 text-lg px-10 py-4"
              >
                <span>Schedule Consultation</span>
                <ArrowRight size={20} />
              </Link>
              <a 
                href="tel:0870940883"
                className="btn-outline-gold text-lg px-10 py-4"
              >
                Call (08) 7094 0883
              </a>
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

export default HomePage;
