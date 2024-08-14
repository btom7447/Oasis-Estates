import React from 'react';
import './Styles/index.css';
import './Styles/mobile.css';
import './Styles/loader.css';
import './Styles/admin.css';
import './Styles/adminMobile.css';
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
import RealtorsProfile from './Pages/RealtorsProfile';
import UserAdmin from './Pages/UserAdmin';
import AdminMessage from './Pages/AdminMessage';
import AdminDashboard from './Pages/AdminDashboard';
import AdminPayments from './Pages/AdminPayments';
import AdminEarnings from './Pages/AdminEarnings';
import AdminProperties from './Pages/AdminProperties';
import AdminCreateListing from './Pages/AdminCreateListing';
import AdminPropertyReview from './Pages/AdminPropertyReview';
import AdminPersonalProfile from './Pages/AdminPersonalProfile';
import AdminProfileSetting from './Pages/AdminProfileSetting';
import AdminChangePassword from './Pages/AdminChangePassword';
import Logoout from './Pages/Logout';

const App = () => {
  return (
    <PropertyProvider>
      <Router basename='/Oasis-Estates'>
        <ScrollToTop />
        <LoaderWrapper />
        <Routes>
          {/* Main Domain Routes */}
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          <Route path="/about" element={<><Header /><About /><Footer /></>} />
          <Route path="/listings" element={<><Header /><Listings /><Footer /></>} />
          <Route path="/property-details/:id" element={<><Header /><PropertyDetails /><Footer /></>} />
          <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />
          <Route path="/realtors" element={<><Header /><Realtors /><Footer /></>} />
          <Route path="/realtor/:name" element={<><Header /><RealtorsProfile /><Footer /></>} />
          <Route path="/login" element={<><Header /><Login /><Footer /></>} />
          <Route path="/register" element={<><Header /><Register /><Footer /></>} />
          <Route path="/forgot-password" element={<><Header /><ForgotPassword /><Footer /></>} />
          <Route path="/terms-condition" element={<><Header /><TermsCondition /><Footer /></>} />

          {/* Admin Domain Routes */}
          <Route path="/user-admin/*" element={<UserAdmin />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="message" element={<AdminMessage />} />
            <Route path="payments" element={<AdminPayments />} />
            <Route path="earnings" element={<AdminEarnings />} />
            <Route path="my-properties" element={<AdminProperties />} />
            <Route path="create-listing" element={<AdminCreateListing />} /> 
            <Route path="reviews" element={<AdminPropertyReview />} />
            <Route path="personal-profile" element={<AdminPersonalProfile />} />
            <Route path="profile-settings" element={<AdminProfileSetting />} />
            <Route path="change-password" element={<AdminChangePassword />} />
            <Route path="logout" element={<Logoout />} />
          </Route>
        </Routes>
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