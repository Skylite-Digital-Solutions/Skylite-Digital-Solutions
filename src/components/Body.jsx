import React, { useState, useEffect } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Calendar } from 'lucide-react';
import AboutUs from './AboutUs';
import Services from './Services';
import Leadership from './Leadership';
import OurClient from './OurClients';

  // Add this at the top of your component
  const slides = [
    {
      title: "Why H-Tech",
      tag: "Welcome",
      text: "Transforming Businesses with Innovative Solutions",
      subtext: "We provide cutting-edge services tailored to meet your unique business needs and drive growth.",
      gradient: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
      decorative: "default",
      route: '/success'
    },
    {
      title: "Quality Assurance Guaranteed",
      tag: "Quality First",
      text: "Quality Assurance Guaranteed",
      subtext: "We ensure the highest quality standards in every project we undertake, delivering exceptional results that exceed expectations.",
      gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)",
      decorative: "default",
      route: '/quality'
    },
    {
      title: "Our Services",
      tag: "Services",
      text: "Comprehensive Services for Modern Businesses",
      subtext: "From strategy to execution, we offer end-to-end solutions designed to help your business thrive in today's competitive landscape.",
      gradient: "linear-gradient(135deg, #0EA5E9 0%, #3B82F6 50%, #1E40AF 100%)",
      decorative: "default",
      route: '/services'
    },
    {
      title: "Cyber Security",
      tag: "Security First",
      text: "Enterprise-Grade Cyber Security Solutions",
      subtext: "Protect your business with our advanced threat detection, prevention, and response capabilities tailored to your industry.",
      gradient: "linear-gradient(135deg, #18181B 0%, #3B0764 50%, #581C87 100%)",
      decorative: "cyber",
      route: '/cyber-security'
    },
    {
      title: "Digital Marketing & SEO",
      tag: "Growth & Visibility",
      text: "Strategic Digital Marketing & SEO",
      subtext: "Drive traffic, increase conversions, and establish your online presence with data-driven marketing strategies and SEO optimization.",
      gradient: "linear-gradient(135deg, #F97316 0%, #EA580C 50%, #7C2D12 100%)",
      decorative: "marketing",
      route: '/digital-seo'
    }
  ];

const Body = () => {

  // Add these functions for slider functionality
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');
  const totalSlides = slides.length;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  // const handleScheduleCallClick = () => {
  //   navigate('/contact-us');
  // };


const handleNextSlide = () => {
  setSlideDirection('right');
  setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
};

const handlePrevSlide = () => {
  setSlideDirection('left');
  setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
};

const goToSlide = (index) => {
  setSlideDirection(index > currentSlide ? 'right' : 'left');
  setCurrentSlide(index);
};

const handleKnowMoreClick = () => {
  const sectionIds = ["about-us", "services", "cyber-security", "digital-seo"];
  const elementId = sectionIds[currentSlide];

  if (elementId) {
    const sectionElement = document.getElementById(elementId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to the respective page if the section isn't in the DOM
      const routes = {
        "about-us": "/about-us",
        "services": "/services",
        "cyber-security": "/cyber-security",
        "digital-seo": "/digital-marketing-seo"
      };

      if (routes[elementId]) {
        navigate(routes[elementId]);
      }
    }
  }
};

// Implement your scheduling functionality here
const handleScheduleCallClick = () => {
  navigate("/contact-us");
  // console.log(`Schedule consultation for: ${slides[currentSlide].title}`);
};

// Add a useEffect for auto-sliding (optional)
useEffect(() => {
  const interval = setInterval(() => {
    handleNextSlide();
  }, 6000);
  
  return () => clearInterval(interval);
}, 
[currentSlide]);



  return (
    <div className="min-h-screen relative bg-gray-50 flex items-center justify-center overflow-hidden">
      <div className="bg-gray-50 font-sans text-gray-800 overflow-x-hidden">
        {/* Hero Slider Section */}
        <div className="relative w-full h-[90vh] overflow-hidden bg-gray-900">
          {/* Slides */}
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'translate-x-0 opacity-100'
                    : slideDirection === 'right'
                    ? 'translate-x-full opacity-0'
                    : '-translate-x-full opacity-0'
                }`}
                style={{
                  background: slide.gradient
                }}
              >
                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute top-16 -left-16 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                  {slide.decorative === 'cyber' && (
                    <>
                      <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <div className="grid grid-cols-8 h-full">
                          {Array(32).fill().map((_, i) => (
                            <div key={i} className="border-r border-t border-white/5"></div>
                          ))}
                        </div>
                      </div>
                      <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-white/20 rounded-lg rotate-12"></div>
                      <div className="absolute top-20 right-20 w-16 h-16 border border-white/10 rounded-full"></div>
                    </>
                  )}
                  {slide.decorative === 'marketing' && (
                    <>
                      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-white/10"></div>
                      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full border border-white/10"></div>
                      <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-white/5"></div>
                      <svg className="absolute bottom-10 left-10 w-32 h-32 text-white/10" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
                        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" />
                        <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" />
                      </svg>
                    </>
                  )}
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="max-w-4xl px-8 text-center transform transition-all duration-500 ease-out">
                    <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white mb-4">
                      {slide.tag}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                      {slide.text}
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                      {slide.subtext}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <button
                        className="group px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold 
                          hover:bg-opacity-90 transform hover:-translate-y-1 transition-all duration-300
                          flex items-center justify-center gap-2 shadow-lg"
                        onClick={handleKnowMoreClick}
                      >
                        Explore {slide.title}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button
                        className="group px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold 
                          hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300
                          flex items-center justify-center gap-2 backdrop-blur-sm"
                        onClick={handleScheduleCallClick}
                      >
                        Schedule Consultation
                        <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
            <button
              className="pointer-events-auto p-3 rounded-full bg-black/20 text-white
                hover:bg-black/40 backdrop-blur-md transform hover:-translate-x-1 transition-all duration-300
                border border-white/10 shadow-lg"
              onClick={handlePrevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="pointer-events-auto p-3 rounded-full bg-black/20 text-white
                hover:bg-black/40 backdrop-blur-md transform hover:translate-x-1 transition-all duration-300
                border border-white/10 shadow-lg"
              onClick={handleNextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
  
          {/* Enhanced Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 backdrop-blur-sm bg-black/20 px-4 py-3 rounded-full">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group flex flex-col items-center"
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              >
                <div className={`relative h-2 transition-all duration-300 ${
                  index === currentSlide ? 'w-10 bg-white' : 'w-2 bg-white/40'
                } rounded-full hover:bg-white`}></div>
                
                <span className={`absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/70 text-white 
                  rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  whitespace-nowrap backdrop-blur-sm border border-white/10`}
                >
                  {slide.title}
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
    </div>
  );
}
  export default Body;