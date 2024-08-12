import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faDownload, faLocationDot, faPrint, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { usePropertyContext } from '../Components/PropertyContext';
import jsPDF from 'jspdf';

const PropertyDetails = () => {
  const { id } = useParams();
  const { properties } = usePropertyContext();
  const property = properties.find(p => p.id === id);
  const mainSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);

  useEffect(() => {
    if (mainSliderRef.current && thumbnailSliderRef.current) {
      const main = new Splide(mainSliderRef.current, {
        type: 'fade',
        heightRatio: 0.4,
        pagination: false,
        arrows: false,
        cover: true,
        breakpoints: {
          640: {
            heightRatio: 1,
          },
        },
      });

      const thumbnails = new Splide(thumbnailSliderRef.current, {
        autoplay: true,
        interval: 3000,
        rewind: true,
        fixedWidth: 150,
        fixedHeight: 100,
        isNavigation: true,
        gap: 10,
        focus: 'fixed',
        arrows: false,
        pagination: false,
        cover: true,
        dragMinThreshold: {
          mouse: 4,
          touch: 10,
        },
        breakpoints: {
          640: {
            fixedWidth: 66,
            fixedHeight: 58,
          },
        },
      });

      main.sync(thumbnails);
      main.mount();
      thumbnails.mount();
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const element = document.querySelector('.property-details');

    doc.html(element, {
      callback: function (doc) {
        doc.save('property-details.pdf');
      },
      x: 10,
      y: 10,
    });
  };

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div className="property-details">
      <div id="main-slider" className="splide main-slide" ref={mainSliderRef}>
        <div className="splide__track">
          <ul className="splide__list">
            {property.image.map((imgSrc, index) => (
              <li className="splide__slide" key={index}>
                <img src={imgSrc} alt={`${property.name} ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>

        <div id="thumbnail-slider" className="splide thumbnail-slide" ref={thumbnailSliderRef}>
          <div className="splide__track">
            <ul className="splide__list">
              {property.image.map((imgSrc, index) => (
                <li className="splide__slide" key={index}>
                  <img src={imgSrc} alt={`${property.name} thumbnail ${index + 1}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="property-info">
        <div className="property-description">
          {/* PRICE TAGS */}
          <div className="price-tag">
            <h2>₦{Math.ceil(property.price).toLocaleString('en-NG', { maximumFractionDigits: 0 })}</h2>
            <p>( Price Only )</p>
          </div>
          {/* PROPERTY LOGO */}
          <div className="property-logo">
            <FontAwesomeIcon icon={faBuilding} className='property-logo-icon' />
            <p>{property.type},</p>
            <p>For {property.status} </p>
          </div>
          {/* PROPERTY NAME */}
          <h1>{property.name}</h1>
          {/* LOCATION TAG */}
          <div className="location-tag">
            <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
            <p>{property.address}</p>
          </div>
          {/* FUNCTIONAL BUTTONS */}
          <div className="functional-buttons">
            <button type="button" className="print" onClick={handlePrint}>
              <FontAwesomeIcon icon={faPrint} />
            </button>
            <button type="button" className="download" onClick={handleDownloadPDF}>
              <FontAwesomeIcon icon={faDownload} />
            </button>
            <button type="button" className="booking">
              Booking Now
            </button>
          </div>
          <hr />
          {/* PROPERTY SPECS */}
          <div className="property-specs">
            <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
            <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
            <p><strong>Area:</strong> {(property.size).toLocaleString('en-NG')} Sqft<span className="superscript">2</span></p>
            <p><strong>Installment:</strong> {property.installment}</p>
          </div>
          {/* PROPERTY DESCRIPTION */}
          <h2>Description</h2>
          {property.description.map((desc, index) => (
            <p key={index} className="description-text">{desc}</p>
          ))}
          {/* PROPERTY HIGHLIGHT */}
          <h2>Highlights</h2>
          <ul className="property-features">
            {property.features.map((feature, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faCheck} className="feature-icon" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="property-realtor">
          <h2>Listed By</h2>
          <Link to={`/realtor/${encodeURIComponent(property.realtor)}`} className="realtor-link">
            <div className="realtor">
              <img src={property.realtorImage} alt={property.realtor} />
              <p><strong>{property.realtor}</strong></p>
              <p>{property.realtorNumber}</p>
            </div>
          </Link>
          <form action="" className="realtor-contact-form">
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder='Name'
              required 
            />
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              placeholder='Phone Number' 
              required 
            />
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder='Email'
              required 
            />
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              placeholder='Message'
              required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;