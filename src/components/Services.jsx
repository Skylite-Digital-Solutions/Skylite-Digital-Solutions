import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Code, BarChart2, Zap, BookOpen } from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Web Development",
      description: "We create responsive and user-friendly websites that drive engagement and growth. Our team uses the latest technologies to deliver high-quality web solutions.",
      icon: <Code className="w-10 h-10 text-blue-500 mb-4" />,
      path: "/web-development",
    },
    {
      title: "Quality Assurance",
      description: "Our QA services ensure that your products are bug-free and meet the highest quality standards. We provide comprehensive testing solutions tailored to your needs.",
      icon: <Zap className="w-10 h-10 text-green-500 mb-4" />,
      path: "/quality-assurance",
    },
    {
      title: "Digital Marketing & SEO",
      description: "Our digital marketing and SEO services are designed to increase your online visibility and drive traffic to your website. Let us help you reach your target audience effectively.",
      icon: <BarChart2 className="w-10 h-10 text-purple-500 mb-4" />,
      path: "/digital-seo",
    },
    {
      title: "Cyber Security",
      description: "We provide comprehensive cyber security solutions that protect your digital assets and safeguard your business from potential threats and vulnerabilities.",
      icon: <Shield className="w-10 h-10 text-red-500 mb-4" />,
      path: "/cyber-security",
    },
    {
      title: "Blogs",
      description: "Explore our insights and expertise through our blog. From tech trends to practical tips, we share knowledge to help you stay informed and make strategic technology decisions.",
      icon: <BookOpen className="w-10 h-10 text-amber-500 mb-4" />,
      path: "/blogs",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-600 mb-6 relative inline-block">
            <span className="relative z-10">
              Empowering Your Vision
            </span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 z-0"></span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Skylite Digital Solutions empowers digital transformation and streamlines business operations 
            with cutting-edge AI and Data Engineering solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-center items-center">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6 flex-grow text-center">
                  {service.description}
                </p>
                <button
                  onClick={() => navigate(service.path)}
                  className="w-full py-3 px-6 bg-gray-100 text-gray-800 font-medium rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <span>Explore</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">Need a custom solution for your business?</p>
          <button 
            onClick={() => navigate('/contact')}
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;