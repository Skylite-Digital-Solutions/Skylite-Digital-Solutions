import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
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
import Chatbot from './components/others/Chatboat';
import CreateBlog from './components/BlogCategories/CreateBlog';
import BlogDetail from './components/BlogCategories/BlogDetail';
import CategoryPage from './components/BlogCategories/CategoryPage';
import BlogList from './components/BlogCategories/BlogList';
import Contacts from './components/Contacts';
import CyberSecurity from './components/CyberSecurity';
import ItConsultancy from './components/ItConsultancy';
import Partnership from './components/subcomponents/Partnership';
import ApplyPartnership from './components/subcomponents/ApplyPartnership';
import LoginPage from './components/others/LoginPage';

function App() {
  const handleLoginSuccess = (user) => {
    console.log('User logged in:', user);
  };

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4">
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
          <Route path="web-development" element={<SoftwareDev />} />
          <Route path="quality-assurance" element={<QualityAssurance />} />
          <Route path="digital-seo" element={<DigitalSEO />} />
          <Route path="cyber-security" element={<CyberSecurity />} />
          <Route path="it-consulting" element={<ItConsultancy />} />

          {/* Know More Routes */}
          <Route path="our-services" element={<Ourservices />} />
          <Route path="quality" element={<Quality />} />
          <Route path="success" element={<Success />} />
          <Route path='chatbot' element={<Chatbot />} />

          {/* Blog Routes */}
          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="blogs" element={<BlogList />} />
          <Route path="blogs/:blogId" element={<BlogDetail />} />
          <Route path="/category/:category" element={<CategoryPage />} />

          {/* Partnership Routes */}
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/apply-partnership" element={<ApplyPartnership />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
