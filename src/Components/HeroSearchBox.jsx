import React, { useContext, useState, useEffect } from "react";
import Select from 'react-select';
import { PropertyContext } from "./PropertyContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';

const HeroSearchBox = () => {
    const { properties } = useContext(PropertyContext);
    const [type, setType] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [types, setTypes] = useState([]);
    const [locations, setLocations] = useState([]);

    const navigate = useNavigate();
    const locationPath = useLocation();

    // Fetch options on initial load and when properties change
    useEffect(() => {
        const fetchOptions = () => {
            if (!properties || properties.length === 0) return;

            const uniqueTypes = [...new Set(properties.map(property => property.type))].map(type => ({ value: type, label: type }));
            const uniqueLocations = [...new Set(properties.map(property => property.location))].map(location => ({ value: location, label: location }));

            setTypes(uniqueTypes);
            setLocations(uniqueLocations);
        };

        fetchOptions();
    }, [properties]);

    // Clear selected values on navigation back to home
    useEffect(() => {
        if (locationPath.pathname === '/') {
            setType(null);
            setSelectedLocation(null);
        }
    }, [locationPath.pathname]);

    // Handle form submission
    const handleSearch = (e) => {
        e.preventDefault();

        if (!type || !selectedLocation) {
            toast.error("Please select both type and location.");
            return;
        }

        toast.success("Fetching property data...");

        navigate('/listings', {
            state: {
                filterOptions: {
                    type: type.value,
                    location: selectedLocation.value,
                }
            }
        });

        // Clear form inputs
        setType(null);
        setSelectedLocation(null);
    };

    return (
        <div className="hero-search-box">
            <form onSubmit={handleSearch}>
                <Select
                    classNamePrefix="custom-select"
                    value={type}
                    onChange={setType}
                    options={types}
                    placeholder="Choose Property Type"
                />
                <Select
                    classNamePrefix="custom-select"
                    value={selectedLocation}
                    onChange={setSelectedLocation}
                    options={locations}
                    placeholder="Choose Property Location"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default HeroSearchBox;