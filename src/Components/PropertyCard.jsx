import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { formatDistanceToNow, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property, formatNumber }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    const formattedDate = formatDistanceToNow(parseISO(property.date), { addSuffix: true });

    const displayPrice = property.installment === "yes"
        ? `₦${formatNumber(Math.ceil(property.price / 12))} /month`
        : `₦${formatNumber(property.price)}`;

        const handleFavoriteChange = () => {
            if (isFavorited) {
                toast.error('Removed from favorite', {
                    style: {
                        backgroundColor: '#fff', // custom background color
                        color: '#ff0000' // custom text color
                    }
                });
            } else {
                toast.success('Added to favorite', {
                    style: {
                        backgroundColor: '#fff', // custom background color
                        color: '#000'
                         // custom text color
                    }
                });
            }
            setIsFavorited(!isFavorited);
        };

    return (
       <>
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
                <div className="favorite-container">
                    <label className="container">
                        <input 
                            type="checkbox" 
                            checked={isFavorited} 
                            onChange={handleFavoriteChange} 
                        />                       
                        <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z" />
                        </svg>
                    </label>
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
                <Link to={`/property-details/${property.id}`} className="property-card-link">
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
                </Link>
            </div>
       </>
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
