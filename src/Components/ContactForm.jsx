import React from "react";

const ContactForm = () => {
    return (
        <form action="" className="contact-form">
            <h1>Send Message</h1>
            <div className="contact-form-inputs">
                <input type="text" id="name" name="name" placeholder="Name" required className="name-input"/>
                <input type="email" id="email" name="email" placeholder="Email" required className="email-input"/>
                <input type="text" id="subject" name="subject" placeholder="Subject" required className="subject-input" />
                <textarea id="message" name="message" placeholder="Message ..." rows="5" required className="message-input"></textarea>
                <button type="submit" className="submit-button">Send Message</button>
            </div>
        </form>
    );
};

export default ContactForm;
