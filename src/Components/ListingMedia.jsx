import React from "react";
import MediaInput from "./MediaInput";

const ListingMedia = () => {
    return (
        <div className="listing-media-section">
            <h2>Property Media</h2>
            <p>Showcase your property's best features with high-quality photos. Upload your media here to create a stunning visual presentation that highlights your property's unique character and charm. This will help potential buyers or renters get a better sense of your property's layout, design, and amenities, making it easier for them to imagine themselves living there.</p>
            <MediaInput />
        </div>
    )
};

export default ListingMedia;