import React, { useState, useEffect } from "react";
import Select from "react-select";
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const ListingForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        propertyType: "",
        propertyStatus: "",
        price: "",
        city: "",
        address: "",
        area: "",
        bedrooms: "",
        bathrooms: "",
        highlights: [],
    });

    const propertyTypeOptions = [
        { value: "apartment", label: "Apartment" },
        { value: "office", label: "Office" },
        { value: "studentLodge", label: "Student Lodge" },
        { value: "shop", label: "Shop" },
        { value: "mansion", label: "Mansion" },
        { value: "villa", label: "Villa" },
        { value: "house", label: "House" }
    ];

    const propertyStatusOptions = [
        { value: "forRent", label: "For Rent" },
        { value: "forSale", label: "For Sale" }
    ];

    const highlightsOptions = [
        { value: "airConditioning", label: "Air Conditioning" },
        { value: "security", label: "24/7 Security" },
        { value: "waterHeater", label: "Water Heater" },
        { value: "electricity", label: "Electricity" },
        { value: "swimmingPool", label: "Swimming Pool" },
        { value: "parkingSpace", label: "Parking Space" },
        { value: "elevator", label: "Elevator" },
        { value: "guestHouse", label: "Guest House" },
        { value: "storageRoom", label: "Storage Room" },
        { value: "conferenceRoom", label: "Conference Room" },
        { value: "highSpeedInternet", label: "High-Speed Internet" },
        { value: "studyArea", label: "Study Area" },
        { value: "laundryService", label: "Laundry Service" },
        { value: "meetingRooms", label: "Meeting Rooms" },
        { value: "cctv", label: "CCTV" },
        { value: "Elevator", label: "Elevator" },
        { value: "Garden", label: "Garden" },
        { value: "Balcony", label: "Balcony" },
    ];

    useEffect(() => {
        // Load data from local storage
        const savedData = localStorage.getItem('properties');
        if (savedData) {
            // Optionally: Set some default data or handle as needed
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSelectChange = (selectedOption, { name }) => {
        setFormData({
            ...formData,
            [name]: selectedOption
        });
    };

    const handleHighlightChange = (selectedOptions) => {
        setFormData({
            ...formData,
            highlights: selectedOptions.map(option => option.value)
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form
        const {
            title, description, propertyType, propertyStatus,
            price, city, address, area, bedrooms, bathrooms, highlights
        } = formData;

        if (
            !title || !description || !propertyType || !propertyStatus ||
            !price || !city || !address || !area || !bedrooms || !bathrooms || highlights.length === 0
        ) {
            toast.error("Please input all property details");
            return;
        }

        // Get existing properties from local storage
        const existingProperties = JSON.parse(localStorage.getItem('properties')) || [];

        // Create a new property entry
        const newProperty = {
            id: (existingProperties.length + 1).toString(),
            ...formData,
            image: [], // Add logic to handle image URLs
            date: new Date().toISOString().split('T')[0], // Current date
        };

        // Update local storage
        localStorage.setItem('properties', JSON.stringify([...existingProperties, newProperty]));

        // Optionally clear the form or handle UI feedback
        setFormData({
            title: "",
            description: "",
            propertyType: "",
            propertyStatus: "",
            price: "",
            city: "",
            address: "",
            area: "",
            bedrooms: "",
            bathrooms: "",
            highlights: [],
        });

        toast.success("Property Information Saved!");
    };

    return (
        <form className="listing-form" onSubmit={handleSubmit}>
            <h2>Basic Information</h2>
    
            {/* PROPERTY TITLE INPUT */}
            <label>
                Property Title:
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Cozy 2-Bedroom Apartment"
                />
            </label>
    
            {/* PROPERTY DESCRIPTION INPUT */}
            <label>
                Description:
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Provide a detailed description of the property, including key features and nearby amenities."
                />
            </label>
    
            {/* PROPERTY TYPE SELECT INPUT */}
            <label>
                Property Type:
                <Select
                    className="select"
                    classNamePrefix="custom-select"
                    name="propertyType"
                    options={propertyTypeOptions}
                    value={formData.propertyType}
                    onChange={handleSelectChange}
                    placeholder="Select the type of property"
                />
            </label>
    
            {/* PROPERTY STATUS SELECT INPUT */}
            <label>
                Property Status:
                <Select
                    className="select"
                    classNamePrefix="custom-select"
                    name="propertyStatus"
                    options={propertyStatusOptions}
                    value={formData.propertyStatus}
                    onChange={handleSelectChange}
                    placeholder="Select property status"
                />
            </label>
    
            {/* PROPERTY PRICE INPUT */}
            <label>
                Price:
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Enter the price"
                />
            </label>
    
            {/* PROPERTY LOCATION INPUT - CITY */}
            <label>
                City:
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Lagos, Abuja, Ibadan"
                />
            </label>
    
            {/* PROPERTY ADDRESS INPUT */}
            <label>
                Address:
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="1234 Elm Street, Victoria Island"
                />
            </label>
    
            {/* PROPERTY AREA SIZE INPUT */}
            <label>
                Area (Sqft):
                <input
                    type="number"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                />
            </label>
    
            {/* PROPERTY BEDROOMS INPUT */}
            <label>
                Bedrooms:
                <input
                    type="number"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                />
            </label>
    
            {/* PROPERTY BATHROOMS INPUT */}
            <label>
                Bathrooms:
                <input
                    type="number"
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleChange}
                />
            </label>
    
            {/* PROPERTY HIGHLIGHTS INPUT SELECT */}
            <label>
                Highlights:
                <Select
                    className="select"
                    classNamePrefix="custom-select"
                    name="highlights"
                    options={highlightsOptions}
                    isMulti
                    value={highlightsOptions.filter(option => formData.highlights.includes(option.value))}
                    onChange={handleHighlightChange}
                    placeholder="Select key features"
                />
            </label>
            <div>
                <button type="submit">Save Information</button>
            </div>
            <ToastContainer /> 
        </form>
    );
};

export default ListingForm;