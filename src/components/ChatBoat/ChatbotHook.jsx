import { useState, useEffect } from 'react';

export const useChatbotLogic = (navigate) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [conversationHistory, setConversationHistory] = useState([]);

  // Initialize chatbot with welcome message
  useEffect(() => {
    // Generate a random session ID
    const newSessionId = Math.random().toString(36).substring(2, 15);
    setSessionId(newSessionId);
    
    const fetchWelcomeMessage = async () => {
      // Initialize with welcome message
      const welcomeMessage = { 
        id: generateMessageId(),
        text: "Welcome to H-Tech Digital! How can we assist you today?", 
        sender: "bot", 
        options: ["Our Services", "Contact Us", "Book a Demo", "Pricing"],
        timestamp: new Date().toISOString(),
        read: false
      };
      
      setMessages([welcomeMessage]);
      
      // Try to fetch previous conversation from localStorage
      try {
        const savedConversation = localStorage.getItem('htechChatHistory');
        if (savedConversation) {
          setConversationHistory(JSON.parse(savedConversation));
        }
      } catch (error) {
        console.error('Error retrieving chat history:', error);
      }
    };
    
    fetchWelcomeMessage();
  }, []);

  // Save conversation history to localStorage when it changes
  useEffect(() => {
    if (conversationHistory.length > 0) {
      try {
        localStorage.setItem('htechChatHistory', JSON.stringify(conversationHistory));
      } catch (error) {
        console.error('Error saving chat history:', error);
      }
    }
  }, [conversationHistory]);

  // Generate unique message ID
  const generateMessageId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  // Mark a message as read
  const markMessageAsRead = (message) => {
    setMessages(prevMessages => 
      prevMessages.map(msg => 
        msg.id === message.id ? { ...msg, read: true } : msg
      )
    );
  };

  // Reset chat
  const resetChat = () => {
    // Add current conversation to history
    if (messages.length > 1) {
      const newConversation = {
        id: sessionId,
        timestamp: new Date().toISOString(),
        messages: [...messages]
      };
      
      setConversationHistory(prev => [newConversation, ...prev].slice(0, 10)); // Keep only last 10 conversations
    }
    
    // Start a new session
    const newSessionId = Math.random().toString(36).substring(2, 15);
    setSessionId(newSessionId);
    
    // Reset messages with welcome message
    const welcomeMessage = { 
      id: generateMessageId(),
      text: "Welcome to H-Tech Digital! How can we assist you today?", 
      sender: "bot", 
      options: ["Our Services", "Contact Us", "Book a Demo", "Pricing"],
      timestamp: new Date().toISOString(),
      read: false
    };
    
    setMessages([welcomeMessage]);
  };

  // Navigate to a service page
  const navigateToService = (service) => {
    // Map service names to their respective routes
    const serviceRoutes = {
      "Application Development": "/web-development",
      "Software Quality Assurance": "/quality-assurance",
      "Consultancy": "/it-consultancy",
      "Digital Marketing & SEO": "/digital-seo",
      "Cyber Security": "/cyber-security",
      "Support Engineering": "/services/support-engineering"
    };
    
    // Navigate to the corresponding page
    if (serviceRoutes[service]) {
      navigate(serviceRoutes[service]);
    }
  };

  // Handle sending a message
  const sendMessage = async (message) => {
    if (!message) return;

    const userMessage = { 
      id: generateMessageId(),
      text: message, 
      sender: "user",
      timestamp: new Date().toISOString(),
      read: true
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsBotTyping(true);

    // Simulate API call to get bot response
    const botResponse = await getBotResponse(message);
    
    // Add a slight delay to simulate bot typing
    setTimeout(() => {
      setMessages((prev) => [...prev, botResponse]);
      setIsBotTyping(false);
      
      // Navigate to service page if needed
      if (botResponse.navigate) {
        setTimeout(() => {
          navigateToService(botResponse.navigateTo);
        }, 1000);
      }
    }, 1500);
  };

  // Get bot response based on user message
  const getBotResponse = async (message) => {
    // This is where you'd normally make an API call to your chatbot backend
    // For now, we'll use a simple switch statement to mimic responses
    
    const botMessageId = generateMessageId();
    const timestamp = new Date().toISOString();
    
    let response = {
      id: botMessageId,
      sender: "bot",
      timestamp: timestamp,
      read: false
    };
    
    switch (message.toLowerCase()) {
      case "our services":
        response = {
          ...response,
          text: "We offer a range of IT services. Which one would you like to learn more about?",
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
      case "pricing":
        response = {
          ...response,
          text: "Our pricing is customized based on your specific needs. Would you like to request a quote?",
          options: ["Request a Quote", "Book a Demo", "Back to Services"]
        };
        break;
      case "request a quote":
        response = {
          ...response,
          text: "Please provide the following information for a custom quote: your company name, project requirements, and timeline. Alternatively, you can schedule a call with our sales team.",
          options: ["Schedule a Call", "Back to Services"],
          links: [
            { text: "Fill Quote Form", url: "/quote" }
          ]
        };
        break;
      case "book a demo":
        response = {
          ...response,
          text: "Great! You can book a demo of our services through our online calendar. Select a date and time that works for you.",
          links: [
            { text: "Book a Demo", url: "/book-demo" }
          ],
          options: ["Our Services", "Contact Us"]
        };
        break;
      case "application development":
        response = { 
          ...response,
          text: "We provide full-cycle application development services for mobile and web. Our expertise covers React, Node.js, Flutter, and more! Would you like to visit our application development page?", 
          options: ["Visit App Development Page", "Back to Services"],
          image: "/images/app-dev-preview.jpg" // This would be a real image path in your project
        };
        break;
      case "visit app development page":
        response = { 
          ...response,
          text: "Great! I'll take you to our Application Development page.", 
          navigate: true,
          navigateTo: "Application Development"
        };
        break;
      case "software quality assurance":
        response = { 
          ...response,
          text: "We specialize in Manual & Automation testing for OTT platforms, mobile apps, and web applications. Our tools include Azure DevOps, Kibana, Postman, and Burp Suite. Would you like to visit our QA page?", 
          options: ["Visit QA Page", "Back to Services"]
        };
        break;
      case "visit qa page":
        response = { 
          ...response,
          text: "Great! I'll take you to our Software Quality Assurance page.", 
          navigate: true,
          navigateTo: "Software Quality Assurance"
        };
        break;
      case "consultancy":
        response = { 
          ...response,
          text: "We offer expert IT consultancy to help businesses achieve digital transformation through strategic planning and technology solutions. Would you like to visit our consultancy page?", 
          options: ["Visit Consultancy Page", "Back to Services"]
        };
        break;
      case "visit consultancy page":
        response = { 
          ...response,
          text: "Great! I'll take you to our Consultancy page.", 
          navigate: true,
          navigateTo: "Consultancy"
        };
        break;
      case "digital marketing & seo":
        response = { 
          ...response,
          text: "Boost your online presence with our SEO, content marketing, PPC, and social media marketing strategies. Would you like to visit our digital marketing page?", 
          options: ["Visit Digital Marketing Page", "Back to Services"]
        };
        break;
      case "visit digital marketing page":
        response = { 
          ...response,
          text: "Great! I'll take you to our Digital Marketing & SEO page.", 
          navigate: true,
          navigateTo: "Digital Marketing & SEO"
        };
        break;
      case "cyber security":
        response = { 
          ...response,
          text: "We provide penetration testing, vulnerability assessments, and security audits to protect your systems from cyber threats. Would you like to visit our cyber security page?", 
          options: ["Visit Cyber Security Page", "Back to Services"]
        };
        break;
      case "visit cyber security page":
        response = { 
          ...response,
          text: "Great! I'll take you to our Cyber Security page.", 
          navigate: true,
          navigateTo: "Cyber Security"
        };
        break;
      case "support engineering":
        response = { 
          ...response,
          text: "Our support engineering team ensures seamless operation of IT infrastructure and provides 24/7 assistance. Would you like to visit our support engineering page?", 
          options: ["Visit Support Engineering Page", "Back to Services"]
        };
        break;
      case "visit support engineering page":
        response = { 
          ...response,
          text: "Great! I'll take you to our Support Engineering page.", 
          navigate: true,
          navigateTo: "Support Engineering"
        };
        break;
      case "schedule a call":
        response = {
          ...response,
          text: "You can schedule a call with our sales team using our online calendar. Please select a date and time that works for you.",
          links: [
            { text: "Schedule Call", url: "/schedule-call" }
          ],
          options: ["Our Services", "Contact Us"]
        };
        break;
      case "contact us":
        response = { 
          ...response,
          text: "You can reach us via email at support@htechdigital.com or call us at +1234567890.", 
          contact: true,
          options: ["Our Services", "Book a Demo"]
        };
        break;
      case "back to services":
        response = {
          ...response,
          text: "Which service would you like to learn more about?",
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
      default:
        // For any other message, provide a generic response
        if (message.toLowerCase().includes("thank")) {
          response = { 
            ...response,
            text: "You're welcome! Is there anything else I can help you with?", 
            options: ["Our Services", "Contact Us", "Book a Demo"]
          };
        } else if (message.toLowerCase().includes("price") || message.toLowerCase().includes("cost")) {
          response = { 
            ...response,
            text: "Our pricing varies based on project requirements. Would you like to request a custom quote?", 
            options: ["Request a Quote", "Book a Demo", "Contact Us"]
          };
        } else if (message.toLowerCase().includes("time") || message.toLowerCase().includes("long")) {
          response = { 
            ...response,
            text: "Project timelines vary based on complexity. We can provide an estimate after understanding your specific requirements.", 
            options: ["Book a Demo", "Contact Us"]
          };
        } else {
          response = { 
            ...response,
            text: "I'm here to assist you! You can ask about our services or contact options.", 
            options: ["Our Services", "Contact Us", "Book a Demo", "Pricing"]
          };
        }
    }
    
    return response;
  };

  return {
    messages,
    input,
    setInput,
    isBotTyping,
    sendMessage,
    navigateToService,
    markMessageAsRead,
    resetChat,
    sessionId,
    conversationHistory
  };
};