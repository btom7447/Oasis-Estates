import React, { useState } from "react";
import ReactModal from "react-modal";

const EditPropertyModal = ({ isOpen, onRequestClose, onConfirm, property }) => {
    const [updatedProperty, setUpdatedProperty] = useState({ ...property });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProperty(prevState => ({
            ...prevState,
            [name]: value
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
            className="modal"
            overlayClassName="overlay"
        >
            <h2>Edit Property</h2>
            <div className="edit-form">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={updatedProperty.name}
                    onChange={handleChange}
                />
                <label>Description</label>
                <textarea
                    name="description"
                    value={updatedProperty.description}
                    onChange={handleChange}
                />
                <label>Price</label>
                <input
                    type="number"
                    name="price"
                    value={updatedProperty.price}
                    onChange={handleChange}
                />
                <label>Address</label>
                <input
                    type="text"
                    name="address"
                    value={updatedProperty.address}
                    onChange={handleChange}
                />
                {/* Add more fields as necessary */}
                <div className="modal-buttons">
                    <button onClick={handleSubmit}>Save Changes</button>
                    <button onClick={onRequestClose}>Cancel</button>
                </div>
            </div>
        </ReactModal>
    );
};

export default EditPropertyModal;