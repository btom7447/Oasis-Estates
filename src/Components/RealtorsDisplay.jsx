import React, { useEffect, useState } from 'react';
import RealtorsCard from './RealtorsCard';
import realtorsData from '../Datas/realtorsData.json';

const RealtorsDisplay = () => {
    const [realtors, setRealtors] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        setRealtors(realtorsData);
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentRealtors = realtors.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(realtors.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="realtors-display">
            <div className="property-grid">
                {currentRealtors.map(realtor => (
                    <RealtorsCard key={realtor.id} realtor={realtor} />
                ))}
            </div>
            <div className="listing-pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default RealtorsDisplay;
