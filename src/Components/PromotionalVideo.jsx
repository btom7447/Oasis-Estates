import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from '@react-spring/web';

const PromotionalVideo = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    // Define the animation for the modal
    const modalAnimation = useSpring({
        opacity: modalIsOpen ? 1 : 0,
        transform: modalIsOpen ? 'translateY(0)' : 'translateY(-50%)',
        config: { tension: 300, friction: 25 }
    });

    return (
        <div className="promotional-video-section">
            <div className="promotional-video-caption">
                <h1>Do you want to sell your property?</h1>
                <p>Selling your property has never been easier</p>
                <h6>Please Call: +234 567 8910</h6>
            </div>
            <div className="play">
                <button className="play-button" onClick={openModal}>
                    <FontAwesomeIcon icon={faPlay} />
                </button>
                <p>Play Video</p>
            </div>

            {modalIsOpen && (
                <animated.div className="video-modal-overlay" style={modalAnimation}>
                    <animated.div className="video-modal-content" style={modalAnimation}>
                        <button onClick={closeModal} className="close-button">
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                        <iframe
                            width="100%"
                            height="315"
                            src="https://youtu.be/bh-klGboIg8"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </animated.div>
                </animated.div>
            )}
        </div>
    );
};

export default PromotionalVideo;