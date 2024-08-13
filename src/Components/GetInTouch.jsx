import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const GetInTouch = () => {
    return (
        <div className="get-in-touch">
            <div className="get-in-touch-caption">
                <h1>Get In Touch</h1>
                <h6>Have a question or need assistance?
                    We're here to help. Let's connect! React out to us for all your real estate needs.
                </h6>
            </div>
            <div className="contact-information">
                <h6>Office Address: </h6>
                <p>No 12 Adeyi Estate, Ibadan, Nigeria</p>
                <h6>Help Line: </h6>
                <p>+234 567 8910</p>
                <h6>Email: </h6>
                <p>helpline@oasis.estates</p>
            </div>
            <div className="contact-socials">
                <a href="https://oasis-estates.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://oasis-estates.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://https:oasis-estates.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://oasis-estates.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </div>
    )
};

export default GetInTouch;