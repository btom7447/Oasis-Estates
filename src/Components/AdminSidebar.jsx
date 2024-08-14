import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft, faChartLine, faCreditCardAlt, faDollar, faEye, faHouse, faMessage, faPlusSquare, faStar, faUserAlt, faUserGear } from '@fortawesome/free-solid-svg-icons';

const AdminSidebar = () => {
    const location = useLocation();

    return (
        <div className="admin-sidebar">
            <div className="logo">
                <Link to="/user-admin">
                    <img src="https://unicoderbd.com/template/uniland/fullwidth/assets/images/logo/logo-white.png" alt="website logo" />
                </Link>
            </div>
            <ul>
                <li>Overview</li>
                <li className={location.pathname.includes('dashboard') ? 'active' : ''}>
                    <FontAwesomeIcon icon={faChartLine} />
                    <Link to="dashboard">Dashboard</Link>
                </li>
                <li className={location.pathname.includes('message') ? 'active' : ''}>
                    <FontAwesomeIcon icon={faMessage} />
                    <Link to="message">Message</Link>
                </li>
                <li>Transactions</li>
                <li className={location.pathname.includes('payments') ? 'active' : ''}>
                    <FontAwesomeIcon icon={faCreditCardAlt} />
                    <Link to="payments">Payments</Link>
                </li>
                <li className={location.pathname.includes('earnings') ? 'active' : ''}>
                    <FontAwesomeIcon icon={faDollar} />
                    <Link to="earnings">Earnings</Link>
                </li>
                <li>Manage Listing</li>
                <li className={location.pathname.includes('my-properties') ? 'active' : ''}>
                    <FontAwesomeIcon icon={faHouse} />
                    <Link to="my-properties">My Properties</Link>
                </li>
                <li className={location.pathname.includes('create-listing') ? 'active' : ''}>
                    <FontAwesomeIcon icon={faPlusSquare} />
                    <Link to="create-listing">Create Listing</Link>
                </li>
                <li className={location.pathname.includes('property-reviews') ? 'active' : ''}>
                    <FontAwesomeIcon icon={faStar} />
                    <Link to="reviews">Reviews</Link>
                </li>
                <li>Account Settings</li>
                <li className={location.pathname.includes('property-reviews') ? 'active' : ''}>
                    <FontAwesomeIcon icon={faUserAlt} />
                    <Link to="personal-profile">Personal Profile</Link>
                </li>
                <li className={location.pathname.includes('property-reviews') ? 'active' : ''}>
                    <FontAwesomeIcon icon={faUserGear} />
                    <Link to="profile-settings">Profile Settings</Link>
                </li>
                <li className={location.pathname.includes('property-reviews') ? 'active' : ''}>
                    <FontAwesomeIcon icon={faEye} />
                    <Link to="change-password">Change Password</Link>
                </li>
                <li className={location.pathname.includes('property-reviews') ? 'active' : ''}>
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                    <Link to="logout">Logout</Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;