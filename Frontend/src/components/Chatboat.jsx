import React, { useState, useEffect } from 'react';
import { getChatbotMessage } from '../Firebase/chatbotService'; // Import the helper function
import { FaComments } from 'react-icons/fa';
import '../styles/Chatboat.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchWelcomeMessage = async () => {
      const welcomeMessage = await getChatbotMessage("welcome-message");
      if (welcomeMessage) {
        setMessages([{ ...welcomeMessage, sender: "bot" }]);
      } else {
        console.log("Welcome message not found in Firestore.");
      }
    };

    fetchWelcomeMessage();
  }, []);

  const sendMessage = async (message) => {
    if (!message) return;

    // Add the user message to the chat
    const userMessage = { text: message, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    // Get bot's response based on user message
    let botResponse;
    if (message.toLowerCase().includes('hi')) {
      console.log("User said 'Hi'. Fetching welcome message...");
      botResponse = await getChatbotMessage("welcome-message"); // Return welcome message for 'hi'
    } else {
      console.log("User said something else. Fetching services overview...");
      botResponse = await getChatbotMessage("services-overview"); // Default response
    }

    if (botResponse) {
      setMessages((prev) => [...prev, { ...botResponse, sender: "bot" }]);
    } else {
      console.log("No response from bot.");
    }
  };

  return (
    <>
      <button className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
        <FaComments size={30} />
      </button>

      {isOpen && (
        <div className="chatbot-overlay">
          <div className="chatbot-container">
            <div className="chatbot-header">
              <h4>Skylite Assistance</h4>
              <button onClick={() => setIsOpen(false)} className="close-button">×</button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  <p>{msg.text}</p>
                  {msg.sender === "bot" && msg.options?.length > 0 && (
                    <div className="bot-options">
                      {msg.options.map((option, idx) => (
                        <button key={idx} onClick={() => sendMessage(option)}>
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="chatbot-input-container">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button onClick={() => sendMessage(input)}>Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
