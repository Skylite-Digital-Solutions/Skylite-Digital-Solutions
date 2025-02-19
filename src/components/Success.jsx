import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Success = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/contact-us'); // Adjust the path to match your route for the Contact Us page
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">
          Success, Your Goals are Our Priority
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          We bring expertise, dedication, and a client-centric focus to every project, empowering your business to thrive in a competitive digital landscape.
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Partner with us for a commitment to excellence</h2>
          <p className="text-gray-600">
            Choose us as your IT partner and experience the peace of mind that comes with knowing your business is supported by a dedicated, innovative, and dependable team. Let us help you achieve excellence and drive lasting success in the digital age.
          </p>
        </div>
        <button
          onClick={handleLearnMoreClick}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Get In Touch
        </button>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">How We Drive Your Success</h2>
        <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">Why Partner with Us?</h3>

        <div className="max-w-7xl mx-auto px-4">
          <ul className="space-y-6 text-lg text-gray-700">
            <li className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
                <span>1</span>
              </div>
              <div>
                <strong className="font-semibold text-gray-800">Tailored Solutions</strong>: We recognize that every business is unique. Our approach starts with understanding your specific goals and challenges, allowing us to deliver customized solutions that align perfectly with your vision and business objectives.
              </div>
            </li>

            <li className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
                <span>2</span>
              </div>
              <div>
                <strong className="font-semibold text-gray-800">Comprehensive Expertise</strong>: Our team comprises experts in web development, software engineering, cloud solutions, cybersecurity, and digital transformation. With years of industry experience, we ensure your project is handled by skilled professionals committed to your success.
              </div>
            </li>

            <li className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
                <span>3</span>
              </div>
              <div>
                <strong className="font-semibold text-gray-800">Scalable Services</strong>: As your business grows, your IT needs will evolve. We provide scalable solutions that adapt to your changing requirements, ensuring you have the resources and support needed at every stage.
              </div>
            </li>

            <li className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
                <span>4</span>
              </div>
              <div>
                <strong className="font-semibold text-gray-800">Data Security and Compliance</strong>: Your data’s security is paramount. We implement rigorous security protocols and maintain compliance with industry regulations, safeguarding your business from potential threats and ensuring peace of mind.
              </div>
            </li>

            <li className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
                <span>5</span>
              </div>
              <div>
                <strong className="font-semibold text-gray-800">Agile and Transparent Processes</strong>: We adopt an agile approach, allowing flexibility and transparency in every project phase. You stay informed, involved, and can count on timely delivery without compromising quality.
              </div>
            </li>

            <li className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
                <span>6</span>
              </div>
              <div>
                <strong className="font-semibold text-gray-800">Proactive Innovation</strong>: As your strategic partner, we anticipate your future needs, exploring opportunities for enhancement and proactively recommending improvements that keep your business at the forefront of your industry.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Success;
