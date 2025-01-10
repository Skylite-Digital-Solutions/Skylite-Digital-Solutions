import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from '../src/components/Body';
import Header from '../src/components/Header';
import ContactUs from '../src/components/ContactUs';
import AboutUs from '../src/components/AboutUs';
import Footer from '../src/components/Footer';
import SoftwareDev from './components/SoftwareDev';
import QualityAssurance from './components/QualityAssurance';
import DigitalSEO from './components/DigitalSEO';
import Blogs from './components/Blogs';
import Services from '../src/components/Services';
import Ourservices from '../src/components/Ourservices';
import Quality from '../src/components/Quality'
import Success from '../src/components/Success';
import Chatbot from './components/Chatboat'; // Import the Chatbot component

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Body />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="blogs" element={<Blogs />} />
        
        {/* Services Routes */}
        <Route path="services" element={<Services />} />
        <Route path="services/all-services" element={<Services />} />
        <Route path="services/web-development" element={<SoftwareDev />} />
        <Route path="services/quality-assurance" element={<QualityAssurance />} />
        <Route path="services/digital-seo" element={<DigitalSEO />} />

        {/* Know More Routes */}
        <Route path="our-services" element={<Ourservices />} />
        <Route path="quality" element={<Quality />} />
        <Route path="success" element={<Success />} />

        {/* Blog Routes */}
        <Route path="blogs/all-categories" element={<Blogs />} />
      </Routes>
      <Footer />
      {/* Uncomment to add the Chatbot component */}
      <Chatbot />
    </div>
  );
}

export default App;
