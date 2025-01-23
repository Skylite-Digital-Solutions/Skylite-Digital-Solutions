import React, { useState } from "react";
import { auth, provider, signInWithRedirect, signOut } from "./firebaseConfig"; // Update the path if needed

const GoogleLogin = ({ onLoginSuccess }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      onLoginSuccess(result.user); // Pass user info to parent component
    } catch (err) {
      console.error("Login Error:", err);
      setError("Failed to log in. Please try again.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      onLoginSuccess(null); // Clear user info in parent component
    } catch (err) {
      console.error("Logout Error:", err);
      setError("Failed to log out. Please try again.");
    }
  };

  return (
    <div className="google-login-container">
      {!user ? (
        <button onClick={handleLogin} className="google-login-button">
          Login with Google
        </button>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleLogout} className="google-logout-button">
            Logout
          </button>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default GoogleLogin;
