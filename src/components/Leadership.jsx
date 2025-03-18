import React, { useState } from 'react';
import { Linkedin, Mail, ChevronDown } from 'lucide-react'; // Assuming you want to use icons from react-icons

const Leadership = () => {
  const [expandedMember, setExpandedMember] = useState(null);
  const leadership = [
      {
        name: 'Shalini Saurabh',
        title: "Chief Executive Officer",
        description: "20+ years of experience in technology leadership. She is the visionary leader of Skylite Digital, ensuring that the company stays ahead of industry trends and always strives for excellence.",
        linkedin: "https://linkedin.com/in/akashdeepsaurabh",
        email: "ADS.Shalini.Singh@gmail.com",
        image: '/CEO.png',
      },
      {
        name: 'A D Saurabh',
        title: "Chief Technical Officer",
        description: "20+ years of experience in technology leadership. She is the visionary leader of Skylite Digital, ensuring that the company stays ahead of industry trends and always strives for excellence.",
        linkedin: "https://linkedin.com/in/akashdeepsaurabh",
        email: "ADS.Shalini.Singh@gmail.com",
        image: '/CTO.png',
      },
      {
        name: 'Richika Singh',
        title: "Technical Lead",
        description: "20+ years of experience in technology leadership. She is the visionary leader of Skylite Digital, ensuring that the company stays ahead of industry trends and always strives for excellence.",
        linkedin: "https://linkedin.com/in/akashdeepsaurabh",
        email: "ADS.Shalini.Singh@gmail.com",
        image: '/CEO.png',
      },
      {
        name: 'Rahul',
        title: "Technical Lead",
        description: "20+ years of experience in technology leadership. She is the visionary leader of Skylite Digital, ensuring that the company stays ahead of industry trends and always strives for excellence.",
        linkedin: "https://linkedin.com/in/akashdeepsaurabh",
        email: "ADS.Shalini.Singh@gmail.com",
        image: '/CTO.png',
      },
      {
        name: 'John',
        title: "Chief Executive Officer",
        description: "20+ years of experience in technology leadership. She is the visionary leader of Skylite Digital, ensuring that the company stays ahead of industry trends and always strives for excellence.",
        linkedin: "https://linkedin.com/in/akashdeepsaurabh",
        email: "ADS.Shalini.Singh@gmail.com",
        image: '/CTO.png',
      },
    ];
  
    return (
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Meet Our Leadership Team
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Driven by innovation and committed to excellence, our leadership team brings decades of combined experience.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setExpandedMember(index)}
                onMouseLeave={() => setExpandedMember(null)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <div className="aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
  
                {/* Content Container */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <h4 className="text-md text-gray-500 mb-3">{member.title}</h4>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedMember === index ? 'max-h-48' : 'max-h-20'
                  }`}>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
  
                  {/* Social Links */}
                  <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100">
                    <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
  
                  {/* Expand Indicator */}
                  <button 
                    className={`absolute bottom-2 right-2 text-gray-400 transition-transform duration-300 ${
                      expandedMember === index ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Leadership;