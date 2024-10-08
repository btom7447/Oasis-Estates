import React, { useEffect, useState } from "react";
import profileSettingsData from '../Datas/profileSettings.json'; 

const ProfileSettings = () => {
    const [settings, setSettings] = useState([]);

    useEffect(() => {
        // Fetching data from the JSON file
        setSettings(profileSettingsData);
    }, []);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would send the updated data to the backend or update the JSON file
        console.log("Updated User Data:", settings);
        alert("Settings updated successfully!");
    };

    const handleCheckboxChange = (id) => {
        setSettings((prevSettings) =>
            prevSettings.map((setting) =>
                setting.id === id ? { ...setting, checked: !setting.checked } : setting
            )
        );
    };

    return (
        <div className="profile-settings">
            <form className="profile-settings-form" onSubmit={handleSubmit}>
                <h2>Email Settings</h2>
                {settings.map((setting) => (
                    <div key={setting.id} className="email-setting-checkboxes">
                        <input
                            type="checkbox"
                            id={`setting-${setting.id}`}
                            name={setting.title}
                            checked={setting.checked}
                            onChange={() => handleCheckboxChange(setting.id)}
                        />
                        <div className="checkbox-texts">
                            <h6>{setting.title}</h6>
                            <p>{setting.text}</p>
                        </div>
                    </div>
                ))}
                <button type="submit">Update Profile</button>
            </form>
            <div className="note-text">
                <p>
                    <span>Note: </span>
                    Your email preferences help us tailor communications to suit your needs. Please review and select the notifications you wish to receive. You can update these settings at any time to ensure you stay informed about important updates regarding your properties and accounts.
                </p>
            </div>
        </div>
    );
};

export default ProfileSettings;