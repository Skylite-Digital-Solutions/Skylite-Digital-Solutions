import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './Maincomponents/Body';
import Header from './Maincomponents/Header';
import ContactUs from './Maincomponents/ContactUs';
import AboutUs from './Maincomponents/AboutUs';
import Footer from './Maincomponents/Footer';
import SoftwareDev from './components/Allservices/SoftwareDev';
import QualityAssurance from './components/Allservices/QualityAssurance';
import DigitalSEO from './components/Allservices/DigitalSEO';
import AllCategories from './components/Blogscategory/AllCategories';
import Services from './components/Allservices/Services';
import Ourservices from './Knowmore/Ourservices';
import Quality from './Knowmore/Quality';
import Success from './Knowmore/Success';
import Chatbot from './components/Chatboat/Chatboat'; // Import the Chatbot component
import BlogPage from './components/Blogfirebase/BlogPage';
import BlogPostForm from './components/Blogfirebase/BlogPostForm';
import SignInForm from './components/Blogfirebase/SignInForm';
import SignupForm from './components/Blogfirebase/SignupForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Body />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="blogs" element={<AllCategories />} />
        
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
        <Route path="blogs/all-categories" element={<AllCategories />} />
        
        {/* Blog Firebase Routes */}
        <Route path="blog-page" element={<BlogPage />} />
        <Route path="create-blog" element={<BlogPostForm />} />

        {/* Login Firebase Routes */}
        <Route path="blogfirebase/signin-container" element={<SignInForm />} />
        <Route path="blogfirebase/signup-container" element={<SignupForm />} />
      </Routes>
      <Footer />
      {/* Uncomment to add the Chatbot component */}
      {/* <Chatbot /> */}
    </div>
  );
}

export default App;
