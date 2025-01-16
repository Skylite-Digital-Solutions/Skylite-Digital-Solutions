import { getFirestore, writeBatch, collection, doc } from "firebase/firestore";
import { app } from "../Firebase/firebaseConfig";

const db = getFirestore(app);

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
];

const addDefaultMessages = async () => {
  const batch = writeBatch(db);
  try {
    defaultMessages.forEach((msg) => {
      const docRef = doc(collection(db, "chatbot-responses"), msg.id);
      batch.set(docRef, {
        message: msg.message,
        options: msg.options,
      });
    });
    await batch.commit();
    console.log("Default messages added successfully.");
  } catch (error) {
    console.error("Error adding default messages:", error);
  }
};

addDefaultMessages();
