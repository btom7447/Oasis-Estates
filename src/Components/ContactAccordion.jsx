import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import contactAccordionData from "../Datas/contactAccordionData.json";

const ContactAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="contact-accordion-section">
            <div className="contact-accordion-caption">
                <h1>Frequently Asked Questions </h1>
                <h6>Get informed: common questions and expert responses</h6>
            </div>
            <div className="contact-accordion">
                {contactAccordionData.map((item, index) => (
                    <div
                        className={`accordion-item ${activeIndex === index ? "active" : ""}`}
                        key={index}
                    >
                        <div
                            className="accordion-title"
                            onClick={() => toggleAccordion(index)}
                        >
                            <FontAwesomeIcon
                                icon={
                                    activeIndex === index ? faChevronDown : faChevronRight
                                }
                            />
                            <h3>{item.question}</h3>
                            
                        </div>
                        <div className="accordion-content">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactAccordion;