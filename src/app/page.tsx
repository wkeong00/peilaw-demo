import React from 'react';
import { Heart,Users, } from "lucide-react";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 to-white text-slate-800">
      {/* Hero Section */}
  <section className="relative bg-gray-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-down bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
            Your legal needs, <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">our trusted excellence.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 animate-fade-in-up">
            We offer more than legal solutions - we are here to listen with compassion, because your story matters. 
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-semibold py-4 px-10 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl text-lg animate-scale-in"
          >
            Book an appointment
          </a>
        </div>
        {/* Background Overlay for effect */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute top-0 left-0 w-1/3 h-1/3 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M49.2,-55.5C64.6,-43.3,77.7,-21.7,78.3,0.6C78.9,22.9,67,45.8,50.7,58.7C34.5,71.6,17.2,74.5,1.7,72.3C-13.8,70.1,-27.7,62.8,-42.6,54.4C-57.5,46,-73.4,36.5,-77.9,23.3C-82.5,10,-75.6,-7.1,-67.2,-23.1C-58.8,-39.2,-48.9,-54.2,-34.5,-66.4C-20,-78.5,-5,-87.8,11.2,-80.6C27.4,-73.4,43.8,-59.7,49.2,-55.5Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute bottom-0 right-0 w-1/4 h-1/4 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M48.8,-47.9C60.2,-37.9,65.2,-19,61.9,-1.9C58.6,15.2,47,30.4,31.6,40.1C16.2,49.7,-2.8,53.8,-19.9,49.8C-37,45.7,-52.1,33.5,-59.8,16.8C-67.5,0.1,-67.8,-21.1,-58.5,-37.2C-49.2,-53.4,-30.4,-64.5,-11.9,-69C6.6,-73.5,24.9,-71.4,36.8,-60.8C48.8,-50.2,54.2,-31.2,48.8,-47.9Z" transform="translate(100 100)" />
          </svg>
        </div>
      </section>

      {/* About Us Overview Section */}
  <section className="py-20 bg-white text-slate-800 shadow-inner">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
            Who We <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Are</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12">
            At Cao Legal Solutions, we ensure your story is heard and represented with integrity — because behind every story is a person in need of support. Led by a principal lawyer from a migrant background, we bring a broader understanding of cultural diversity and lived experience to every matter we handle.
          </p>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12">
            Whether you are facing a complex legal issue, seeking advice about your rights, or simply need someone who truly speaks your language — we are here to help.
          </p>
          <a
            href="/about"
            className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            Learn More About Us
          </a>
        </div>
      </section>

      {/* Our Values / Why Choose Us Section */}
  <section className="py-20 bg-slate-50 text-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
           Our Culture, Mission <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">and Values</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12">
            At Cao Legal Solutions, we are committed to embracing a culture of diversity and inclusiveness, where every client is valued, and we uphold justice and equality as fundamental principles in everything we do.
          </p>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12">
            We are committed to delivering justice in every case and that you feel supported and satisfied with our service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border border-yellow-400">
              <div className="p-4 bg-gray-900 rounded-full mb-6 shadow-inner">
                <Heart size={40} className="text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Compassion</h3>
              <p className="text-md leading-relaxed text-slate-700">
                We listen closely and care deeply about your unique situation, ensuring you feel supported throughout your legal journey.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border border-yellow-400">
              <div className="p-4 bg-gray-900 rounded-full mb-6 shadow-inner">
                <Users size={40} className="text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Leadership</h3>
              <p className="text-md leading-relaxed text-slate-700">
                Our experienced team takes charge with confidence and expertise, guiding you through complex legal challenges with clarity and vision.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border border-yellow-400">
              <div className="p-4 bg-gray-900 rounded-full mb-6 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Strength</h3>
              <p className="text-md leading-relaxed text-slate-700">
                We stand firmly by your side, advocating with determination to protect your rights and secure the best outcome for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
