import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import Select from "react-select";

const EditPropertyModal = ({ isOpen, onRequestClose, onConfirm, property }) => {
    const [updatedProperty, setUpdatedProperty] = useState({ ...property });

    useEffect(() => {
        if (property) {
            setUpdatedProperty({ ...property });
        }
    }, [property]);

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
        { value: "garden", label: "Garden" },
        { value: "balcony", label: "Balcony" }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProperty(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSelectChange = (selectedOption, { name }) => {
        setUpdatedProperty(prevState => ({
            ...prevState,
            [name]: selectedOption?.value || ""
        }));
    };

    const handleHighlightChange = (selectedOptions) => {
        setUpdatedProperty(prevState => ({
            ...prevState,
            features: selectedOptions.map(option => option.value)
        }));
    };

    const handleSubmit = () => {
        onConfirm(updatedProperty);
    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Edit Property"
            className="edit-modal"
            overlayClassName="overlay"
        >
            <h2>Edit Property</h2>
            <div className="edit-modal-container">
                <div className="listing-form">
                    {/* PROPERTY TITLE INPUT */}
                    <label>
                        Property Title:
                        <input
                            type="text"
                            name="name"
                            value={updatedProperty.name || ""}
                            onChange={handleChange}
                        />
                    </label>

                    {/* PROPERTY DESCRIPTION INPUT */}
                    <label>
                        Description:
                        <textarea
                            name="description"
                            value={updatedProperty.description?.join("\n") || ""}
                            onChange={handleChange}
                        />
                    </label>

                    {/* PROPERTY TYPE SELECT INPUT */}
                    <label>
                        Property Type:
                        <Select
                            className="select"
                            classNamePrefix="custom-select"
                            name="type"
                            options={propertyTypeOptions}
                            value={propertyTypeOptions.find(option => option.value === updatedProperty.type)}
                            onChange={handleSelectChange}
                        />
                    </label>

                    {/* PROPERTY STATUS SELECT INPUT */}
                    <label>
                        Property Status:
                        <Select
                            className="select"
                            classNamePrefix="custom-select"
                            name="status"
                            options={propertyStatusOptions}
                            value={propertyStatusOptions.find(option => option.value === updatedProperty.status)}
                            onChange={handleSelectChange}
                        />
                    </label>

                    {/* PROPERTY PRICE INPUT */}
                    <label>
                        Price:
                        <input
                            type="number"
                            name="price"
                            value={updatedProperty.price || ""}
                            onChange={handleChange}
                        />
                    </label>

                    {/* PROPERTY CITY INPUT */}
                    <label>
                        City:
                        <input
                            type="text"
                            name="location"
                            value={updatedProperty.location || ""}
                            onChange={handleChange}
                        />
                    </label>

                    {/* PROPERTY ADDRESS INPUT */}
                    <label>
                        Address:
                        <input
                            type="text"
                            name="address"
                            value={updatedProperty.address || ""}
                            onChange={handleChange}
                        />
                    </label>

                    {/* PROPERTY HIGHLIGHTS SELECT INPUT */}
                    <label>
                        Highlights:
                        <Select
                            className="select"
                            classNamePrefix="custom-select"
                            name="features"
                            options={highlightsOptions}
                            isMulti
                            value={highlightsOptions.filter(option => updatedProperty.features.includes(option.value))}
                            onChange={handleHighlightChange}
                        />
                    </label>

                    {/* SUBMIT BUTTON */}
                    <button onClick={handleSubmit}>Save Changes</button>
                </div>
            </div>
        </ReactModal>
    );
};

export default EditPropertyModal;