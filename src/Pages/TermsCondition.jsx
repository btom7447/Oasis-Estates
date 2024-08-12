import React from "react";
import BreadCrumb from "../Components/BreadCrumb";

const TermsCondition = () => {
    const handleNavClick = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="terms-condition">
            <BreadCrumb name="Terms & Condition" />
            <div className="terms-condition-container">
                <div className="terms-condition-nav">
                    <ol>
                        <li><button onClick={() => handleNavClick('introduction')}>Introduction</button></li>
                        <li><button onClick={() => handleNavClick('websiteUsage')}>Website Usage</button></li>
                        <li><button onClick={() => handleNavClick('propertyListings')}>Property Listings</button></li>
                        <li><button onClick={() => handleNavClick('userAccounts')}>User Accounts</button></li>
                        <li><button onClick={() => handleNavClick('paymentFees')}>Payments and Fees</button></li>
                        <li><button onClick={() => handleNavClick('disclaimerLiability')}>Disclaimer and Liability</button></li>
                        <li><button onClick={() => handleNavClick('governingLaw')}>Governing Law and Jurisdiction</button></li>
                        <li><button onClick={() => handleNavClick('changesTermsCondition')}>Changes to Terms and Conditions</button></li>
                        <li><button onClick={() => handleNavClick('contactUs')}>Contact Us</button></li>
                    </ol>
                </div>
                <div className="terms-condition-display">
                    <section id="introduction">
                        <h6>Introduction</h6>
                        <p>Welcome to Oasis Estates, a leading real estate platform connecting buyers, sellers, and renters. These Terms and Conditions ("Terms") govern your use of our website, services, and property listings. By accessing or using our platform, you agree to be bound by these Terms, which may be updated from time to time. Please read these Terms carefully, as they contain important information about your rights and obligations.
                        </p>
                    </section>
                    <section id="websiteUsage">
                        <h6>Website Usage</h6>
                        <ol>
                            <li>You must use our website for lawful purposes only, and in compliance with all applicable laws and regulations</li>
                            <li>You may not use our website to harass, abuse or harm others, including posting or transmitting unauthorized or unsolicited content.</li>
                            <li>You may not use our website to impersonate or misrepresent your identity or affiliation with any person or entity</li>
                            <li>You agree to use our website in a manner that does not damage, disable, overburden or impair our servers or networks.</li>
                        </ol>
                    </section>
                    <section id="propertyListings">
                        <h6>Property Listings</h6>
                        <ol>
                            <li>Property listings are provided for informational purposes only, and may not be entirely accurate or up-to-date.</li>
                            <li>Oasis Estates does not guarantee the accuracy or completeness of property listings, and disclaims any liability for errors or omissions.</li>
                            <li>You agree to verify property information through independent means, including contacting the listing agent or conducting your own research.</li>
                        </ol>
                    </section>
                    <section id="userAccounts">
                        <h6>User Accounts</h6>
                        <ol>
                            <li>You must create an account to access certain features including saving properties and receiving notifications.</li>
                            <li>You are responsible for maintaining the confidentiality of your account, including your username and password.</li>
                            <li>You agree to provide accurate and up-to-date information, including your name, email address, and phone number.</li>
                        </ol>
                    </section>
                    <section id="paymentFees">
                        <h6>Payments and Fees</h6>
                        <ol>
                            <li>Payment terms and fees are specified on our website, including any applicable taxes or charges. </li>
                            <li>You agree to pay all applicable fees and charges using a valid payment method</li>
                            <li>Refunds are subject to our refund policy, which may vary depending on the circumstances.</li>
                        </ol>
                    </section>
                    <section id="disclaimerLiability">
                        <h6>Disclaimer and Liability</h6>
                        <ol>
                            <li>Oasis Estates disclaims all warranties and representations, express or implied including any warranties of merchantability or fitness for a particular purpose.</li>
                            <li>Oasis Estates is not liable for any damages or losses arising from your use of our platform, including any indirect, consequential, or punitive damages.</li>
                            <li>You agree to indemnify and hold harmless Oasis Estates, its officers, directors, employees, and agents, from any claims or demands.</li>
                        </ol>
                    </section>
                    <section id="governingLaw">
                        <h6>Governing Law and Jurisdiction</h6>
                        <ol>
                            <li>These Terms are governed by the laws of Nigeria, without regard to its conflict of laws principles.
                            </li>
                            <li>Any disputes arising from these Terms will be resolved through [arbitration/litigation] in [State/Country].
                            </li>
                            <li>You agree to submit to the jurisdiction of the courts in [State/Country], and waive any objections to venue or jurisdiction.</li>
                        </ol>
                    </section>
                    <section id="changesTermsCondition">
                        <h6>Changes to Terms and Condition</h6>
                        <ol>
                            <li>We reserve the right to modify these Terms at any time, without notice or liability.</li>
                            <li>Changes will be effective upon posting on our website, and your continued use of our platform constitutes acceptance of the updated Terms.</li>
                            <li>You agree to review these Terms regularly, to ensure you are aware of any changes.</li>
                        </ol>
                    </section>
                    <section id="contactUs">
                        <h6>Contact Us</h6>
                        <p>If you have questions or concerns about these Terms, please contact us at mailto:support@oasisestates.com or [phone number]. We are committed to resolving any issues promptly and fairly.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsCondition;