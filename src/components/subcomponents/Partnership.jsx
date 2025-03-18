import React from "react";
import { FaHandshake, FaCheck, FaFileContract, FaArrowRight } from "react-icons/fa";

const Partnership = () => {
  const benefits = [
    "Access to our cutting-edge IT solutions and expertise.",
    "Co-branding opportunities and mutual business growth.",
    "Revenue-sharing models for long-term partnerships.",
    "Dedicated support and technical assistance."
  ];

  const terms = [
    "Maintain transparency and professionalism in all collaborations.",
    "Respect intellectual property rights and confidentiality agreements.",
    "Abide by fair usage policies for shared resources and tools.",
    "Ensure ethical business practices in all engagements."
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <FaHandshake className="text-6xl text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
            Partnership with H-Tech Digital
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              We welcome strategic partnerships with businesses and individuals looking to collaborate 
              in IT services, software development, and digital transformation.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Benefits Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaCheck className="text-2xl text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Why Partner with Us?</h2>
            </div>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaFileContract className="text-2xl text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Terms & Conditions</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              By joining our partnership program, you agree to:
            </p>
            
            <ul className="space-y-4">
              {terms.map((term, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">{term}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-gray-700 mt-6">
              For a detailed agreement, please{" "}
              <a href="/contact" className="text-blue-600 font-medium hover:underline transition-all">
                contact us
              </a>.
            </p>
          </div>
        </div>

        {/* Partner Process Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
            Partnership Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Apply",
                description: "Fill out our partnership application form with your business details."
              },
              {
                step: "2",
                title: "Connect",
                description: "Our team will schedule a meeting to discuss collaboration opportunities."
              },
              {
                step: "3",
                title: "Collaborate",
                description: "Finalize the partnership agreement and start working together."
              }
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-lg mb-8">
            Join our network of strategic partners and let's grow together.
          </p>
          <a href="/apply-partnership">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-all duration-300 flex items-center mx-auto">
              <span>Apply Now</span>
              <FaArrowRight className="ml-2" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partnership;