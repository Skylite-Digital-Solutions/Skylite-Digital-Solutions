import React, { useState } from "react";
import { auth, provider, signInWithRedirect } from "../Firebase/firebaseConfig"; // Ensure the path is correct
import '../styles/Login.css';

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted with:", { email, password });
    // Add backend logic for email/password login if required
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithRedirect(auth, provider);
      onLoginSuccess(result.user); // Pass user info to parent component
    } catch (err) {
      console.error("Google Login Error:", err);
      setError("Failed to log in with Google. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleEmailLogin}>
        <h2 className="login-title">Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>

      <div className="divider">OR</div>

      <button onClick={handleGoogleLogin} className="google-login-button">
        Login with Google
      </button>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LoginPage;
