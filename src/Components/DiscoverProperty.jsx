import React from "react";
import { Link } from "react-router-dom";

const DiscoverProperty = () => {
    return (
        <div className="discover-property">
            <div className="discover-property-caption">
                <h1>Explore Properties Now</h1>
                <h6>Discover a wide selection of properties, tailored to your unique needs and preferences</h6>
            </div>
            <div className="discover-property-grid">
                <div className="grid-item">
                    <img src="https://img.icons8.com/?size=100&id=xkV5AYHA1RzE&format=png&color=000000" alt="apartment icon" />
                    <p>Apartment</p>
                </div>
                <div className="grid-item">
                    <img src="https://img.icons8.com/?size=100&id=117520&format=png&color=000000" alt="apartment icon" />
                    <p>Office</p>
                </div>
                <div className="grid-item">
                    <img src="https://img.icons8.com/?size=100&id=42309&format=png&color=000000" alt="apartment icon" />
                    <p>Shop</p>
                </div>
                <div className="grid-item">
                    <img src="https://img.icons8.com/?size=100&id=4ESD4aRx5oEE&format=png&color=000000" alt="apartment icon" />
                    <p>Villa</p>
                </div>
            </div>
            <Link to="/listings" className="explore-button">
                Explore Properties
            </Link>
        </div>
    )
};

export default DiscoverProperty;