import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faLocationDot, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import adminListedProperties from "../Datas/adminListedProperties.json";
import DeleteModal from "./DeleteModal";
import EditPropertyModal from "./EditPropertyModal";

const ListedProperties = () => {
    const [properties, setProperties] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);

    useEffect(() => {
        setProperties(adminListedProperties);
    }, []);

    const handleEdit = (property) => {
        setSelectedProperty({ ...property });  // Ensure a new object is used
        setShowEditModal(true);
    };

    const handleDelete = (property) => {
        setSelectedProperty({ ...property });  // Ensure a new object is used
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        if (selectedProperty) {
            setProperties(prevProperties => prevProperties.filter(property => property.id !== selectedProperty.id));
            setShowDeleteModal(false);
            setSelectedProperty(null);
        }
    };

    const confirmEdit = (updatedProperty) => {
        if (updatedProperty) {
            setProperties(prevProperties =>
                prevProperties.map(property =>
                    property.id === updatedProperty.id ? updatedProperty : property
                )
            );
            setShowEditModal(false);
            setSelectedProperty(null);
        }
    };

    return (
        <div className="listed-properties">
            <table>
                <thead>
                    <tr>
                        <th>Property</th>
                        <th className="added-date">Added Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map((property) => (
                        <tr key={property.id}>
                            <td className="listed-card">
                                <div className="listed-property-card">
                                    <img src={property.image[0]} alt={property.name} /> {/* Use the first image */}
                                    <div>
                                        <h4>{property.name}</h4>
                                        <div className="property-icon">
                                            <FontAwesomeIcon icon={faLocationDot} />
                                            {property.address}
                                        </div>
                                        <p>₦{property.price.toLocaleString()}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="added-date">{property.date}</td>
                            <td>
                                <button onClick={() => handleEdit(property)}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button onClick={() => handleDelete(property)}>
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Delete Modal */}
            {showDeleteModal && (
                <DeleteModal
                    isOpen={showDeleteModal}
                    onRequestClose={() => setShowDeleteModal(false)}
                    onConfirm={confirmDelete}
                    property={selectedProperty}
                />
            )}

            {/* Edit Property Modal */}
            {showEditModal && (
                <EditPropertyModal
                    isOpen={showEditModal}
                    onRequestClose={() => setShowEditModal(false)}
                    onConfirm={confirmEdit}
                    property={selectedProperty}
                />
            )}
        </div>
    );
};

export default ListedProperties;
