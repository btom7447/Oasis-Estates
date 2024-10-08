import React, { useState, useEffect } from "react";

// Simulating fetching the data from the JSON file
const fetchUserData = () => {
    return {
        name: "Benjamin Tom",
        userName: "benjamintom7447",
        email: "benjamin@gmail.com",
        phone: "+2345678910",
        address: "3170 Heaven Lane, Nigeria",
        bio: [""],
        facebook: "",
        instagram: "",
        linkedin: "",
        website: "",
        image: "https://img.freepik.com/free-photo/young-successful-african-businessman-posing-dark_176420-4969.jpg?semt=ais_hybrid",
    };
};

const ProfileSection = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const data = fetchUserData();
        setUserData(data);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would send the updated data to the backend or update the JSON file
        console.log("Updated User Data:", userData);
        alert("Profile updated successfully!");
    };

    // Safeguard to ensure name exists before splitting
    const firstName = userData.name ? userData.name.split(" ")[0] : "";
    const lastName = userData.name ? userData.name.split(" ")[1] : "";

    return (
        <div className="profile-section">
            <form className="profile-form" onSubmit={handleSubmit}>
                <h2>Profile Information</h2>
                <div className="profile-image">
                    <img src={userData.image} alt={userData.name} />
                </div>
                <label>
                    Username:
                    <input
                        type="text"
                        name="userName"
                        value={userData.userName || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={userData.email || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Phone:
                    <input
                        type="tel"
                        name="phone"
                        value={userData.phone || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={userData.address || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Bio:
                    <textarea
                        name="bio"
                        value={userData.bio || ""}
                        onChange={handleChange}
                        placeholder="Tell us about yourself ..."
                    />
                </label>

                {/* SOCIAL MEDIA */}
                <label>
                    Facebook:
                    <input
                        type="url"
                        name="facebook"
                        value={userData.facebook || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Instagram:
                    <input
                        type="url"
                        name="instagram"
                        value={userData.instagram || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    LinkedIn:
                    <input
                        type="url"
                        name="linkedin"
                        value={userData.linkedin || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Website:
                    <input
                        type="url"
                        name="website"
                        value={userData.website || ""}
                        onChange={handleChange}
                    />
                </label>

                <div>
                    <button type="submit">Update Profile</button>
                </div>
            </form>
        </div>
    );
};

export default ProfileSection;
