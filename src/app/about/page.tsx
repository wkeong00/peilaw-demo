'use client';

import React, { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Globe2, BookOpen, Users, Scale } from 'lucide-react';

const About = () => {
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

  const teamMembers = [
    {
      name: 'Pei Ling Cao',
      title: 'Principal Lawyer',
      bio: 'Pei Ling Cao is the Principal at Cao Legal Solutions, bringing a wealth of experience and a client-centered approach to every case. With a strong background in family law, Pei has also developed expertise across a diverse range of practice areas, including migration law, debt recovery, property conveyancing, and employment law. Fluent in English, Mandarin, Cantonese, and Bahasa, Pei is dedicated to bridging cultural and linguistic gaps.',
      image: '/aboutphoto/peilingimg.jpg',
      specialties: ['Family Law', 'Migration Law', 'Property Law'],
      languages: ['English', 'Mandarin', 'Cantonese', 'Bahasa']
    },
    {
      name: 'Michael Chen',
      title: 'Senior Associate',
      bio: 'Michael Chen is a Senior Associate at Cao Legal Solutions, specializing in commercial litigation and corporate law. With over 10 years of experience in complex commercial disputes, Michael brings a strategic and pragmatic approach to resolving business conflicts. He has successfully represented clients in high-stakes negotiations, mediations, and court proceedings. Michael is committed to delivering practical solutions that align with his clients business objectives.',
      image: '/aboutphoto/peilingimg.jpg',
      specialties: ['Commercial Litigation', 'Corporate Law', 'Contract Disputes'],
      languages: ['English', 'Mandarin']
    },
    {
      name: 'Jessica Wong',
      title: 'Legal Consultant',
      bio: 'Jessica Wong joins Cao Legal Solutions as a Legal Consultant, bringing extensive expertise in estate planning and elder law. With a compassionate approach and meticulous attention to detail, Jessica helps clients navigate complex estate matters, from drafting comprehensive wills to establishing powers of attorney and guardianship arrangements. She is dedicated to ensuring her clients wishes are respected and their loved ones are protected.',
      image: '/aboutphoto/peilingimg.jpg',
      specialties: ['Estate Planning', 'Elder Law', 'Probate'],
      languages: ['English', 'Cantonese']
    }
  ];

  const firmStats = [
    { icon: <Award size={32} />, value: '10+', label: 'Years Experience' },
    { icon: <Users size={32} />, value: '1000+', label: 'Clients Served' },
    { icon: <Globe2 size={32} />, value: '4', label: 'Languages' },
    { icon: <Scale size={32} />, value: '5', label: 'Practice Areas' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a962]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal">
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">About Us</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Committed to <span className="text-gold">Justice</span> &<br />
              <span className="text-gold">Excellence</span>
            </h1>
            <p className="text-[#a0a0a0] text-lg leading-relaxed max-w-2xl mx-auto">
              At Cao Legal Solutions, we offer expert legal services in family law, 
              employment law, property conveyancing and migration law. Led by a principal 
              lawyer from a migrant background, we bring a broader understanding of 
              cultural diversity to every matter we handle.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {firmStats.map((stat, index) => (
              <div 
                key={index}
                className="text-center reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#c9a962]/20 to-[#c9a962]/5 flex items-center justify-center border border-[#c9a962]/20">
                  <span className="text-[#c9a962]">{stat.icon}</span>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-[#a0a0a0] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Firm Section */}
      <section className="py-24 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Our Firm</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Dedicated to <span className="text-gold">Your Success</span>
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  At Cao Legal Solutions, we are here to offer legal help that truly fits you — 
                  whether you are an individual or a business. We are guided by values that matter 
                  and built on principles of compassion, leadership, and strength.
                </p>
                <p>
                  What drives us is more than just providing solutions; it is about finding the 
                  right solutions that work for your unique situation. We believe in building real, 
                  lasting relationships by communicating clearly, supporting you every step of the way.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a962]/10 flex items-center justify-center">
                    <BookOpen size={20} className="text-[#c9a962]" />
                  </div>
                  <span className="text-white text-sm">Expert Knowledge</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a962]/10 flex items-center justify-center">
                    <Users size={20} className="text-[#c9a962]" />
                  </div>
                  <span className="text-white text-sm">Client Focused</span>
                </div>
              </div>
            </div>
            
            <div className="relative reveal delay-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="card-dark p-6 text-center">
                    <div className="text-3xl font-bold text-gold mb-2">98%</div>
                    <div className="text-[#a0a0a0] text-sm">Client Satisfaction</div>
                  </div>
                  <div className="card-dark p-6">
                    <div className="text-[#c9a962] mb-2">
                      <Award size={24} />
                    </div>
                    <div className="text-white font-semibold">Award Winning</div>
                    <div className="text-[#a0a0a0] text-sm">Legal Excellence 2024</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="card-dark p-6">
                    <div className="text-[#c9a962] mb-2">
                      <Globe2 size={24} />
                    </div>
                    <div className="text-white font-semibold">Multilingual</div>
                    <div className="text-[#a0a0a0] text-sm">4 Languages</div>
                  </div>
                  <div className="card-dark p-6 text-center">
                    <div className="text-3xl font-bold text-gold mb-2">24/7</div>
                    <div className="text-[#a0a0a0] text-sm">Client Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111] relative">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 reveal">
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Our Team</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="text-gold">Legal Experts</span>
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Our team of experienced legal professionals is dedicated to providing 
              exceptional service and achieving the best possible outcomes for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="card-dark overflow-hidden group reveal hover:border-[#c9a962]/30"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-[#c9a962] text-sm">{member.title}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4 line-clamp-4">
                    {member.bio}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-[#c9a962] text-xs uppercase tracking-wider mb-1">Specialties</p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-[#c9a962]/10 text-[#c9a962] px-2 py-1 rounded"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-[#c9a962] text-xs uppercase tracking-wider mb-1">Languages</p>
                      <p className="text-[#a0a0a0] text-sm">{member.languages.join(', ')}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a962]/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Work With Our <span className="text-gold">Expert Team</span>
            </h2>
            <p className="text-[#a0a0a0] text-lg mb-10">
              Let our experienced legal professionals guide you through your legal journey. 
              We are committed to achieving the best possible outcomes for our clients.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact"
                className="btn-gold flex items-center gap-2 text-lg px-8 py-4"
              >
                <span>Contact Us</span>
                <ArrowRight size={20} />
              </Link>
              <Link 
                href="/services"
                className="btn-outline-gold text-lg px-8 py-4"
              >
                Our Services
              </Link>
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

export default About;
