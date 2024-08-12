import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import PropertyCard from "./PropertyCard";
import propertiesData from "../Datas/propertiesData.json";

const FeaturedProperties = () => {
    const featuredProperties = propertiesData.filter(property => property.featured === "yes");

    const formatNumber = (num) => num.toLocaleString();

    return (
        <div className="featured-properties">
            <div className="featured-properties-caption">
                <h1>Featured Properties</h1>
                <h6>Explore our handpicked selection of exceptional properties, carefully chosen for their unique features and unbeatable value. Discover the best of the best in our curated collection, tailored to meet your needs and exceed your expectations.</h6>
            </div>
            <div className="featured-carousel">
                <Splide 
                    options={{
                        type: "loop",
                        perPage: 3,
                        pagination: true,
                        arrows: false,
                        gap: '20px',
                        autoplay: true,
                        interval: 4000, 
                        pauseOnHover: true,
                        breakpoints: {
                            1025: { perPage: 2 },
                            765: { perPage: 1 },
                        },
                    }}
                >
                    {featuredProperties.map(property => (
                        <SplideSlide key={property.id}>
                            <PropertyCard property={property} formatNumber={formatNumber} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};

export default FeaturedProperties;