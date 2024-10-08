import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BreadCrumb from "../Components/BreadCrumb";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    // eslint-disable-next-line
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const recaptchaSiteKey = "YOUR_RECAPTCHA_SITE_KEY"; // Replace with your actual site key

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        toast.success("Password reset link sent to your email.");
    };

    return (
        <div className="web-page">
            <BreadCrumb name="Forgot Password" />
            <div className="login-section">
                <form onSubmit={handleSubmit} className="login-form">
                    <h1>Forgot Password</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <ReCAPTCHA
                        sitekey={recaptchaSiteKey}
                        onChange={handleRecaptchaChange}
                    />
                    <button type="submit" className="button">Reset Password</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;