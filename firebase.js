// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-QaFvaj325QXSpg8Kpvp_yaG1sWiydCw",
  authDomain: "skydigital-solutions.firebaseapp.com",
  projectId: "skydigital-solutions",
  storageBucket: "skydigital-solutions.firebasestorage.app",
  messagingSenderId: "774131879750",
  appId: "1:774131879750:web:b8b6c540bc1424ff5c9f47",
  measurementId: "G-EMRVFM52Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);