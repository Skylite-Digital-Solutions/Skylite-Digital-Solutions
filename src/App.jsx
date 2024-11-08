import { Route, Routes } from 'react-router-dom';
import './App.css'
import Body from './components/Body';
import Header from './components/Header'
import ContactUs from './components/contactus';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  return(<>
 
  <div className='App'>
    <Header />
  <nav>
    <Routes>
      <Route path='/' >
        <Route index element={<Body />}/>
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="about-us" element={<AboutUs />} />
      </Route>
    </Routes>
  </nav>
  <Footer />
  </div>
  </>)
}

export default App;
