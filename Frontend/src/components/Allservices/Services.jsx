import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../styles/ServicesStyles/services.css'; // Ensure the CSS file name matches the component name
import '../../styles/color.css';

const Services = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <div className="services">
            <h1>Empowering Your Vision with Our Services</h1>
            <p>Explore our range of services designed to help your business succeed in the digital world. Our expert team is dedicated to providing high-quality solutions tailored to your needs.</p>
            <div className="service-cards">
                <div className="service-card">
                    <h2>Web Development</h2>
                    <p>We create responsive and user-friendly websites that drive engagement and growth. Our team uses the latest technologies to deliver high-quality web solutions.</p>
                    <button onClick={() => navigate('/services/web-development')}>Explore</button>
                </div>
                <div className="service-card">
                    <h2>Quality Assurance</h2>
                    <p>Our QA services ensure that your products are bug-free and meet the highest quality standards. We provide comprehensive testing solutions tailored to your needs.</p>
                    <button onClick={() => navigate('services/quality-assurance')}>Explore</button>
                </div>
                <div className="service-card">
                    <h2>Digital Marketing & SEO</h2>
                    <p>Our digital marketing and SEO services are designed to increase your online visibility and drive traffic to your website. Let us help you reach your target audience effectively.</p>
                    <button onClick={() => navigate('/services/digital-seo')}>Explore</button>
                </div>
                <div className="service-card">
                    <h2>Blogs</h2>
                    <p>Explore our insights and expertise through our blog. From tech trends to practical tips, we share knowledge to help you stay informed and make strategic technology decisions.</p>
                    <button onClick={() => navigate('/blogs/all-categories')}>Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Services;
