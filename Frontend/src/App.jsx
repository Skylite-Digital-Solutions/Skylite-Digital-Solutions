import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from '../src/components/Maincomponents/Body';
import Header from '../src/components/Maincomponents/Header';
import ContactUs from '../src/components/Maincomponents/ContactUs';
import AboutUs from '../src/components/Maincomponents/AboutUs';
import Footer from '../src/components/Maincomponents/Footer';
import SoftwareDev from './components/Allservices/SoftwareDev';
import QualityAssurance from './components/Allservices/QualityAssurance';
import DigitalSEO from './components/Allservices/DigitalSEO';
import Blogs from './components/Maincomponents/Blogs';
import Services from '../src/components/Maincomponents/Services';
import Ourservices from '../src/components/Maincomponents/Ourservices';
import Quality from '../src/components/Maincomponents/Quality'
import Success from '../src/components/Maincomponents/Success';
import Chatbot from './components/Chatboat/Chatboat'; // Import the Chatbot component

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
      {/* <Chatbot /> */}
    </div>
  );
}

export default App;
