import React, { useEffect, useState } from "react";
import DashboardMetrics from "../Components/DashboardMetrics";
import adminUserData from '../Datas/adminUserData.json';
import DashboardGraph from "../Components/DashboardGraph";

const AdminDashboard = () => {
    const [userData, setUserData] = useState({
        earning: 0,
        listedProperties: 0,
        purchasedProperties: 0,
        pendingProperties: 0,
    });

    useEffect(() => {
        // Fetch and set user data from the JSON file
        if (adminUserData.length > 0) {
            setUserData(adminUserData[0]);
        }
    }, []);

    return (
        <div className="dashboard-page">
            <h1>Dashboard</h1>
            <DashboardMetrics userData={userData} />
            <DashboardGraph />
        </div>
    );
};

export default AdminDashboard;