// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';  // If you need authentication

// Firebase configuration (use your config from Firebase console)
// const firebaseConfig = {
//   apiKey: "your-api-key",
//   authDomain: "your-auth-domain",
//   projectId: "your-project-id",
//   storageBucket: "your-storage-bucket",
//   messagingSenderId: "your-sender-id",
//   appId: "your-app-id",
// };

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOcpKY0UEWKDVNxHf4Iy9hUp6i-g6X34Q",
  authDomain: "skylite-digital-solutions.firebaseapp.com",
  projectId: "skylite-digital-solutions",
  storageBucket: "skylite-digital-solutions.firebasestorage.app",
  messagingSenderId: "313922224196",
  appId: "1:313922224196:web:dcc0e2c82323e03442bc11"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // If using authentication

export { db, auth };
