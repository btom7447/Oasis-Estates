import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const ChatArea = ({ selectedChat, messages }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            // Update the message list with the new message from "You"
            const newMessage = { id: messages.length + 1, sender: 'You', text: inputValue, profilePicture: '/path/to/user.jpg' };
            // setMessages(prev => [...prev, newMessage]);  // This would come from parent in a real scenario (like WebSocket)

            setInputValue('');  // Clear input after sending
        }
    };

    return (
        <div className="chat-area">
            {selectedChat && (
                <div className="chat-header">
                    <img
                        src={selectedChat.profilePicture}
                        alt={`${selectedChat.name}'s profile`}
                        className="profile-picture chat-header-picture"
                    />
                    <div>
                        <h2>{selectedChat.name}</h2>
                        <p>Last seen 10 minutes ago</p>
                    </div>
                </div>
            )}
            <div className="message-history">
                {messages.length > 0 ? (
                    messages.map(message => (
                        <div key={message.id} className={`message ${message.sender === 'You' ? 'my-message' : 'received-message'}`}>
                            <p>{message.text}</p>
                        </div>
                    ))
                ) : (
                    <p className='no-result'>No messages yet. Start the conversation!</p>
                )}
            </div>
            {selectedChat && (
                <div className="chat-input">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSendMessage}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ChatArea;
