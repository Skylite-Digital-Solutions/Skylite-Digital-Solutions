import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Calendar } from 'lucide-react';
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
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleScheduleCallClick = () => {
    navigate('/contact-us');
  };

  const handleKnowMoreClick = () => {
    navigate(images[currentSlide].route);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNextSlide = () => {
    if (isAnimating) return;
    setSlideDirection('right');
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setSlideDirection('left');
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setSlideDirection(index > currentSlide ? 'right' : 'left');
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="bg-gray-50 font-sans text-gray-800 overflow-x-hidden">
      {/* Hero Slider Section */}
      <div className="relative w-full h-[90vh] overflow-hidden bg-gray-900">
        {/* Slides */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
                index === currentSlide 
                  ? 'translate-x-0 opacity-100'
                  : slideDirection === 'right'
                  ? 'translate-x-full opacity-0'
                  : '-translate-x-full opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover brightness-75 transition-transform duration-700 hover:scale-105"
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-4xl px-8 text-center transform transition-all duration-500 ease-out">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 opacity-90">
                    {image.text}
                  </h1>
                  <p className="text-xl text-gray-200 mb-8">
                    {image.subtext}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                      className="group px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold 
                        hover:bg-yellow-300 transform hover:-translate-y-1 transition-all duration-300
                        flex items-center justify-center gap-2"
                      onClick={handleKnowMoreClick}  // Fixed navigation
                    >
                      Know More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      className="group px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold 
                        hover:bg-blue-500 transform hover:-translate-y-1 transition-all duration-300
                        flex items-center justify-center gap-2"
                      onClick={handleScheduleCallClick}
                    >
                      Schedule Call
                      <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white
            hover:bg-white/30 backdrop-blur-sm transform hover:-translate-x-1 transition-all duration-300"
          onClick={handlePrevSlide}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white
            hover:bg-white/30 backdrop-blur-sm transform hover:translate-x-1 transition-all duration-300"
          onClick={handleNextSlide}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`group relative h-2 transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-yellow-400' : 'w-2 bg-white/50'
              } rounded-full hover:bg-white`}
            >
              <span className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/90 text-gray-800 
                rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300
                whitespace-nowrap`}
              >
                Slide {index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Other Sections */}
      <section className="my-10 px-5 text-center">
        <AboutUs />
      </section>

      <section className="my-10 px-5 text-center">
        <Leadership />
      </section>

      <section className="my-10 px-5 text-center">
        <Services />
      </section>

      <section className="my-10 px-5 text-center">
        <OurClient />
      </section>
    </div>
  );
};

export default Body;
