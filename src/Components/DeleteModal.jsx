import React from "react";
import ReactModal from "react-modal";

const DeleteModal = ({ isOpen, onRequestClose, onConfirm, property }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Delete Property Confirmation"
            className="delete-modal"
            overlayClassName="overlay"
        >
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete the property "{property.name}"?</p>
            <div className="modal-buttons">
                <button onClick={onConfirm}>Yes, Delete</button>
                <button onClick={onRequestClose}>Cancel</button>
            </div>
        </ReactModal>
    );
};

export default DeleteModal;