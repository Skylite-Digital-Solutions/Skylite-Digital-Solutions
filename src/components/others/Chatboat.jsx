import React, { useState, useEffect, useRef } from 'react';
import { FaComments, FaPaperPlane, FaTimes, FaRobot, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWelcomeMessage = async () => {
      setMessages([{ 
        text: "Welcome to H-Tech Digital! How can we assist you today?", 
        sender: "bot", 
        options: ["Our Services", "Contact Us"] 
      }]);
    };
    fetchWelcomeMessage();
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  const navigateToService = (service) => {
    // Close the chat window
    setIsOpen(false);
    
    // Map service names to their respective routes
    const serviceRoutes = {
      "Application Development": "/web-development",
      "Software Quality Assurance": "/quality-assurance",
      "Consultancy": "/services/consultancy",
      "Digital Marketing & SEO": "/services/digital-marketing",
      "Cyber Security": "/services/cyber-security",
      "Support Engineering": "/services/support-engineering"
    };
    
    // Navigate to the corresponding page
    if (serviceRoutes[service]) {
      navigate(serviceRoutes[service]);
    }
  };

  const sendMessage = async (message) => {
    if (!message) return;

    const userMessage = { text: message, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsBotTyping(true);

    let botResponse;
    let shouldNavigate = false;
    let navigateTo = "";

    switch (message.toLowerCase()) {
      case "our services":
        botResponse = {
          text: "We offer a range of IT services. Which one would you like to learn more about?",
          sender: "bot",
          options: [
            "Application Development",
            "Software Quality Assurance",
            "Consultancy",
            "Digital Marketing & SEO",
            "Cyber Security",
            "Support Engineering"
          ]
        };
        break;
      case "application development":
        botResponse = { 
          text: "We provide full-cycle application development services for mobile and web. Our expertise covers React, Node.js, Flutter, and more! Would you like to visit our application development page?", 
          sender: "bot",
          options: ["Visit App Development Page", "Back to Services"]
        };
        break;
      case "visit app development page":
        botResponse = { 
          text: "Great! I'll take you to our Application Development page.", 
          sender: "bot" 
        };
        shouldNavigate = true;
        navigateTo = "Application Development";
        break;
      case "software quality assurance":
        botResponse = { 
          text: "We specialize in Manual & Automation testing for OTT platforms, mobile apps, and web applications. Our tools include Azure DevOps, Kibana, Postman, and Burp Suite. Would you like to visit our QA page?", 
          sender: "bot",
          options: ["Visit QA Page", "Back to Services"]
        };
        break;
      case "visit qa page":
        botResponse = { 
          text: "Great! I'll take you to our Software Quality Assurance page.", 
          sender: "bot" 
        };
        shouldNavigate = true;
        navigateTo = "Software Quality Assurance";
        break;
      case "consultancy":
        botResponse = { 
          text: "We offer expert IT consultancy to help businesses achieve digital transformation through strategic planning and technology solutions. Would you like to visit our consultancy page?", 
          sender: "bot",
          options: ["Visit Consultancy Page", "Back to Services"]
        };
        break;
      case "visit consultancy page":
        botResponse = { 
          text: "Great! I'll take you to our Consultancy page.", 
          sender: "bot" 
        };
        shouldNavigate = true;
        navigateTo = "Consultancy";
        break;
      case "digital marketing & seo":
        botResponse = { 
          text: "Boost your online presence with our SEO, content marketing, PPC, and social media marketing strategies. Would you like to visit our digital marketing page?", 
          sender: "bot",
          options: ["Visit Digital Marketing Page", "Back to Services"]
        };
        break;
      case "visit digital marketing page":
        botResponse = { 
          text: "Great! I'll take you to our Digital Marketing & SEO page.", 
          sender: "bot" 
        };
        shouldNavigate = true;
        navigateTo = "Digital Marketing & SEO";
        break;
      case "cyber security":
        botResponse = { 
          text: "We provide penetration testing, vulnerability assessments, and security audits to protect your systems from cyber threats. Would you like to visit our cyber security page?", 
          sender: "bot",
          options: ["Visit Cyber Security Page", "Back to Services"]
        };
        break;
      case "visit cyber security page":
        botResponse = { 
          text: "Great! I'll take you to our Cyber Security page.", 
          sender: "bot" 
        };
        shouldNavigate = true;
        navigateTo = "Cyber Security";
        break;
      case "support engineering":
        botResponse = { 
          text: "Our support engineering team ensures seamless operation of IT infrastructure and provides 24/7 assistance. Would you like to visit our support engineering page?", 
          sender: "bot",
          options: ["Visit Support Engineering Page", "Back to Services"]
        };
        break;
      case "visit support engineering page":
        botResponse = { 
          text: "Great! I'll take you to our Support Engineering page.", 
          sender: "bot" 
        };
        shouldNavigate = true;
        navigateTo = "Support Engineering";
        break;
      case "back to services":
        botResponse = {
          text: "Which service would you like to learn more about?",
          sender: "bot",
          options: [
            "Application Development",
            "Software Quality Assurance",
            "Consultancy",
            "Digital Marketing & SEO",
            "Cyber Security",
            "Support Engineering"
          ]
        };
        break;
      case "contact us":
        botResponse = { 
          text: "You can reach us via email at support@htechdigital.com or call us at +1234567890.", 
          sender: "bot",
          contact: true
        };
        break;
      default:
        botResponse = { text: "I'm here to assist you! You can ask about our services or contact options.", sender: "bot", options: ["Our Services", "Contact Us"] };
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, botResponse]);
      setIsBotTyping(false);
      
      if (shouldNavigate) {
        setTimeout(() => {
          navigateToService(navigateTo);
        }, 1000);
      }
    }, 1500);
  };

  return (
    <>
      {/* Chat button */}
      <button 
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with H-Tech Digital"
      >
        <FaComments size={28} />
      </button>

      {/* Chat modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 md:p-0">
          <div 
            className="bg-white w-full max-w-md rounded-2xl shadow-2xl transform transition duration-300 scale-100 flex flex-col overflow-hidden"
            style={{ maxHeight: '80vh', height: '600px' }}
          >
            {/* Chat header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <FaRobot className="mr-2" size={20} />
                <h3 className="text-xl font-bold">H-Tech Digital Assistant</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white hover:bg-blue-800 rounded-full p-1 transition duration-200"
                aria-label="Close chat"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Chat messages */}
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

            {/* Input area */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center space-x-2">
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
          </div>
        </div>
      )}
    </>
  );
}
export default Chatbot;
