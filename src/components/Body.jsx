import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutUs from './AboutUs';
import Services from './Services';
import Leadership from './Leadership';
import OurClient from './OurClients';

const images = [
  {
    url: '/Partners.png',
    text: 'Welcome to Our Service',
    route: '/our-services',
  },
  {
    url: '/Qualities.png',
    text: 'Quality Assurance Guaranteed',
    route: '/quality',
  },
  {
    url: '/Software.png',
    text: 'Your Success is Our Priority',
    route: '/success',
  },
];

const Body = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleScheduleCallClick = () => {
    navigate('/contact-us');
  };

  const handleKnowMoreClick = () => {
    navigate(images[currentSlide].route);
  };

  return (
    <div className="bg-gray-50 font-sans text-gray-800 overflow-x-hidden">
      {/* Slider Section */}
      <div className="relative w-full h-[90vh] overflow-hidden bg-gray-800">
        <div className="w-full h-full relative">
          <img
            src={images[currentSlide].url}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-center bg-black bg-opacity-50 p-6 rounded-lg max-w-[80%] text-white">
            <h2 className="text-2xl mb-4">{images[currentSlide].text}</h2>
            <div className="flex justify-center gap-8">
              <button
                className="py-2 px-4 bg-yellow-400 text-gray-800 font-semibold rounded-md hover:scale-105 transition-all duration-300"
                onClick={handleKnowMoreClick}
              >
                Know More
              </button>
              <button
                className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:scale-105 transition-all duration-300"
                onClick={handleScheduleCallClick}
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>
        {/* Slide Indicators */}
        <div className="absolute bottom-2 w-full flex justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-10 h-1 mx-2 bg-gray-400 cursor-pointer transition-all duration-300 ${
                index === currentSlide ? 'bg-yellow-500 scale-y-150' : ''
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <section className="my-10 px-5 text-center">
        <AboutUs />
      </section>

      {/* Leadership Section */}
      <section className="my-10 px-5 text-center">
        <Leadership />
      </section>

      {/* Services Section */}
      <section className="my-10 px-5 text-center">
        <Services />
      </section>

      {/* Our Clients Section */}
      <section className="my-10 px-5 text-center">
        <OurClient />
      </section>
    </div>
  );
};

export default Body;
