import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import propertiesData from '../Datas/propertiesData.json';

const RealtorsCard = ({ realtor }) => {
    const [listingCount, setListingCount] = useState(0);

    useEffect(() => {
        const countListings = () => {
            const count = propertiesData.filter(p => p.realtor === realtor.name).length;
            setListingCount(count);
        };

        countListings();
    }, [realtor.name]);

    return (
        <>
            <Link to={`/realtor/${encodeURIComponent(realtor.name)}`}>
                <div className="realtor-card">
                    <div className="realtor-image">
                        <img src={realtor.image} alt={realtor.name} />
                    </div>
                    <div className="realtor-caption">
                        <div className="realtor-rating">
                            <p>{realtor.rating} / 5</p>
                        </div>
                        <h2>{realtor.name}</h2>
                        <h6>{realtor.experience} years</h6>
                        <p><strong>Mobile:</strong> {realtor.phone}</p>
                        <p><strong>Email:</strong> {realtor.email}</p>
                        <hr />
                        <p>Listings: {listingCount}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default RealtorsCard;