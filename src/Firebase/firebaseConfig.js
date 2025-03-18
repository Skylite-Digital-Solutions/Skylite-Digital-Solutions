// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, getRedirectResult, signOut, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, setPersistence, browserSessionPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
// import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
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

// Firebase services
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);  // Firestore instance
const storage = getStorage(app);  // Storage instance

// Google login handler
const handleGoogleLogin = async () => {
  try {
    const result = await signInWithRedirect(auth, provider);
    console.log("User logged in:", result.user);
  } catch (error) {
    console.error("Error during Google Sign-In:", error.message);
  }
};

// Real-time listener for chat messages (for the Chatbot feature)
const listenForChatMessages = (chatId, callback) => {
  const q = query(collection(db, `chats/${chatId}/messages`), orderBy("timestamp", "asc"));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const messagesData = snapshot.docs.map(doc => doc.data());
    callback(messagesData); // Call the provided callback to update the UI with the latest messages
  });

  return unsubscribe; // Return the unsubscribe function to stop listening when necessary
};

// Add new message to Firestore (for both user and bot)
const sendMessageToFirestore = async (chatId, message) => {
  try {
    await addDoc(collection(db, `chats/${chatId}/messages`), message);
  } catch (error) {
    console.error("Error sending message to Firestore:", error);
  }
};

// Exports for use in other components
export { auth, provider, signInWithRedirect, signInWithPopup, signInWithEmailAndPassword, getRedirectResult, sendPasswordResetEmail, onAuthStateChanged, setPersistence, browserSessionPersistence, browserLocalPersistence, signOut, app, db, storage, handleGoogleLogin, listenForChatMessages, sendMessageToFirestore };