import React, { useEffect, useRef } from 'react';
import { FaRobot, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

// Messages Component
export const ChatMessages = ({ 
  messages, 
  isBotTyping, 
  sendMessage, 
  markMessageAsRead, 
  chatContainerRef, 
  isMobile 
}) => {
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    
    // Mark all bot messages as read when they are displayed
    messages.forEach(msg => {
      if (msg.sender === 'bot' && !msg.read) {
        markMessageAsRead(msg);
      }
    });
  }, [messages, markMessageAsRead]);

  // Render message content
  const renderMessageContent = (msg) => {
    return (
      <>
        <p className="text-sm md:text-base">{msg.text}</p>
        
        {msg.sender === 'bot' && msg.options?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {msg.options.map((option, idx) => (
              <button 
                key={idx} 
                onClick={() => sendMessage(option)} 
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition duration-200"
              >
                {option}
              </button>
            ))}
          </div>
        )}
        
        {msg.sender === 'bot' && msg.contact && (
          <div className="mt-3 flex flex-col space-y-2">
            <a 
              href="mailto:support@htechdigital.com" 
              className="inline-flex items-center px-3 py-2 bg-blue-100 text-blue-700 rounded-md text-sm hover:bg-blue-200 transition duration-200"
            >
              <FaEnvelope className="mr-2" />
              support@htechdigital.com
            </a>
            <a 
              href="tel:+1234567890" 
              className="inline-flex items-center px-3 py-2 bg-blue-100 text-blue-700 rounded-md text-sm hover:bg-blue-200 transition duration-200"
            >
              <FaPhone className="mr-2" />
              +1234567890
            </a>
          </div>
        )}
        
        {msg.sender === 'bot' && msg.links && (
          <div className="mt-3 flex flex-col space-y-2">
            {msg.links.map((link, idx) => (
              <a 
                key={idx}
                href={link.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 bg-blue-100 text-blue-700 rounded-md text-sm hover:bg-blue-200 transition duration-200"
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
        
        {msg.sender === 'bot' && msg.image && (
          <div className="mt-3">
            <img 
              src={msg.image} 
              alt="Bot response" 
              className="rounded-lg max-w-full h-auto"
            />
          </div>
        )}

        {msg.timestamp && (
          <div className="text-xs mt-1 opacity-60">
            {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        )}
      </>
    );
  };

  return (
    <div 
      ref={chatContainerRef}
      className="flex-1 overflow-y-auto p-4 bg-gray-50"
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="space-y-4">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`flex items-start max-w-xs md:max-w-sm space-x-2 ${msg.sender === 'bot' ? 'flex-row' : 'flex-row-reverse'}`}>
              {msg.sender === 'bot' ? (
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                  <FaRobot className="text-blue-600" size={16} />
                </div>
              ) : (
                <div className="flex-shrink-0 bg-blue-600 rounded-full p-2">
                  <FaUser className="text-white" size={16} />
                </div>
              )}
              
              <div className={`p-3 rounded-2xl ${
                msg.sender === 'bot' 
                  ? 'bg-white text-gray-800 shadow-sm' 
                  : 'bg-blue-600 text-white'
              }`}>
                {renderMessageContent(msg)}
              </div>
            </div>
          </div>
        ))}

        {isBotTyping && (
          <div className="flex items-start space-x-2">
            <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
              <FaRobot className="text-blue-600" size={16} />
            </div>
            <div className="p-3 rounded-2xl bg-white text-gray-800 shadow-sm inline-flex">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};