import React, { useEffect, useRef, useState } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

const StatisticsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const highlightRef = useRef(null);

    useEffect(() => {
        const currentRef = highlightRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                observer.disconnect(); 
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div className="statistics-section" ref={highlightRef}>
            <div className="statistics">
                <h3><Odometer value={isVisible ? 310 : 0} format="d,ddd" /></h3>
                <h5>Listed Properties</h5>
            </div>
            <div className="statistics">
                <h3><Odometer value={isVisible ? 51 : 0} format="d,ddd" /></h3>
                <h5>Projects Completed</h5>
            </div>
            <div className="statistics">
                <h3><Odometer value={isVisible ? 25 : 0} format="d,ddd" /></h3>
                <h5>Awards Won</h5>
            </div>
            <div className="statistics">
                <h3><Odometer value={isVisible ? 1350 : 0} format="d,ddd" /></h3>
                <h5>Happy Clients</h5>
            </div>
        </div>
    );
};

export default StatisticsSection;
