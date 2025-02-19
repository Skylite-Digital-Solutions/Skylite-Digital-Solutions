import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContactUs from './ContactUs';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/contact-us'); // Adjust the path to match your route for the Contact Us page
  };

  return (
    <div className="bg-gray-50 flex flex-wrap justify-evenly gap-5 p-5">
      {/* About Us Container */}
      <div className="flex-1 max-w-[97%] p-5 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
        <div className="w-12 h-1 bg-gray-700 my-2"></div>
        <p className="text-gray-700 text-base leading-6 mt-4">
          Welcome to our organization! We are committed to providing top-notch services in web development, quality assurance,
          IT consultancy, and digital marketing. Our team of experts is dedicated to helping your business thrive in the digital
          landscape, with solutions tailored to your unique needs.
        </p>
        {/* <button className="bg-transparent text-gray-800 font-semibold py-2 px-5 border-none mt-5 rounded-md hover:bg-primary hover:text-white transition-all duration-200" onClick={handleLearnMoreClick}>Get In Touch</button> */}
      </div>

      {/* Vision & Mission Container */}
      <div className="flex-1 max-w-[98.5%] flex flex-row justify-center items-center gap-5 p-5">
        {/* Vision Section */}
        <div className="flex-1 p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
          <p className="text-gray-700 text-base leading-6 mt-4">
            To position ourselves as a global partner and preferred choice for customers by delivering leading expertise that drives value creation in specific domains.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex-1 p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-700 text-base leading-6 mt-4">
            To carve out a unique position by delivering innovative, integrated technology services supported by world-class processes and top-tier technology.
          </p>
        </div>
      </div>

      {/* Contact Us Section */}
      <section className="w-full mt-8">
        <ContactUs />
      </section>
    </div>
  );
};

export default AboutUs;
