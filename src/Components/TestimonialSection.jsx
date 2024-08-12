import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import testimonialsData from "../Datas/testimonialData.json"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'; 

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Load testimonials from the JSON file
    setTestimonials(testimonialsData.testimonials);
  }, []);

  useEffect(() => {
  }, [testimonials]);

  return (
    <div className="testimonial-section">
      <div className="testimonial-section-caption">
        <h1>What Clients Say About Us</h1>
        <h6>
          Read testimonials from our valued clients who have trusted us to
          deliver outstanding results in their property search.
        </h6>
      </div>
      <div className="testimonial-carousel">
        <span className="quotation-mark">
          <FontAwesomeIcon icon={faQuoteRight} />
        </span>
        {testimonials.length > 0 ? (
          <Splide
            options={{
              type: "loop",
              autoplay: true,
              interval: 5000, 
              pagination: true,
              arrows: false,
              perPage: 1,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SplideSlide key={index}>
                <div className="testimonial">
                  <p>{testimonial.text}</p>
                  <h4>{testimonial.name}</h4>
                  <h5>{testimonial.title}</h5>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <p>Loading testimonials...</p> // Optional: add a loading state
        )}
      </div>
    </div>
  );
};

export default TestimonialSection;