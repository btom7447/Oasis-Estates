import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChartLine, faDollar, faHouse, faMessage, faPlusSquare, faCreditCardAlt, faStar, faUserAlt, faUserGear, faEye, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

const AdminMobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Use useLocation to get the current pathname

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="mobile-navbar">
            <div className="navbar-header">
                <Link to="/" className="nav-logo">
                    <img src="https://unicoderbd.com/template/uniland/fullwidth/assets/images/logo/logo-white.png" alt="website logo" />
                </Link>
                <button onClick={handleToggle} className="navbar-toggler">
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </button>
            </div>
            <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <ul className="navbar-links">
                    <li className={location.pathname.includes('dashboard') ? 'active' : ''}>
                        <FontAwesomeIcon icon={faChartLine} />
                        <Link to="dashboard">Dashboard</Link>
                    </li>
                    <li className={location.pathname.includes('message') ? 'active' : ''}>
                        <FontAwesomeIcon icon={faMessage} />
                        <Link to="message">Message</Link>
                    </li>
                    <li className={location.pathname.includes('payments') ? 'active' : ''}>
                        <FontAwesomeIcon icon={faCreditCardAlt} />
                        <Link to="payments">Payments</Link>
                    </li>
                    <li className={location.pathname.includes('earnings') ? 'active' : ''}>
                        <FontAwesomeIcon icon={faDollar} />
                        <Link to="earnings">Earnings</Link>
                    </li>
                    <li className={location.pathname.includes('create-listing') ? 'active' : ''}>
                        <FontAwesomeIcon icon={faPlusSquare} />
                        <Link to="create-listing">Create Listing</Link>
                    </li>
                    <li className={location.pathname.includes('my-properties') ? 'active' : ''}>
                        <FontAwesomeIcon icon={faHouse} />
                        <Link to="my-properties">My Properties</Link>
                    </li>
                    <li className={location.pathname.includes('reviews') ? 'active' : ''}>
                        <FontAwesomeIcon icon={faStar} />
                        <Link to="reviews">Reviews</Link>
                    </li>
                    <li>Account Settings</li>
                    <li className={location.pathname.includes('personal-profile') ? 'active' : ''}>
                        <FontAwesomeIcon icon={faUserAlt} />
                        <Link to="personal-profile">Personal Profile</Link>
                    </li>
                    <li className={location.pathname.includes('profile-settings') ? 'active' : ''}>
                        <FontAwesomeIcon icon={faUserGear} />
                        <Link to="profile-settings">Profile Settings</Link>
                    </li>
                    <li className={location.pathname.includes('change-password') ? 'active' : ''}>
                        <FontAwesomeIcon icon={faEye} />
                        <Link to="change-password">Change Password</Link>
                    </li>
                    <li className={location.pathname.includes('logout') ? 'active' : ''}>
                        <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                        <Link to="logout">Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default AdminMobileNavbar;