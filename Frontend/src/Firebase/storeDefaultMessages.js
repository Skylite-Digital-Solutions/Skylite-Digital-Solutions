import { initializeApp } from "firebase/app";
import { getFirestore, writeBatch, doc, collection } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1bO_W6OOIqRs9vhn7RvOrHd1UWs9d8vA",
    authDomain: "skylite-digital-solution-e3b6a.firebaseapp.com",
    projectId: "skylite-digital-solution-e3b6a",
    storageBucket: "skylite-digital-solution-e3b6a.firebasestorage.app",
    messagingSenderId: "443963443651",
    appId: "1:443963443651:web:19ac006425d4c33d3c1576",
    measurementId: "G-BDZT82842F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  // Define your default messages with updated options
  const defaultMessages = [
    {
      id: "welcome-message",
      message: "Hello! Welcome to Skylite Digital Solutions. How can we assist you today? 😊",
      options: ["Query", "Contact Us", "Our Services"],
    },
    {
      id: "query-message",
      message: "Please select a service you'd like more information on.",
      options: ["Web Development", "Quality Assurance", "Digital Marketing", "SEO", "Cyber Security", "Cloud Services"],
    },
    {
      id: "contact-us-message",
      message: "Please fill out the contact form below, and we'll get back to you soon.",
      options: ["Fill the Form"],  // Option to show the contact form in the chatbox
    },
    {
      id: "our-services-message",
      message: "Here are the services we offer. Click on a service for more details.",
      options: [
        "Web Development",
        "Quality Assurance",
        "Digital Marketing",
        "SEO",
        "Cyber Security",
        "Cloud Services",
      ],
    },
    // Add individual service descriptions with links
    {
      id: "web-development-service",
      message: "We provide cutting-edge web development services. For more details, visit [Web Development Service](https://www.yourwebsite.com/web-development).",
      options: [],
    },
    {
      id: "digital-marketing-service",
      message: "Our digital marketing services will help you grow your online presence. For more details, visit [Digital Marketing Service](https://www.yourwebsite.com/digital-marketing).",
      options: [],
    },
    // Similarly, add other services here...
  ];
  
  // Function to add the default messages to Firestore
  const addDefaultMessages = async () => {
    const batch = writeBatch(db);  // Create a batch to write multiple documents at once
    try {
      // Loop through each default message and add it to Firestore
      defaultMessages.forEach((msg) => {
        const docRef = doc(collection(db, "chatbot-responses"), msg.id);  // Create a reference to the document
        batch.set(docRef, msg);  // Set the document with the default message
      });
  
      // Commit the batch write
      await batch.commit();
      console.log("Default messages added successfully.");
    } catch (error) {
      console.error("Error adding default messages:", error);
    }
  };
  
  // Run the function to add default messages
  addDefaultMessages();  