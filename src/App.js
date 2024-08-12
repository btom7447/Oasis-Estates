import React from 'react';
import './Styles/index.css';
import './Styles/mobile.css';
import './Styles/loader.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Loader from './Components/Loader';
import usePageLoader from './Components/usePageLoader';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Listings from './Pages/Listings';
import Contact from './Pages/Contact';
import Realtors from './Pages/Realtors';
import { PropertyProvider } from './Components/PropertyContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropertyDetails from './Pages/PropertyDetails';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ForgotPassword from './Pages/ForgotPassword';
import TermsCondition from './Pages/TermsCondition';
import RealtorsDisplay from './Components/RealtorsDisplay';
import RealtorsProfile from './Pages/RealtorsProfile';

const App = () => {
  return (
    <PropertyProvider>
      <Router>
        <ScrollToTop />
        <LoaderWrapper />
        <Header />
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/listings" element={<Listings />} /> 
          <Route path="/property-details/:id" element={<PropertyDetails />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/realtors" element={<Realtors />} /> 
          <Route path="/realtors" element={<RealtorsDisplay />} />
          <Route path="/realtor/:name" element={<RealtorsProfile />} />          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer position='top-right' autoClose={3000} />
    </PropertyProvider>
  );
}

const LoaderWrapper = () => {
  const loading = usePageLoader();
  return loading ? <Loader /> : null;
};

export default App;