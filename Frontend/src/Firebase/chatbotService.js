import { doc, getDoc } from "firebase/firestore";
import { db } from '../Firebase/firebaseConfig'; // Adjust the path if necessary

// Function to get a specific chatbot message by ID
export const getChatbotMessage = async (messageId) => {
  try {
    const docRef = doc(db, "chatbot-responses", messageId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data(); // Return the message data if it exists
    } else {
      console.log("No such document!");
      return null; // Return null if document doesn't exist
    }
  } catch (error) {
    console.error("Error fetching chatbot message:", error);
    return null; // Return null in case of error
  }
};
