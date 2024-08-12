import React from "react";
import RealtorsDisplay from "../Components/RealtorsDisplay";
import BreadCrumb from "../Components/BreadCrumb";

const Realtors = () => {
    return (
        <div className="web-page">
            <BreadCrumb name="Realtors" />
            <RealtorsDisplay />
        </div>
    )
};

export default Realtors;