import React, { useState, useEffect } from 'react';
import { FaHandshake, FaArrowRight, FaTrophy, FaUsers, FaGlobe } from 'react-icons/fa';

const partners = [
  { 
    name: 'Google', 
    image: '/google.png',
    description: 'Strategic cloud solutions partner, helping businesses leverage Google Cloud Platform for digital transformation.',
    tier: 'Platinum' 
  },
  { 
    name: 'Databricks', 
    image: '/Databricks_Logo.png',
    description: 'Enabling data-driven innovation through unified analytics and machine learning collaboration.',
    tier: 'Gold' 
  },
  { 
    name: 'Salesforce', 
    image: '/Salesforce.png',
    description: 'Delivering CRM excellence and custom implementations to enhance customer relationships.',
    tier: 'Platinum' 
  },
  { 
    name: 'Simplilearn', 
    image: '/Simplilearn_Logo-1.jpg',
    description: 'Providing professional certification and workforce development for continuous learning.',
    tier: 'Silver' 
  },
  { 
    name: 'AWS', 
    image: '/AWS.png',
    description: 'Implementing scalable cloud infrastructure and serverless solutions for enterprise clients.',
    tier: 'Platinum' 
  },
  { 
    name: 'Microsoft', 
    image: '/Microsoft.png',
    description: 'Building modern workplace and Azure cloud solutions for business transformation.',
    tier: 'Gold' 
  },
];

const OurClient = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filteredPartners, setFilteredPartners] = useState(partners);
  const [animatedPartners, setAnimatedPartners] = useState([]);

  // Filter logic
  useEffect(() => {
    if (selectedFilter === 'All') {
      setFilteredPartners(partners);
    } else {
      setFilteredPartners(partners.filter(partner => partner.tier === selectedFilter));
    }
  }, [selectedFilter]);

  // Animation for partners appearing
  useEffect(() => {
    setAnimatedPartners([]);
    const timer = setTimeout(() => {
      setAnimatedPartners(filteredPartners);
    }, 100);
    return () => clearTimeout(timer);
  }, [filteredPartners]);

  // Partner tiers for filter
  const tiers = ['All', 'Platinum', 'Gold', 'Silver'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
            <FaHandshake className="text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Strategic Partners</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Collaborating with industry leaders to deliver innovative solutions and transform businesses worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {tiers.map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedFilter(tier)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedFilter === tier
                    ? 'bg-white text-blue-700 shadow-lg'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <div className="w-32 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We collaborate with world-class organizations to bring cutting-edge technologies and methodologies to our clients, ensuring exceptional outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {animatedPartners.map((partner, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                <div className={`h-2 ${
                  partner.tier === 'Platinum' ? 'bg-blue-600' : 
                  partner.tier === 'Gold' ? 'bg-amber-500' : 'bg-gray-400'
                }`}></div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="h-16 object-contain"
                    />
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      partner.tier === 'Platinum' ? 'bg-blue-100 text-blue-800' : 
                      partner.tier === 'Gold' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {partner.tier} Partner
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{partner.name}</h3>
                  <p className="text-gray-600 mb-6">{partner.description}</p>
                  
                  <button className="text-blue-600 font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Learn more <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover the advantages of forming a strategic alliance with our organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <FaTrophy className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Industry Expertise</h3>
              <p className="text-gray-600">
                Gain access to specialized knowledge and industry insights to stay ahead of market trends.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <FaUsers className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Expanded Network</h3>
              <p className="text-gray-600">
                Connect with our extensive client base and fellow partners to explore new business opportunities.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <FaGlobe className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Reach</h3>
              <p className="text-gray-600">
                Leverage our international presence to expand your business across borders and into new markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join our partner ecosystem and discover new opportunities for growth and innovation.
          </p>
          <button className="px-8 py-4 bg-white text-blue-700 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
            Apply for Partnership
          </button>
        </div>
      </section>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default OurClient;