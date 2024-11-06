import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import SoftwareDev from './components/Allservices/SoftwareDev';
import QualityAssurance from './components/Allservices/QualityAssurance';
import DigitalSEO from './components/Allservices/DigitalSEO';
import AllCategories from './components/Blogscategory/AllCategories';
import Services from './components/Allservices/Services';
import Allservices from './components/Allservices/Services';
import Ourservices from './Knowmore/Ourservices';
import Quality from './Knowmore/Quality';
import Success from './Knowmore/Success';


function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <Routes>

          {/* {Footer Routes} */}
          <Route>
            <Route path="/" element={<Body />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="blogs" element={<AllCategories />} />
            <Route path="/services" element={<Services />} />
          </Route>

          {/* { Body Routes} */}
          <Route>
            <Route path="our-services" element={<Ourservices />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/success" element={<Success />} />
          </Route>

          {/* Services Routes */}
          <Route path="services">
            <Route path="all-services" element={<Services />} />
            <Route path="web-development" element={<SoftwareDev />} />
            <Route path="quality-assurance" element={<QualityAssurance />} />
            <Route path="digital-seo" element={<DigitalSEO />} />
            <Route path='all-categories' element={<AllCategories />} />
          </Route>

          {/* Blog Routes */}
          <Route path="blogs">
            <Route path="all-categories" element={<AllCategories />} />
            {/* Uncomment these as you add more blog components */}
            {/* <Route path="community" element={<Community />} />
            <Route path="inspiration" element={<Inspiration />} />
            <Route path="interview" element={<Interview />} />
            <Route path="process" element={<Process />} />
            <Route path="technology" element={<Technology />} /> */}
          </Route>
        </Routes>
      </nav>
      <Footer />
    </div>
  );
}

export default App;
