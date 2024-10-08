import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BreadCrumb from "../Components/BreadCrumb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Default credentials
        const defaultUsername = 'admin@gmail.com';
        const defaultPassword = '123';

        if (email === defaultUsername && password === defaultPassword) {
            // Set authenticated flag in localStorage
            localStorage.setItem('authenticated', 'true');
            toast.success("Login successful");
            // Redirect to admin dashboard
            navigate('/user-admin/dashboard');
        } else {
            toast.error("Invalid credentials");
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="web-page">
            <BreadCrumb name="Login" />
            <div className="login-section">
                <form onSubmit={handleSubmit} className="login-form">
                    <h1>User Login</h1>
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
                    <button type="submit" className="button">Login</button>
                    <div className="login-links">
                        <Link to="/forgot-password">Forgot Password?</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;