import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import SoftwareDev from './components/SoftwareDev';
import QualityAssurance from './components/QualityAssurance';
import DigitalSEO from './components/DigitalSEO';
import Blogs from './components/Blogs';
import Services from './components/Services';
import Ourservices from './components/Ourservices';
import Quality from './components/Quality';
import Success from './components/Success';
import Chatbot from './components/Chatboat';
import CreateBlog from './components/BlogCategories/CreateBlog';
import LoginPage from './components/LoginPage';
import BlogDetail from './components/BlogCategories/BlogDetail';
import CategoryPage from './components/BlogCategories/CategoryPage';
import BlogList from './components/BlogCategories/BlogList';
import Contacts from './components/Contacts';

function App() {
  // Define the handleLoginSuccess function
  const handleLoginSuccess = (user) => {
    console.log('User logged in:', user);
    // Perform any additional actions upon successful login
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Body />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<Contacts />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />

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
        <Route path="create-blog" element={<CreateBlog />} />
        <Route path="blogs" element={<BlogList />} />
        <Route path="blogs/:blogId" element={<BlogDetail />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
      <Footer />
      {/* <Chatbot /> */}
    </div>
  );
}

export default App;
