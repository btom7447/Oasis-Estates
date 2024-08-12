import React, { useContext, useState, useEffect } from "react";
import Select from 'react-select';
import { PropertyContext } from "./PropertyContext";

const ListingFilters = () => {
    const { uniqueTypes, uniqueStatuses, uniqueLocations, searchCriteria, setSearchCriteria } = useContext(PropertyContext);
    const [keyword, setKeyword] = useState(searchCriteria.keyword || "");
    const [type, setType] = useState(searchCriteria.type ? { value: searchCriteria.type, label: searchCriteria.type } : null);
    const [status, setStatus] = useState(searchCriteria.status ? { value: searchCriteria.status, label: searchCriteria.status } : null);
    const [location, setLocation] = useState(searchCriteria.location ? { value: searchCriteria.location, label: searchCriteria.location } : null);
    const [priceRange, setPriceRange] = useState(searchCriteria.priceRange || "");
    const [bedrooms, setBedrooms] = useState(searchCriteria.bedrooms || "");
    const [bathrooms, setBathrooms] = useState(searchCriteria.bathrooms || "");
    const [size, setSize] = useState(searchCriteria.size || "");

    useEffect(() => {
        setKeyword(searchCriteria.keyword || "");
        setType(searchCriteria.type ? { value: searchCriteria.type, label: searchCriteria.type } : null);
        setStatus(searchCriteria.status ? { value: searchCriteria.status, label: searchCriteria.status } : null);
        setLocation(searchCriteria.location ? { value: searchCriteria.location, label: searchCriteria.location } : null);
        setPriceRange(formatNumber(searchCriteria.priceRange || ""));
        setBedrooms(searchCriteria.bedrooms || "");
        setBathrooms(searchCriteria.bathrooms || "");
        setSize(searchCriteria.size || "");
    }, [searchCriteria]);

    const formatNumber = (value) => {
        if (!value) return "";
        return Number(value).toLocaleString();
    };

    const handlePriceChange = (e) => {
        const value = e.target.value.replace(/,/g, ""); // Remove commas
        if (!isNaN(value) && value !== "") {
            setPriceRange(formatNumber(value));
        } else {
            setPriceRange(""); // Clear value if non-numeric
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchCriteria({
            keyword,
            type: type ? type.value : "",
            status: status ? status.value : "",
            location: location ? location.value : "",
            priceRange: priceRange.replace(/,/g, ""), // Remove commas for search criteria
            bedrooms,
            bathrooms,
            size,
        });
    };

    const handleClearFilters = () => {
        setKeyword("");
        setType(null);
        setStatus(null);
        setLocation(null);
        setPriceRange("");
        setBedrooms("");
        setBathrooms("");
        setSize("");
        setSearchCriteria({
            keyword: "",
            type: "",
            status: "",
            location: "",
            priceRange: "",
            bedrooms: "",
            bathrooms: "",
            size: "",
        });
    };

    return (
        <div className="listing-filters">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search by keyword..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <Select
                    classNamePrefix="custom-select"
                    value={type}
                    onChange={setType}
                    options={uniqueTypes.map(type => ({ value: type, label: type }))}
                    placeholder="Property Type"
                />
                <Select
                    classNamePrefix="custom-select"
                    value={status}
                    onChange={setStatus}
                    options={uniqueStatuses.map(status => ({ value: status, label: status }))}
                    placeholder="Property Status"
                />
                <Select
                    classNamePrefix="custom-select"
                    value={location}
                    onChange={setLocation}
                    options={uniqueLocations.map(location => ({ value: location, label: location }))}
                    placeholder="Property Location"
                />
                <input
                    type="text"
                    placeholder="Price"
                    value={priceRange}
                    onChange={handlePriceChange}
                />
                <input
                    type="number"
                    placeholder="Bedrooms"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Bathrooms"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                />
                <button type="submit">Search</button>
                <button type="button" onClick={handleClearFilters} className="clear-filters">
                    Clear
                </button>
            </form>
        </div>
    );
};

export default ListingFilters;