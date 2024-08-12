import React, { useContext, useEffect } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import ListingFilters from "../Components/ListingFilters";
import ListingDisplay from "../Components/ListingDisplay";
import { PropertyContext } from "../Components/PropertyContext";
import { useLocation } from 'react-router-dom';

const Listings = () => {
    const { setSearchCriteria } = useContext(PropertyContext);
    const location = useLocation();
    
    useEffect(() => {
        if (location.state && location.state.filterOptions) {
            const { type, location: loc } = location.state.filterOptions;
            setSearchCriteria(prev => ({
                ...prev,
                type,
                location: loc
            }));
        }
    }, [location.state, setSearchCriteria]);

    return (
        <div className="listings">
            <BreadCrumb name="Listings" />
            <ListingFilters />
            <hr />
            <ListingDisplay />
        </div>
    );
};

export default Listings;
