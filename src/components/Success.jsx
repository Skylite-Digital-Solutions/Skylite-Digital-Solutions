import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Target, Users, Shield, Zap, BarChart, Code } from 'lucide-react';

const Success = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact-us');
  };

  const successFactors = [
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: "Tailored Solutions",
      description: "We recognize that every business is unique. Our approach starts with understanding your specific goals and challenges, allowing us to deliver customized solutions that align perfectly with your vision and business objectives."
    },
    {
      icon: <Code className="w-6 h-6 text-blue-500" />,
      title: "Comprehensive Expertise",
      description: "Our team comprises experts in web development, software engineering, cloud solutions, cybersecurity, and digital transformation. With years of industry experience, we ensure your project is handled by skilled professionals committed to your success."
    },
    {
      icon: <BarChart className="w-6 h-6 text-blue-500" />,
      title: "Scalable Services",
      description: "As your business grows, your IT needs will evolve. We provide scalable solutions that adapt to your changing requirements, ensuring you have the resources and support needed at every stage."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Data Security and Compliance",
      description: "Your data's security is paramount. We implement rigorous security protocols and maintain compliance with industry regulations, safeguarding your business from potential threats and ensuring peace of mind."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: "Agile and Transparent Processes",
      description: "We adopt an agile approach, allowing flexibility and transparency in every project phase. You stay informed, involved, and can count on timely delivery without compromising quality."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Proactive Innovation",
      description: "As your strategic partner, we anticipate your future needs, exploring opportunities for enhancement and proactively recommending improvements that keep your business at the forefront of your industry."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white pt-24 pb-20 px-4">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          <span className="text-blue-600">Success</span> Starts With Partnership
        </h1>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          We bring expertise, dedication, and a client-centric focus to every project, 
          empowering your business to thrive in a competitive digital landscape.
        </p>
        
        <div className="bg-white rounded-2xl shadow-xl p-10 transform hover:translate-y-1 transition-all duration-300 mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Partner with us for a commitment to excellence</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Choose us as your IT partner and experience the peace of mind that comes with knowing your business is supported 
            by a dedicated, innovative, and dependable team. Let us help you achieve excellence and drive lasting success in the digital age.
          </p>
          <button
            onClick={handleGetInTouch}
            className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Success Factors Section */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-3">How We Drive Your Success</h2>
          <p className="text-xl text-gray-700 mb-4">Why Partner with Us?</p>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successFactors.map((factor, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                  {factor.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{factor.title}</h3>
              </div>
              <p className="text-gray-600 flex-grow">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="max-w-5xl mx-auto px-4 mb-20">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 11h-4a1 1 0 01-1-1v-4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1zm0 0v3a3 3 0 01-3 3h-1"></path>
              <path d="M21 11h-4a1 1 0 01-1-1v-4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1zm0 0v3a3 3 0 01-3 3h-1"></path>
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold mb-6 relative z-10">What Our Clients Say</h3>
          <p className="text-lg mb-8 italic relative z-10">
            "Skylite Digital Solutions transformed our outdated systems into a streamlined digital ecosystem. 
            Their team was responsive, professional, and delivered beyond our expectations. We've seen a 40% 
            increase in efficiency since implementation."
          </p>
          <div className="flex items-center relative z-10">
            <div className="w-12 h-12 bg-white rounded-full"></div>
            <div className="ml-4">
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-blue-100">CTO, Innovate Technologies</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Achieve Your Business Goals?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's start a conversation about how our tailored IT solutions can help your business grow, 
          innovate, and succeed in today's competitive market.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleGetInTouch}
            className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
          >
            Schedule a Consultation
          </button>
          <button
            onClick={() => navigate('/services')}
            className="px-8 py-4 bg-white text-blue-600 border border-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300"
          >
            Explore Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;