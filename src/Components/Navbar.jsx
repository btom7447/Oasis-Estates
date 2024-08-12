import {  faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavigation = (url) => {
        window.location.href = url;
    };

    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <div className="nav-logo" onClick={() => handleNavigation('/')}>
                <img src="https://unicoderbd.com/template/uniland/fullwidth/assets/images/logo/logo-white.png" alt="website logo" />
            </div>

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
        </nav>
    );
};

export default Navbar;