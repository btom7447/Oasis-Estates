import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faLocationDot, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import ReactModal from "react-modal";
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
        setSelectedProperty(property);
        setShowEditModal(true);
    };

    const handleDelete = (property) => {
        setSelectedProperty(property);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        const updatedProperties = properties.filter(property => property.id !== selectedProperty.id);
        setProperties(updatedProperties);
        setShowDeleteModal(false);
        setSelectedProperty(null);
    };

    const confirmEdit = (updatedProperty) => {
        const updatedProperties = properties.map(property =>
            property.id === updatedProperty.id ? updatedProperty : property
        );
        setProperties(updatedProperties);
        setShowEditModal(false);
        setSelectedProperty(null);
    };

    return (
        <div className="listed-properties">
            <table>
                <thead>
                    <tr>
                        <th>Property</th>
                        <th>Added Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map((property) => (
                        <tr key={property.id}>
                            <td>
                                <div className="listed-property-card">
                                    <img src={property.image} alt={property.name} />
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
                            <td>{property.date}</td>
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