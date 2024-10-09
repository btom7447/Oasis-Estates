import React, { useState, useEffect } from 'react';

const Chat = ({ participants, onSelectChat }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredParticipants, setFilteredParticipants] = useState(participants);

    // This function will simulate the sorting based on recent chats
    const sortParticipantsByRecentChat = (participants) => {
        // For now, return the participants as they are.
        // Replace this with your logic to sort by recent chats if available
        return participants; // Update this to sort by recent chat if you have that data
    };

    // Update filtered participants whenever search term or participants change
    useEffect(() => {
        const filtered = participants.filter(participant =>
            participant.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Sort the filtered participants
        setFilteredParticipants(sortParticipantsByRecentChat(filtered));
    }, [searchTerm, participants]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="chats-container">
            <input 
                type="search" 
                name="chat-search" 
                id="chatSearch" 
                placeholder="Search or start a new chat" 
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredParticipants.length > 0 ? (
                    filteredParticipants.map(participant => (
                        <li key={participant.id} onClick={() => onSelectChat(participant)} className="chat-participant">
                            <img src={participant.profilePicture} alt={`${participant.name}'s profile`} className="profile-picture" />
                            <div className="participant-box">
                                <div>
                                    <h5>{participant.name}</h5>
                                    <h6>{participant.time}</h6>
                                </div>
                                <div>
                                    <p>{participant.lastMessage}</p>
                                    <span>{participant.messageCount}</span>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="no-result">No Result</li>
                )}
            </ul>
        </div>
    );
};

export default Chat;