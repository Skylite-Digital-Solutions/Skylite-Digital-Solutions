import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Smartphone, Link, ShoppingCart, Shield, Zap, Users, Clock } from 'lucide-react';

const SoftwareDev = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Custom Development",
      description: "We create web solutions uniquely crafted to reflect your brand identity and meet your specific requirements. From user experience to backend functionality, every detail is designed to enhance your business."
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Responsive Design",
      description: "Our websites are optimized to provide a seamless experience across all device types, ensuring accessibility for all users. This approach improves user engagement and helps retain visitors across platforms."
    },
    {
      icon: <Link className="w-10 h-10" />,
      title: "API Integration",
      description: "We integrate third-party APIs to add essential features and boost your site's capabilities. This allows your website to interact seamlessly with external services, providing a more dynamic user experience."
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "E-commerce Solutions",
      description: "Our e-commerce platforms are built to deliver a secure and efficient shopping experience, supporting large transaction volumes with high performance. We design each aspect of the online store for intuitive navigation, simplifying the shopping process."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Security and Compliance",
      description: "We implement robust security protocols to safeguard your data and maintain user trust. Our solutions also adhere to industry standards and compliance regulations, ensuring full legal alignment."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Performance Optimization",
      description: "We build high-performance applications that load quickly and run smoothly, optimizing for speed and efficiency to provide the best possible user experience."
    }
  ];

  const technologies = [
    "React", "Angular", "Vue.js", "Node.js", "Express", "Python", "Django", "MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes"
  ];

  const handleGetInTouch = () => {
    navigate('/contact-us');
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-blue-50 opacity-50 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-blue-600 mb-6">
              Software Development
              <span className="block text-gray-800 text-lg font-normal mt-2">Turning Ideas into Powerful Solutions</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                At <span className="font-semibold text-blue-600">Skylite Digital Solutions</span>, we empower businesses with expert Web Development services designed to deliver impactful digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* What We Do Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Expertise in Development
            </h3>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We specialize in creating fast, responsive, and scalable websites and applications 
              that cater to your unique goals. Leveraging the latest technologies for frontend and backend, 
              we ensure a seamless, robust, and user-friendly interface across all devices.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-blue-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gray-50 rounded-2xl p-10 mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Technology Stack
            </h3>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              We leverage cutting-edge technologies to build robust, scalable solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white text-blue-600 rounded-full shadow-sm border border-blue-100 hover:bg-blue-50 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Development Process
            </h3>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Discovery</h4>
              <p className="text-gray-600">Understanding your business goals and requirements</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Code className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Development</h4>
              <p className="text-gray-600">Building your solution with best practices</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Testing</h4>
              <p className="text-gray-600">Rigorous quality assurance and security testing</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Deployment</h4>
              <p className="text-gray-600">Launch and ongoing support</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-6">
            Ready to Build Your Next Digital Solution?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            With our extensive experience, dedication to quality, and cutting-edge technology stack, 
            we bring your digital vision to life. Let us help you create an online presence that drives 
            engagement, supports growth, and elevates your business.
          </p>
          <button
            onClick={handleGetInTouch}
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-200 shadow-lg"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDev;