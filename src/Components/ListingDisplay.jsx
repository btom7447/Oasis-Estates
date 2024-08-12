import React, { useContext, useState } from "react";
import { PropertyContext } from "./PropertyContext";
import PropertyCard from "./PropertyCard";
import PropTypes from 'prop-types';

const ListingDisplay = ({ properties: propProperties }) => {
    const { properties: contextProperties } = useContext(PropertyContext);
    const properties = propProperties || contextProperties;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Ensure properties is an array before slicing
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Array.isArray(properties) ? properties.slice(indexOfFirstItem, indexOfLastItem) : [];

    const totalPages = Math.ceil((properties?.length || 0) / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (!Array.isArray(properties) || properties.length === 0) {
        return <div className="no-properties"><h1>No properties available based on your search criteria</h1></div>;
    }

    const formatNumber = (number) => {
        if (!number) return "";
        return Number(number).toLocaleString();
    };

    return (
        <div className="listing-display">
            <div className="property-grid">
                {currentItems.map((property) => (
                    <PropertyCard key={property.id} property={property} formatNumber={formatNumber} />
                ))}
            </div>
            <div className="listing-pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

ListingDisplay.propTypes = {
    properties: PropTypes.arrayOf(
        PropTypes.shape({
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
        }).isRequired
    )
};

export default ListingDisplay;