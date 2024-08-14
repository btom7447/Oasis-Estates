import React from "react";
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

const DashboardMetrics = ({ userData }) => {
    return (
        <div className="key-metrics">
            {/* TOTAL EARNINGS */}
            <div className="metrics-box">
                <img src="https://img.icons8.com/?size=100&id=7YsDTTHHs9zs&format=png&color=000000" alt="earning icon" />
                <div>
                    <h5>
                        ₦<Odometer value={userData.earning} format="(,ddd)" duration={1000} />
                    </h5>
                    <p>Total Earning</p>
                </div>
            </div>
            {/* LISTED PROPERTIES */}
            <div className="metrics-box">
                <img src="https://img.icons8.com/?size=100&id=19986&format=png&color=000000" alt="listed property icon" />
                <div>
                    <h5>
                        <Odometer value={userData.listedProperties} format="(,ddd)" duration={1000} />
                    </h5>
                    <p>Listed Properties</p>
                </div>
            </div>
            {/* PROPERTIES PURCHASED */}
            <div className="metrics-box">
                <img src="https://img.icons8.com/?size=100&id=25994&format=png&color=000000" alt="purchased property icon" />
                <div>
                    <h5>
                        <Odometer value={userData.purchasedProperties} format="(,ddd)" duration={1000} />
                    </h5>
                    <p>Properties Purchased</p>
                </div>
            </div>
            {/* PROPERTIES PENDING VERIFICATION */}
            <div className="metrics-box">
                <img src="https://img.icons8.com/?size=100&id=iWXaTX0OHmpB&format=png&color=000000" alt="properties pending verification icon" />
                <div>
                    <h5>
                        <Odometer value={userData.pendingProperties} format="(,ddd)" duration={1000} />
                    </h5>
                    <p>Properties Pending Verification</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardMetrics;