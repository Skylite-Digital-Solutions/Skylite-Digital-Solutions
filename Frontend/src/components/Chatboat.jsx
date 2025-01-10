// Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Chatboat.css'; // Import the CSS file
import '../styles/color.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async (message) => {
    if (!message) return;

    setMessages([...messages, { text: message, sender: 'user' }]);
    try {
      const response = await axios.post('http://localhost:5000/api/chatbot', {
        message: message
      });
      setMessages([...messages, { text: message, sender: 'user' }, { text: response.data.reply, sender: 'bot' }]);
      setInput('');
    } catch (error) {
      setMessages([...messages, { text: message, sender: 'user' }, { text: 'Oops! Something went wrong.', sender: 'bot' }]);
      setInput('');
    }
  };

  const handleSendClick = () => {
    if (input) {
      sendMessage(input);
    }
  };

  return (
    <>
      <button className="chatbot-button" onClick={toggleChatbot}>
        {/* <img src={chatbotIcon} alt="Chatbot Icon" className="chatbot-icon" /> */}
        <img src="/Chatboat.png" alt="Chatboat Icon" />
      </button>

      {isOpen && (
        <div className="chatbot-overlay">
          <div className="chatbot-container">
            <div className="chatbot-header">
              <h4>Skylite Assistance</h4>
              <button onClick={toggleChatbot} className="close-button">
                ×
              </button>
            </div>
            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>

            {/* Predefined Options */}
            <div className="predefined-options">
              <button onClick={() => sendMessage('Know More')}>Know More</button>
              <button onClick={() => sendMessage('Get a Callback')}>Get a Callback</button>
              <button onClick={() => sendMessage('Schedule a Call')}>Schedule a Call</button>
              <button onClick={() => sendMessage('Requirement')}>Requirement</button>
            </div>

            {/* Message Input */}
            <div className="chatbot-input-container">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button onClick={handleSendClick}>Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
