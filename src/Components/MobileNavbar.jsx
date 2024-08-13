import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                    <li>
                        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                    </li>
                    <li>
                        <Link to="/listings" onClick={() => setIsOpen(false)}>Listings</Link>
                    </li>
                    <li>
                        <Link to="/realtors" onClick={() => setIsOpen(false)}>Realtors</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    </li>
                    <li>
                        <Link to="/login" onClick={() => setIsOpen(false)}>
                            <FontAwesomeIcon icon={faUserAlt} /> Sign In/Register
                        </Link>
                    </li>
                    <li>
                        <Link to="/create-listing" onClick={() => setIsOpen(false)}>
                            <button>Create Listing</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MobileNavbar;
