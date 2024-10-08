import React from "react";
import { Link } from "react-router-dom";

const ChangePassword = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would send the updated data to the backend or update the JSON file
        alert("Password updated successfully!");
    };

    return (
        <div className="profile-settings">
            <form className="profile-form" onSubmit={handleSubmit}>
                <div className="title-div">
                    <h2>Change Password</h2>
                </div>
                <label>
                    Old Password:
                    <input
                        type="text"
                        name="userName"
                    />
                </label>
                <br />
                <label>
                    New Password:
                    <input
                        type="text"
                        name="userName"
                    />
                </label>
                <label>
                    Confirm Password:
                    <input
                        type="text"
                        name="userName"
                    />
                </label>

                <div>
                    <br />
                    <button type="submit">Update Profile</button>
                    <br /><br />
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
            </form>
            <div className="note-text">
                <p>
                    <span>Note: </span>
                    Please ensure that your new password is strong and unique, combining letters, numbers, and special characters. If you’ve forgotten your current password, you can use the "Forgot Password?" link to reset it securely.                </p>
            </div>
        </div>
    )
};

export default ChangePassword;