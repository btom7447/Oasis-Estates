import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import adminUserData from '../Datas/adminUserData.json'; 
import AdminSidebar from "../Components/AdminSidebar";
import AdminMobileNavbar from "../Components/AdminMobileNavbar";

const UserAdmin = () => {
    const [userData, setUserData] = useState({
        name: "",
        image: "",
        earning: 0
    });

    const [notifications, setNotifications] = useState(2);
    const [messages, setMessages] = useState(3);

    useEffect(() => {
        // Set the user data from the imported JSON file
        if (adminUserData.length > 0) {
            setUserData(adminUserData[0]);
        }
    }, []);

    const formatNumber = (number) => {
        return new Intl.NumberFormat().format(number);
    };

    // Extract the first name
    const firstName = userData.name.split(" ")[0];

    return (
        <div className="user-admin">
            <AdminSidebar />
            <AdminMobileNavbar />
            <div className="admin-content">
                <div className="admin-navbar">
                    <div className="nav-icons">
                        <div className="icon-wrapper">
                            <Link to="/user-admin/notification">
                                <img src="https://img.icons8.com/?size=100&id=11642&format=png&color=000000" alt="notification icon" />
                                {notifications > 0 && <span className="badge">{notifications}</span>}
                            </Link>
                        </div>
                        <div className="icon-wrapper">
                            <Link to="/user-admin/message">
                                <img src="https://img.icons8.com/?size=100&id=123847&format=png&color=000000" alt="message icon" />
                                {messages > 0 && <span className="badge">{messages}</span>}
                            </Link>
                        </div>
                    </div>
                    <div className="earning-profile">
                        <h6>Earnings: <span className="earning">₦{formatNumber(userData.earning)}</span></h6>
                        <div className="user-profile">
                            <img src={userData.image} alt={userData.name} />
                            <h6>Hi, {firstName}</h6>
                        </div>
                    </div>
                </div>
                <Outlet />
                <div className="copyright">
                    <p>© 2024 Oasis Estates All right reserved</p>
                </div>
            </div>
        </div>
    );
};

export default UserAdmin;