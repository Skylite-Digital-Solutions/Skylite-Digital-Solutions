import { getFirestore, writeBatch, collection, doc, Timestamp } from "firebase/firestore";
import { app } from "./firebaseConfig";

// Initialize Firestore
const db = getFirestore(app);

// Define default messages
const defaultMessages = [
  {
    id: "welcome-message",
    message: "Hello! Welcome to Skylite Digital Solutions. How can we assist you today? 😊",
    options: ["Services Overview", "Contact Support", "Request a Callback"],
  },
  {
    id: "services-overview",
    message: "We specialize in:\n- Web and Mobile App Development\n- Quality Assurance and Testing\n- Digital Marketing and SEO\n- Cloud and IT Infrastructure Services\nLet us know which service you're interested in for more details.",
    options: ["Web Development", "Digital Marketing", "Cloud Services"],
  },
  {
    id: "contact-support",
    message: "How can we help you with support today?",
    options: ["Technical Issue", "Billing Inquiry", "Other"],
  },
  {
    id: "request-callback",
    message: "Please provide your contact details, and we'll call you back as soon as possible.",
    options: ["Enter Contact Info"],
  },
];

// Function to add default messages to Firestore
const addDefaultMessages = async () => {
  const batch = writeBatch(db);  // Create a batch to handle multiple writes
  try {
    // Loop through each message and add it to Firestore
    defaultMessages.forEach((msg) => {
      const docRef = doc(collection(db, "chatbot-responses"), msg.id);  // Reference to the document

      batch.set(docRef, {
        message: msg.message,
        options: msg.options,
        timestamp: Timestamp.now(), // Add timestamp to track when the message is added
      });
      console.log(`Adding message: ${msg.id}`);
    });

    // Commit the batch
    await batch.commit();
    console.log("Default messages added successfully.");
  } catch (error) {
    console.error("Error adding default messages:", error.message);
    // Consider retry logic if needed
  }
};

// Run the function to add the default messages
addDefaultMessages();
