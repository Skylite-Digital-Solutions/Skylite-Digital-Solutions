import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../styles/Servicesstyles/DigitalSEO.css'

const DigitalSEO = () => {
    // Define the handleGetInTouch function
    const navigate = useNavigate();

      const handleGetInTouch = () => {
        navigate('/contact-us'); // Adjust the path to match your route for the Contact Us page
      };
      
    
  return(<div className="DigitalSEO" style={{color: "black"}}>
        <h2>Digital Marketing and SEO</h2>
        <p>Drive traffic, engage users, and grow your online presence with our Digital Marketing and SEO services. We use data-driven strategies to ensure you reach your target audience effectively.</p>
        
        <h3>Technologies Used:</h3>
        <ul>
            <h1>SEO Tools</h1>
            <li><strong>SEO Tools</strong>: Google Analytics, Moz, SEMrush</li>
            <li><strong>SEO Tools</strong>: Advertising: Google Ads, Facebook Ads Manager, LinkedIn Campaign Manager</li>
            <li><strong>SEO Tools</strong>: Email Marketing: Mailchimp, HubSpot, ActiveCampaign</li>
        </ul>
    
        <h4>Our Services:</h4>
        <ul>
          <li>Custom Website Design</li>
          <li>E-commerce Development</li>
          <li>Content Management Systems (CMS): WordPress, Joomla, and custom CMS solutions</li>
        </ul>

      {/* Button container for centering */}
      <div className="button-container">
        <button onClick={handleGetInTouch} className="get-in-touch-button">
          Get in Touch
        </button>
      </div>

      </div>
  )
}

export default DigitalSEO
