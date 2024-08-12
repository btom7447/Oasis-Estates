import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PropertyContext } from "./PropertyContext";

const locationImages = {
    "Lagos": "https://www.cometonigeria.com/wp-content/uploads/2013/05/Lagos-Lekki-Ikoyi-bridge.jpg",
    "Benin": "https://www.worldatlas.com/r/w1200-q80/upload/04/3f/7a/shutterstock-1383820007.jpg",
    "Abuja": "https://www.oasdom.com/wp-content/uploads/2016/10/Oasdom.com-Abuja-city-pictures-history-of-abuja-national-mosque-1000x667.jpg",
    "Ibadan": "https://real-estate-nigeria.beforward.jp/wp-content/uploads/2019/04/The-city-of-Ibadan-Nigeria.jpg",
    "port harcourt": "https://th.bing.com/th/id/OIP.x07MsV8EGNKqoeVhNRFhCQHaFI?rs=1&pid=ImgDetMain",
    "default": "https://buzznigeria.com/wp-content/uploads/2015/10/lagos-city.jpg", 
};

const SearchByCity = () => {
    const { properties } = useContext(PropertyContext);
    const navigate = useNavigate();

    // Get the count of listings per location
    const getListingsCount = (location) => {
        return properties.filter(property => property.location === location).length;
    };

    // Get unique locations from properties
    const uniqueLocations = [...new Set(properties.map(property => property.location))];

    const handleLocationClick = (location) => {
        navigate('/listings', {
            state: {
                filterOptions: {
                    location: location,
                }
            }
        });
    };

    return (
        <div className="search-by-city">
            <div className="search-city-caption">
                <h1>Find Properties in these Cities</h1>
                <h6>Explore a wide range of properties in top cities across the country, from bustling metropolises to charming towns. Discover your dream home or investment opportunity in a location that suits your lifestyle.</h6>
            </div>
            <div className="locations-container">
                {uniqueLocations.map(location => (
                    <div key={location} className="location-box">
                        <img 
                            src={locationImages[location] || locationImages["default"]} 
                            alt={location} 
                            className="location-image" 
                        />
                        <div className="location-caption">
                            <button onClick={() => handleLocationClick(location)}>{location}</button>
                            <p>{getListingsCount(location)} Listings</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchByCity;