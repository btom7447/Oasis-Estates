import React from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className="header">
            <div className="top-header">
                <FontAwesomeIcon icon={faPhone} />
                <p>Need Support? +234 567 8910</p>
            </div>
            <Navbar />
            <MobileNavbar />
        </div>
    )
};

export default Header;