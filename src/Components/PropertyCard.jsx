import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { formatDistanceToNow, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property, formatNumber }) => {
    const formattedDate = formatDistanceToNow(parseISO(property.date), { addSuffix: true });

    const displayPrice = property.installment === "yes"
        ? `₦${formatNumber(Math.ceil(property.price / 12))} /month`
        : `₦${formatNumber(property.price)}`;

    return (
        <Link to={`/property-details/${property.id}`} className="property-card-link">
            <div className="property-card">
                <div className="property-status">
                    <div className="status-tag">
                        <p>For {property.status}</p>
                    </div>
                    {property.featured === "yes" && (
                        <div className="featured-tag">
                            <p>Featured</p>
                        </div>
                    )}
                </div>
                <div className="property-carousel">
                    <Splide options={{ pagination: true, arrows: false }}>
                        {property.image.map((imgSrc, index) => (
                            <SplideSlide key={index}>
                                <img src={imgSrc} alt={`${property.name} ${index + 1}`} />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
                <div className="price-tag">
                    <h3>{displayPrice}</h3>
                </div>
                <div className="property-details">
                    <h4>{property.type}</h4>
                    <h2>{property.name}</h2>
                    <div className="location-tag">
                        <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
                        <h5>{property.address}</h5>
                    </div>
                    <h6>
                        <span>{property.bedrooms} Beds,</span>
                        <span>{property.bathrooms} Baths,</span>
                        <span>{property.size} Sqft</span><span className="superscript">2</span>
                    </h6>
                    <hr />
                    <div className="property-agent">
                        <div className="realtor">
                            <Link to={`/realtor/${encodeURIComponent(property.realtor)}`} className="realtor-link">
                                <img src={property.realtorImage} alt={property.realtor} />
                                <p>{property.realtor}</p>
                            </Link>
                        </div>
                        <p>{formattedDate}</p> 
                    </div>
                </div>
            </div>
        </Link>
    );
};

PropertyCard.propTypes = {
    property: PropTypes.shape({
        id: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        featured: PropTypes.string,
        image: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        bedrooms: PropTypes.number.isRequired,
        bathrooms: PropTypes.number.isRequired,
        size: PropTypes.number.isRequired,
        realtor: PropTypes.string.isRequired,
        realtorImage: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        installment: PropTypes.string
    }).isRequired,
    formatNumber: PropTypes.func.isRequired
};

export default PropertyCard;
