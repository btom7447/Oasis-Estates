import React from "react";
import CompanyOverview from "../Components/ComponayOverview";
import MissionStatement from "../Components/MissionStatement";
import StatisticsSection from "../Components/StatisticsSection";
import FeaturedRealtors from "../Components/FeaturedRealtors";

const About = () => {
    return (
        <div className="web-page">
            <CompanyOverview />
            <MissionStatement />
            <StatisticsSection />
            <FeaturedRealtors />
        </div>
    )
};

export default About;