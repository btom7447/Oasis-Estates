import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import realtorsData from '../Datas/realtorsData.json'; 
import propertiesData from '../Datas/propertiesData.json'; 
import BreadCrumb from '../Components/BreadCrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import ListingDisplay from '../Components/ListingDisplay';

const RealtorsProfile = () => {
    const { name } = useParams();
    const [realtor, setRealtor] = useState(null);
    const [listingsCount, setListingsCount] = useState(0);
    const [realtorProperties, setRealtorProperties] = useState([]);

    useEffect(() => {
        const decodedName = decodeURIComponent(name);

        const realtorData = realtorsData.find(r => r.name === decodedName);

        setRealtor(realtorData);

        const countListings = () => {
            if (realtorData) {
                const properties = propertiesData.filter(p => p.realtor === realtorData.name);
                setRealtorProperties(properties);
                setListingsCount(properties.length);
            }
        };

        countListings();
    }, [name]);

    const renderRating = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - Math.ceil(rating);

        return (
            <div className="realtor-rating">
                {[...Array(fullStars)].map((_, index) => (
                    <FontAwesomeIcon key={`full-${index}`} icon={faStar} className="star" />
                ))}
                {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="half-star" />}
                {[...Array(emptyStars)].map((_, index) => (
                    <FontAwesomeIcon key={`empty-${index}`} icon={faStar} className="empty-star" />
                ))}
            </div>
        );
    };

    if (!realtor) return (
        <div className='no-realtor'>
            <BreadCrumb name="Realtor Profile" /> 
            <p>Loading...</p>
        </div>
    );

    return (
        <>
            <BreadCrumb name={realtor.name} />
            <div className="realtor-profile">
                <div className="realtor-caption">
                    <img src={realtor.image} alt={realtor.name} />
                    <div className="realtor-details">
                        <h1>{realtor.name}</h1>
                        <h6>{realtor.experience} years</h6>
                        {realtor.bio.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        <p><strong>Phone: </strong>{realtor.phone}</p>
                        <p><strong>Email: </strong>{realtor.email}</p>
                        <div className="realtor-socials">
                            {realtor.facebook && (
                                <a href={realtor.facebook} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            )}
                            {realtor.twitter && (
                                <a href={realtor.twitter} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            )}
                            {realtor.linkedin && (
                                <a href={realtor.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            )}
                            {realtor.instagram && (
                                <a href={realtor.instagram} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            )}
                        </div>
                        <hr />
                        
                        <p>Listings: {listingsCount}</p>
                        {renderRating(realtor.rating)}
                    </div>
                </div>
                <div className="realtor-description">
                    <div className="realtor-overview">
                        <h1>Realtor Overview</h1>
                        {realtor.overview.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="realtor-message">
                        <h1>{realtor.name}</h1>
                        <form action="" className="realtor-contact-form">
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder='Name'
                                required 
                            />
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone"
                                placeholder='Phone Number' 
                                required 
                            />
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder='Email'
                                required 
                            />
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="4" 
                                placeholder='Message'
                                required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
                <ListingDisplay properties={realtorProperties} />
            </div>
        </>
    );
};

export default RealtorsProfile;