import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const MissionStatement = () => {
    return (
        <div className="mission-section">
            <div className="mission-caption">
                <h1>Our mission is to redefine Nigeria's real estate in the customer's favor</h1>
            </div>
            <div className="mission-text">
                <h6>Our Purpose</h6>
                <p>At Oasis Estates, we believe that everyone deserves a place to call home. That's why we're committed to making the process of buying, selling or renting a property in Nigeria more accessible, affordabble and stress free. We're dedicated to putting our customers at the heart of everything we do.</p>
                <h6>Our Promise</h6>
                <p>We promise to deliver exceptional service, expert knowledge, and innovative solutions that meet the unique needs of our customers. By doing so, we aim to redefine the Nigerian real estate industry and make it work in favor of our customers. With Oasis Estates, you can trust that you're in good hands.</p>
            </div>
            <div className="mission-list">
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCheck} className="feature-icon" />
                        No Payment Until Listing Bookings
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheck} className="feature-icon" />
                        24/7 Dedicated Support
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheck} className="feature-icon" />
                        Free Property Analysis
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheck} className="feature-icon" />
                        Exclusive Marketing Plans
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheck} className="feature-icon" />
                        Flexible Payment Plans
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheck} className="feature-icon" />
                        Personalized Property Management
                    </li>
              </ul>
            </div>
        </div>
    )
};

export default MissionStatement;