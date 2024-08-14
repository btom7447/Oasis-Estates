import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import adminUserData from '../Datas/adminUserData.json'; 

const DashboardGraph = () => {
    const [monthlyData, setMonthlyData] = useState([]);
    const [yearlyData, setYearlyData] = useState([]);
    const [viewMode, setViewMode] = useState("monthly"); // "monthly" or "yearly"

    useEffect(() => {
        if (adminUserData.length > 0) {
            const data = adminUserData[0]; // Assuming you want the first user's data
            setMonthlyData(data.monthlyData);
            setYearlyData(data.yearlyData);
        }
    }, []);

    const toggleViewMode = () => {
        setViewMode(viewMode === "monthly" ? "yearly" : "monthly");
    };

    return (
        <div className="dashboard-graph">
            <button onClick={toggleViewMode}>
                {viewMode === "monthly" ? "Yearly" : "Monthly"}
            </button>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={viewMode === "monthly" ? monthlyData : yearlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={viewMode === "monthly" ? "month" : "year"} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="views" stroke="#AA8453" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DashboardGraph;