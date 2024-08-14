import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const MediaInput = () => {
    const [images, setImages] = useState([]);
    const fileInputRef = useRef(null); // Reference to the file input

    const handleFiles = (files) => {
        const fileArray = Array.from(files).map(file => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            return new Promise((resolve) => {
                reader.onloadend = () => {
                    resolve(reader.result);
                };
            });
        });

        Promise.all(fileArray).then(results => {
            setImages(prevImages => [...prevImages, ...results]);
        });
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        handleFiles(files);
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        handleFiles(files);
    };

    const handleClick = () => {
        fileInputRef.current.click(); // Trigger file input click
    };

    const handleDelete = (index) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
        toast.info('Image removed');
    };

    const handleSave = () => {
        try {
            // Save image references or metadata to local storage
            const imageReferences = images.map((src, index) => ({
                id: index, // This could be replaced with actual image ID if using backend
                src
            }));
            localStorage.setItem('uploadedImages', JSON.stringify(imageReferences));
            
            // Optionally, save images to backend or cloud storage here
            // For example, use fetch() to POST images to your server

            console.log('Images references saved to local storage:', imageReferences);
            toast.success('Images saved successfully!');
        } catch (error) {
            console.error('Failed to save images to local storage:', error);
            toast.error('Failed to save images. Try again.');
        }
    };

    return (
        <div className="media-input">
            <div className={`image-preview ${images.length === 0 ? 'empty' : ''}`}>
                {images.map((src, index) => (
                    <div key={index} className="image-container">
                        <img src={src} alt={`Uploaded Preview ${index}`} />
                        <button onClick={() => handleDelete(index)} className="delete-button">
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                    </div>
                ))}
            </div>
            <div 
                className="dropzone" 
                onDrop={handleDrop} 
                onDragOver={(e) => e.preventDefault()}
                onClick={handleClick} // Trigger file input on click
            >
                <img src="https://img.icons8.com/?size=100&id=aQ6TYVn3WZz8&format=png&color=000000" alt="upload icon" />
                <p>Drag and drop images here, or Upload images</p>
                <input 
                    type="file" 
                    multiple 
                    accept="image/*" 
                    onChange={handleFileChange} 
                    ref={fileInputRef} 
                />
            </div>
            <button type="button" onClick={handleSave} className="save-media">Save Media</button>
            <ToastContainer /> {/* Add ToastContainer to render notifications */}
        </div>
    );
};

export default MediaInput;
