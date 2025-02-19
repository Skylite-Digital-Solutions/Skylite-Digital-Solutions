import React, { useState, useEffect } from 'react';
import { getChatbotMessage } from '../Firebase/chatbotService'; // Import the helper function
import { FaComments } from 'react-icons/fa';

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

    // Handle different responses based on user input
    if (message.toLowerCase() === 'query') {
      botResponse = await getChatbotMessage("query-message"); // Show services options
    } else if (message.toLowerCase() === 'contact us') {
      botResponse = await getChatbotMessage("contact-us-message"); // Show contact form option
    } else if (message.toLowerCase() === 'our services') {
      botResponse = await getChatbotMessage("our-services-message"); // Show list of services
    } else if (message.toLowerCase() === 'web development') {
      botResponse = await getChatbotMessage("web-development-service");
    } else if (message.toLowerCase() === 'digital marketing') {
      botResponse = await getChatbotMessage("digital-marketing-service");
    } else {
      console.log("Message not recognized. Fetching default response...");
      botResponse = await getChatbotMessage("services-overview");
    }

    if (botResponse) {
      setMessages((prev) => [...prev, { ...botResponse, sender: "bot" }]);
    } else {
      console.log("No response from bot.");
    }
  };

  return (
    <>
      <button
        className="fixed bottom-10 right-10 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaComments size={30} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-semibold text-gray-800">Skylite Assistance</h4>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 text-2xl font-semibold"
              >
                ×
              </button>
            </div>

            <div className="overflow-y-auto max-h-80 mb-4">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`p-3 rounded-lg ${msg.sender === 'bot' ? 'bg-gray-100' : 'bg-blue-500 text-white'} max-w-xs`}>
                    <p>{msg.text}</p>
                    {msg.sender === 'bot' && msg.options?.length > 0 && (
                      <div className="mt-2 space-x-2">
                        {msg.options.map((option, idx) => (
                          <button
                            key={idx}
                            onClick={() => sendMessage(option)}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => sendMessage(input)}
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
