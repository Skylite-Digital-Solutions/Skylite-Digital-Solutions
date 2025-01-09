import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../styles/Mainstyles/Success.css';
import '../../styles/color.css';

const Success = () => { // Correct component name to PascalCase
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/contact-us'); // Adjust the path to match your route for the Contact Us page
  };

  return (
    <div className="Background-container">
      <div className="success-container">
        <h1>Your Success is Our Priority</h1>
        <p>
          We bring expertise, dedication, and a client-centric focus to every project, empowering your business to thrive in a competitive digital landscape.
        </p>
        <div className="success-footer-container">
          <h2>Partner with us for a commitment to excellence.</h2>
          <p>
            Choose us as your IT partner and experience the peace of mind that comes with knowing your business is supported by a dedicated, 
            innovative, and dependable team. Let us help you achieve excellence and drive lasting success in the digital age.
          </p>
        </div>
        <button className="aboutus-button" onClick={handleLearnMoreClick}>
          Get In Touch
        </button>
      </div>

      <div className="Partner-container-main">
        <ul className="Partner-container">
          <h2>Why Partner with Us?</h2>
          <li>
            <strong>Tailored Solutions</strong>: We recognize that every business is unique. Our approach starts with understanding 
            your specific goals and challenges, allowing us to deliver customized solutions that align perfectly with your vision and business objectives.
          </li>
          <li>
            <strong>Comprehensive Expertise</strong>: Our team comprises experts in web development, software engineering, cloud 
            solutions, cybersecurity, and digital transformation. With years of industry experience, we ensure your project is handled by skilled professionals committed to your success.
          </li>
          <li>
            <strong>Scalable Services</strong>: As your business grows, your IT needs will evolve. We provide scalable solutions that adapt 
            to your changing requirements, ensuring you have the resources and support needed at every stage.
          </li>
          <li>
            <strong>Data Security and Compliance</strong>: Your data’s security is paramount. We implement rigorous security protocols and 
            maintain compliance with industry regulations, safeguarding your business from potential threats and ensuring peace of mind.
          </li>
          <li>
            <strong>Agile and Transparent Processes</strong>: We adopt an agile approach, allowing flexibility and transparency in every 
            project phase. You stay informed, involved, and can count on timely delivery without compromising quality.
          </li>
          <li>
            <strong>Proactive Innovation</strong>: As your strategic partner, we anticipate your future needs, exploring opportunities 
            for enhancement and proactively recommending improvements that keep your business at the forefront of your industry.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Success; // Correct export statement to match component name
