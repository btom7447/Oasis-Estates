import React, { useState } from 'react';
import Chat from './Chat';
import ChatArea from './ChatArea';

const MessageBox = () => {
    const [selectedChat, setSelectedChat] = useState(null);
    const [messages, setMessages] = useState({});

    // Example participants (you can replace this with real data from your state or API)
    const participants = [
        { 
            id: '1', 
            name: 'Tobi Ogunfile', 
            profilePicture: 'https://img.freepik.com/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064826.jpg?ga=GA1.1.608707904.1722074301&semt=sph', 
            lastMessage: 'How may I help you?', 
            text: 'Hello!',
        },
        { 
            id: '2', 
            name: 'Jessica Sanders', 
            profilePicture: 'https://img.freepik.com/free-photo/happy-confident-professional-having-great-idea_74855-2258.jpg?ga=GA1.1.608707904.1722074301&semt=sph',
            lastMessage: 'When will you be chanced to tour the property?', 
            text: 'Hello!',
        },
        { 
            id: '3', 
            name: 'David Idowu', 
            profilePicture: 'https://img.freepik.com/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064834.jpg?ga=GA1.1.608707904.1722074301&semt=sph',
            lastMessage: 'I will get back to you with the exact details', 
            text: 'Hello!',
        },
        { 
            id: '4', 
            name: 'Benjamin Tom', 
            profilePicture: 'https://benjamin-tom.netlify.app/images/Benjamin%20John%20Tom.jpg',
            lastMessage: 'Your verification is still being processed', 
            text: 'Hello!',
        },
    ];

    const handleSelectChat = (participant) => {
        setSelectedChat(participant);
    
        // Placeholder for fetching or updating message history for this participant
        // Add profilePicture for participant messages
        setMessages((prevMessages) => ({
            ...prevMessages,
            [participant.id]: prevMessages[participant.id] || [
                { 
                    id: 1, 
                    sender: participant.name, 
                    text: 'Hello!', 
                },
                { 
                    id: 2, 
                    sender: 'You', 
                    text: 'Hi there!', 
                },
                { 
                    id: 3, 
                    sender: participant.name, 
                    text: 'How may I help you?', 
                },
                
            ]
        }));
    };
    

    return (
        <div className="message-box">
            <Chat participants={participants} onSelectChat={handleSelectChat} />
            <ChatArea participants={participants} selectedChat={selectedChat} messages={messages[selectedChat?.id] || []} />
        </div>
    );
};

export default MessageBox;
