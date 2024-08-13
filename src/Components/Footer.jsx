import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <h3>Are you looking to sell your house or property? We can help!</h3>
                <button type="button">List your property</button>
            </div>
            <div className="footer-bottom">
                <div className="footer-column">
                    <div className="footer-logo">
                        <img src="https://unicoderbd.com/template/uniland/fullwidth/assets/images/logo/logo-full-white.png" alt="" />
                    </div>
                    <h6>Dedicated to delivering unparalleled expertise and personalized solutions for all your real estate needs.</h6>
                    <div className="social-links">

                    </div>
                </div>
                <div className="footer-column">
                    <h4>Contact Info</h4>
                    <h6>No 12 Adeyi Estate, Ibadan, Nigeria</h6>
                    <h6>+234 567 8910</h6>
                    <h6>helpline@oasis.estates</h6>
                </div>
                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li>Create Listing</li>
                        <li><Link to="/listings">Listings</Link></li>
                        <li><Link to="/realtors">Realtors</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul> 
                </div>
                <div className="footer-column">
                    <h4>Appointment</h4>
                    <h6>Disucss your Real Estate Needs with Our Experts - Book an Appointment Today</h6>
                    <Link to="/realtors">
                        <button type="button">Book Appointment</button>
                    </Link>
                </div>
            </div>
        </footer>
    )
};

export default Footer;