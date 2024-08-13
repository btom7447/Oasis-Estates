import React from "react";
import CompanyOverview from "../Components/ComponayOverview";
import MissionStatement from "../Components/MissionStatement";
import StatisticsSection from "../Components/StatisticsSection";
import FeaturedRealtors from "../Components/DiscoverProperty";
import PromotionalVideo from "../Components/PromotionalVideo";

const About = () => {
    return (
        <div className="web-page">
            <CompanyOverview />
            <MissionStatement />
            <StatisticsSection />
            <FeaturedRealtors />
            <PromotionalVideo />
        </div>
    )
};

export default About;