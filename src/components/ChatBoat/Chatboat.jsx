import React, { useState, useEffect, useRef } from 'react';
import { FaComments, FaPaperPlane, FaTimes, FaRobot, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ChatHeader } from './ChatbotComponents';
import { ChatMessages } from './DefaultMessage';
import { ChatInput } from './ChatbotComponents'; // Import ChatInput from ChatbotComponents
import { useChatbotLogic } from './ChatbotHook';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);
  const navigate = useNavigate();

  const { 
    messages, 
    input, 
    setInput, 
    isBotTyping, 
    sendMessage, 
    navigateToService,
    markMessageAsRead,
    resetChat
  } = useChatbotLogic(navigate);

  // Check if the device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Focus on input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle keyboard events
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  // Handle closing the chat
  const handleCloseChat = () => {
    setIsOpen(false);
  };

  // Handle starting a new chat
  const handleNewChat = () => {
    resetChat();
  };

  return (
    <>
      {/* Chat button */}
      <button 
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 z-50 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with H-Tech Digital"
      >
        <FaComments size={28} />
        {messages.length > 0 && messages.some(msg => !msg.read && msg.sender === 'bot') && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {messages.filter(msg => !msg.read && msg.sender === 'bot').length}
          </span>
        )}
      </button>

      {/* Chat modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 md:p-0">
          <div 
            className="bg-white w-full max-w-md rounded-2xl shadow-2xl transform transition duration-300 scale-100 flex flex-col overflow-hidden"
            style={{ maxHeight: '80vh', height: '600px' }}
          >
            {/* Chat header component */}
            <ChatHeader 
              onClose={handleCloseChat}
              onNewChat={handleNewChat}
            />

            {/* Chat messages component */}
            <ChatMessages 
              messages={messages}
              isBotTyping={isBotTyping}
              sendMessage={sendMessage}
              markMessageAsRead={markMessageAsRead}
              chatContainerRef={chatContainerRef}
              isMobile={isMobile}
            />

            {/* Chat input component */}
            <ChatInput 
              input={input}
              setInput={setInput}
              handleKeyPress={handleKeyPress}
              sendMessage={sendMessage}
              inputRef={inputRef}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;