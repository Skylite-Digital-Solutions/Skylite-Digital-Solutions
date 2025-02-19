import React from 'react';
import { useNavigate } from 'react-router-dom';
import Contacts from './Contacts';
import { ArrowRight, Eye, Target, Users } from 'lucide-react';

const AboutUs = () => {
  const navigate = useNavigate();
  
  const handleGetInTouchClick = () => {
    navigate('/contact-us');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
          About Us
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></div>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto mt-6 text-lg">
          Empowering businesses with innovative digital solutions that drive growth and success.
        </p>
      </div>

      {/* Main About Us Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/3 bg-blue-600 p-8 flex items-center justify-center">
              <Users className="w-24 h-24 text-white" />
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Story</h2>
              <div className="w-16 h-1 bg-blue-600 mb-6 rounded-full"></div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Welcome to our organization! We are committed to providing top-notch services in web development, 
                quality assurance, IT consultancy, and digital marketing. Our team of experts is dedicated to helping 
                your business thrive in the digital landscape, with solutions tailored to your unique needs.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Founded with a passion for excellence, we've helped countless businesses transform their digital 
                presence and achieve remarkable growth through innovative strategies and cutting-edge technology.
              </p>
              <button 
                className="inline-flex items-center bg-blue-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-blue-700 transition-all duration-200 group" 
                onClick={handleGetInTouchClick}
              >
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Our Vision</h2>
            </div>
            <div className="w-16 h-1 bg-blue-600 mb-6 rounded-full"></div>
            <p className="text-slate-600 leading-relaxed">
              To position ourselves as a global partner and preferred choice for customers by delivering 
              leading expertise that drives value creation in specific domains. We envision a future where 
              technology seamlessly integrates with business objectives to create sustainable growth.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-100">
              <div className="flex items-center text-blue-600 font-medium">
                <span>Building tomorrow's solutions today</span>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Our Mission</h2>
            </div>
            <div className="w-16 h-1 bg-blue-600 mb-6 rounded-full"></div>
            <p className="text-slate-600 leading-relaxed">
              To carve out a unique position by delivering innovative, integrated technology services 
              supported by world-class processes and top-tier technology. We are committed to excellence, 
              client satisfaction, and creating measurable value through every project we undertake.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-100">
              <div className="flex items-center text-blue-600 font-medium">
                <span>Delivering excellence with every solution</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section - New Addition */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 relative inline-block">
            Our Core Values
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Innovation', description: 'Constantly exploring new ideas and technologies to deliver cutting-edge solutions.' },
            { title: 'Excellence', description: 'Committing to the highest standards in every aspect of our work.' },
            { title: 'Integrity', description: 'Maintaining honesty, transparency, and ethical practices in all relationships.' },
            { title: 'Collaboration', description: 'Working together as partners with our clients to achieve mutual success.' }
          ].map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="text-blue-600 font-bold text-lg mb-3">{value.title}</div>
              <p className="text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us Section */}
      <section className="w-full bg-white py-12 rounded-xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Contacts />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;