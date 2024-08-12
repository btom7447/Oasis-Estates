import React from "react";
import Hero from "../Components/Hero";
import FeaturedProperties from "../Components/FeaturedProperties";
import SearchByCity from "../Components/SearchByCity";
import StatisticsSection from "../Components/StatisticsSection";
import TestimonialSection from "../Components/TestimonialSection";
import PromotionalVideo from "../Components/PromotionalVideo";

const Home = () => {
    return (
        <div className="web-page">
            <Hero />
            <FeaturedProperties />
            <SearchByCity />
            <StatisticsSection />
            <TestimonialSection />
            <PromotionalVideo />
        </div>
    )
};

export default Home;