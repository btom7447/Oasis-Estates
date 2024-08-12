import React, { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumb";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

       

        toast.success("Registration successful");
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="web-page">
            <BreadCrumb name="Register" />
            <div className="login-section">
                <form onSubmit={handleSubmit} className="login-form">
                    <h1>User Register</h1>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <div className="password-wrapper">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="password-toggle"
                            onClick={togglePasswordVisibility}
                        >
                            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                        </button>
                    </div>
                    {!passwordVisible && (
                        <>
                            <label htmlFor="repeatPassword">Repeat Password:</label>
                            <input
                                type="password"
                                id="repeatPassword"
                                name="repeatPassword"
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                                required
                            />
                        </>
                    )}
                    <div className="terms-checkbox">
                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                            required
                        />
                        <p> I accept the terms and conditions</p>
                    </div>
                    <button type="submit" className="button">Register</button>
                    <div className="login-links">
                        <Link to="/terms-condition">View Terms and Condition</Link>
                        <Link to="/login">Already have an account? Login</Link>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;