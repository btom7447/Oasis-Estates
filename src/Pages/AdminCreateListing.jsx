import React from "react";
import ListingForm from "../Components/ListingForm";
import ListingMedia from "../Components/ListingMedia";

const AdminCreateListing = () => {
    return (
        <div className="admin-create-listing">
            <h1>Create Listing</h1>
            <ListingForm />
            <ListingMedia />
        </div>
    )
};

export default AdminCreateListing;