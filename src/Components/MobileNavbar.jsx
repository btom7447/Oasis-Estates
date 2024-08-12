import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUserAlt } from '@fortawesome/free-solid-svg-icons';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleNavigation = (url) => {
        window.location.href = url;
    };

    return (
        <nav className="mobile-navbar">
            <div className="navbar-header">
                <div className="nav-logo" onClick={() => handleNavigation('/')}>
                    <img src="https://unicoderbd.com/template/uniland/fullwidth/assets/images/logo/logo-white.png" alt="website logo" />
                </div>
                <button onClick={handleToggle} className="navbar-toggler">
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </button>
            </div>
            <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <ul className="navbar-links">
                    <li>
                        <span onClick={() => handleNavigation('/')}>Home</span>
                    </li>
                    <li>
                        <span onClick={() => handleNavigation('/about')}>About</span>
                    </li>
                    <li>
                        <span onClick={() => handleNavigation('/listings')}>Listings</span>
                    </li>
                    <li>
                        <span onClick={() => handleNavigation('/realtors')}>Realtors</span>
                    </li>
                    <li>
                        <span onClick={() => handleNavigation('/contact')}>Contact</span>
                    </li>
                    <li>
                        <span onClick={() => handleNavigation('/login')}>
                            <FontAwesomeIcon icon={faUserAlt} /> Sign In/Register
                        </span>
                    </li>
                    <li>
                        <button onClick={() => handleNavigation('/create-listing')}>Create Listing</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MobileNavbar;