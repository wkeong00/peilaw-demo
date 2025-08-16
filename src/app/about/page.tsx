    'use client'; // Marking as client component for consistency, or if any future interactivity is added

    import React from 'react';

    const About = () => {
      const teamMembers = [
        {
          name: 'John Sterling',
          title: 'Founding Partner',
          bio: 'With over 25 years of experience in corporate law, John has successfully advised numerous Fortune 500 companies on complex mergers, acquisitions, and regulatory compliance. His strategic insight and dedication are the cornerstones of our firm.',
          image: 'https://placehold.co/150x150/CCE5FF/000000?text=JS', // Placeholder image
        },
        {
          name: 'Sarah Chen',
          title: 'Senior Associate, Family Law',
          bio: 'Sarah specializes in family law, providing compassionate and effective legal representation in divorce, child custody, and domestic disputes. Her empathetic approach ensures clients feel supported through challenging times.',
          image: 'https://placehold.co/150x150/CCE5FF/000000?text=SC', // Placeholder image
        },
        {
          name: 'David Lee',
          title: 'Associate, Criminal Defense',
          bio: 'David is a tenacious advocate for his clients in criminal defense cases. With a strong track record of successful outcomes, he is committed to upholding justice and protecting the rights of the accused.',
          image: 'https://placehold.co/150x150/CCE5FF/000000?text=DL', // Placeholder image
        },
      ];

      return (
        <section id="about" className="py-20 bg-slate-50 text-slate-800">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-800 leading-tight">
              About <span className="text-blue-600">Sterling & Associates</span>
            </h2>

            {/* Our Firm Section */}
            <div className="bg-white p-10 rounded-xl shadow-lg mb-20">
              <h3 className="text-4xl font-bold text-blue-700 mb-6 border-b-4 border-blue-500 pb-2">Our Firm</h3>
              <p className="text-lg leading-relaxed mb-6">
                Sterling & Associates is a distinguished law firm committed to providing exceptional legal services to individuals and businesses alike. Founded on the principles of integrity, excellence, and client-centric advocacy, we pride ourselves on delivering strategic and effective solutions tailored to meet the unique needs of each client.
              </p>
              <p className="text-lg leading-relaxed">
                With decades of combined experience, our team of dedicated legal professionals brings a wealth of knowledge across various practice areas. We believe in building strong, lasting relationships with our clients, offering clear communication, unwavering support, and unwavering dedication to achieving the best possible outcomes. Your success is our paramount concern.
              </p>
            </div>

            {/* Our Team Section */}
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <h3 className="text-4xl font-bold text-blue-700 mb-10 border-b-4 border-blue-500 pb-2 text-center md:text-left">Our Esteemed Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-6 bg-slate-100 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-blue-400 shadow-md"
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/CCE5FF/000000?text=👤" }} // Fallback image
                    />
                    <h4 className="text-2xl font-semibold text-blue-800 mb-2">{member.name}</h4>
                    <p className="text-blue-600 font-medium mb-4">{member.title}</p>
                    <p className="text-md leading-relaxed text-slate-700">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default About;
    