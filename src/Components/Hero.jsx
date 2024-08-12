import React from "react";
import HeroSearchBox from "./HeroSearchBox";

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-section-caption">
                <h1>Looking for a dream house or property?</h1>
                <h6>Find your dream property here! Our extensive database features over 500+ listings, making it easy to discover your perfect match.</h6>
            </div>
            <HeroSearchBox />
        </div>
    )
};

export default Hero;