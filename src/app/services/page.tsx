'use client';

import React, { useEffect } from 'react';
import Link from "next/link";
import { 
  Users, 
  Building2, 
  BookOpen, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2,
  Gavel,
  HeartHandshake
} from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: <Users size={32} />,
      title: 'Family Law',
      description: 'We provide compassionate and expert legal assistance in divorce, property settlements, and parenting matters, guiding you through sensitive family issues with care and professionalism.',
      features: [
        'Divorce & Separation',
        'Property Settlements',
        'Parenting Arrangements',
        'Child Support',
        'Domestic Violence Matters'
      ],
      color: 'from-rose-500/20 to-rose-500/5'
    },
    {
      icon: <Building2 size={32} />,
      title: 'Conveyancing',
      description: 'With our expertise, we aim to simplify the conveyancing process, safeguarding your interests throughout the property transaction. From contract review to settlement, we handle every detail.',
      features: [
        'Residential Property Sales',
        'Property Purchases',
        'Contract Review',
        'Settlement Services',
        'Title Transfers'
      ],
      color: 'from-emerald-500/20 to-emerald-500/5'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Wills & Estate',
      description: 'We assist with drafting clear and legally valid wills, establishing powers of attorney, creating enduring guardianship arrangements to ensure your wishes are respected, and applying for probate or letters of administration.',
      features: [
        'Will Drafting',
        'Powers of Attorney',
        'Guardianship',
        'Probate Applications',
        'Estate Administration'
      ],
      color: 'from-violet-500/20 to-violet-500/5'
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Employment Law',
      description: 'We offer trusted legal advice on workplace rights, unfair dismissal, and discrimination, advocating for fair treatment in employment matters. We represent both employers and employees in workplace disputes.',
      features: [
        'Unfair Dismissal',
        'Workplace Discrimination',
        'Employment Contracts',
        'Workplace Policies',
        'Dispute Resolution'
      ],
      color: 'from-amber-500/20 to-amber-500/5'
    },
    {
      icon: <Gavel size={32} />,
      title: 'Migration Law',
      description: 'Our migration law services cover a wide range of visa applications and immigration matters. We assist individuals, families, and businesses with their immigration needs, ensuring compliance with Australian immigration laws.',
      features: [
        'Visa Applications',
        'Partner Visas',
        'Student Visas',
        'Work Visas',
        'Citizenship Applications'
      ],
      color: 'from-cyan-500/20 to-cyan-500/5'
    },
    {
      icon: <HeartHandshake size={32} />,
      title: 'Debt Recovery',
      description: 'We provide effective debt recovery services for businesses and individuals. Our approach combines legal expertise with practical strategies to recover outstanding debts while maintaining professional relationships where possible.',
      features: [
        'Commercial Debt Recovery',
        'Letter of Demand',
        'Court Proceedings',
        'Enforcement Actions',
        'Payment Arrangements'
      ],
      color: 'from-indigo-500/20 to-indigo-500/5'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]"></div>
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a962]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal">
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Our Services</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive <span className="text-gold">Legal</span><br />
              <span className="text-gold">Solutions</span>
            </h1>
            <p className="text-[#a0a0a0] text-lg leading-relaxed max-w-2xl mx-auto">
              We offer a wide range of legal services designed to meet your unique needs. 
              From family law to commercial matters, our experienced team is here to guide you 
              through every step of your legal journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="card-dark group reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#c9a962]/20`}>
                    <span className="text-[#c9a962]">{service.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 size={14} className="text-[#c9a962]" />
                        <span className="text-[#a0a0a0]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="px-8 pb-6">
                  <Link 
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3 border border-[#c9a962]/30 rounded-lg text-[#c9a962] hover:bg-[#c9a962] hover:text-[#0a0a0a] transition-all duration-300"
                  >
                    <span>Consult Now</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
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
              Ready to Get <span className="text-gold">Started?</span>
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
                <span>Book Consultation</span>
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

export default Services;
