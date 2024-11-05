import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ServicesStyles/SoftwareDev.css';

const SoftwareDev = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact-us'); // Adjust the path to match your route for the Contact Us page
  };

  return (
    <div className="SoftwareDev" style={{ color: "black" }}>
      <h2>Our Software Development Services</h2>
      <p>
        We provide comprehensive software development services tailored to meet your business needs. 
        Our experienced team specializes in building scalable and robust solutions.
      </p>
      
      <h3>Technologies Used:</h3>
      <ul>
        <li><strong>Frontend</strong>: React.js, Angular, Vue.js</li>
        <li><strong>Backend</strong>: Node.js, Express.js, Python, Ruby</li>
        <li><strong>Database</strong>: MySQL, PostgreSQL, MongoDB</li>
      </ul>
  
      <h4>Our Services Include:</h4>
      <ul>
        <li>Custom Software Development</li>
        <li>Mobile App Development</li>
        <li>API Development and Integration</li>
      </ul>

      {/* Add the button that uses the handler */}
      <button onClick={handleGetInTouch}>Get in Touch</button>
    </div>
  );
};

export default SoftwareDev;
