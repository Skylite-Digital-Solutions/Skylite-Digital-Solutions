import React from 'react';
import { FaTimes, FaRobot, FaRegSmile, FaPaperPlane, FaPlus } from 'react-icons/fa';
import { BsPaperclip } from 'react-icons/bs';

// Header Component
export const ChatHeader = ({ onClose, onNewChat }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <FaRobot className="mr-2" size={20} />
        <h3 className="text-xl font-bold">H-Tech Digital Assistant</h3>
      </div>
      <div className="flex items-center">
        <button 
          onClick={onNewChat} 
          className="text-white hover:bg-blue-800 rounded-full p-1 mr-2 transition duration-200"
          aria-label="New chat"
          title="Start a new chat"
        >
          <FaPlus size={16} />
        </button>
        <button 
          onClick={onClose} 
          className="text-white hover:bg-blue-800 rounded-full p-1 transition duration-200"
          aria-label="Close chat"
        >
          <FaTimes size={20} />
        </button>
      </div>
    </div>
  );
};

// Input Component
export const ChatInput = ({ input, setInput, handleKeyPress, sendMessage, inputRef }) => {
  return (
    <div className="p-4 border-t border-gray-200 bg-white">
      <div className="flex items-center space-x-2">
        <button 
          className="p-2 rounded-full text-blue-600 hover:bg-blue-100 transition duration-200"
          aria-label="Add attachment"
          title="Add attachment"
        >
          <BsPaperclip size={20} />
        </button>
        
        <input 
          ref={inputRef}
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..." 
          className="flex-1 py-3 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        
        <button 
          className="p-2 rounded-full text-blue-600 hover:bg-blue-100 transition duration-200"
          aria-label="Add emoji"
          title="Add emoji"
        >
          <FaRegSmile size={20} />
        </button>
        
        <button 
          onClick={() => {
            if (input.trim()) {
              sendMessage(input);
              setInput('');
            }
          }} 
          disabled={!input.trim()}
          className={`p-3 rounded-full ${
            input.trim() 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          } transition duration-200`}
          aria-label="Send message"
        >
          <FaPaperPlane size={18} />
        </button>
      </div>
      <div className="text-xs text-center text-gray-500 mt-2">
        Powered by H-Tech Digital
      </div>
    </div>
  );
};