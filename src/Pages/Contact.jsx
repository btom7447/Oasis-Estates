import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import GetInTouch from "../Components/GetInTouch";
import ContactAccordion from "../Components/ContactAccordion";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
    return (
        <div className="web-page">
            <BreadCrumb name="Contact Us" />
            <GetInTouch />
            <ContactAccordion />
            <ContactForm />
        </div>
    )
};

export default Contact;