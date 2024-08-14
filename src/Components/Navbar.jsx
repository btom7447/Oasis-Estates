import { Link } from 'react-router-dom';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
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

    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <div className="nav-logo">
                <Link to="/">
                    <img src="https://unicoderbd.com/template/uniland/fullwidth/assets/images/logo/logo-white.png" alt="website logo" />
                </Link>
            </div>

            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/listings">Listings</Link>
                </li>
                <li>
                    <Link to="/realtors">Realtors</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/login">
                        <FontAwesomeIcon icon={faUserAlt} /> Sign In/Register
                    </Link>
                </li>
                <li>
                    <Link to="/user-admin/create-listing">
                        <button>Create Listing</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;