import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  provider,
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword,
} from "../Firebase/firebaseConfig";
import "../styles/Login.css";

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check for redirect results and handle Google login
  useEffect(() => {
    const checkRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result && result.user) {
          setUser(result.user);
          onLoginSuccess(result.user); // Notify parent component
          navigate("/home");
        }
      } catch (err) {
        console.error("Error during redirect sign-in:", err);
        setError("Failed to sign in. Please try again.");
      }
    };
    checkRedirectResult();
  }, [navigate, onLoginSuccess]);

  // Handle email/password login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      onLoginSuccess(userCredential.user);
      navigate("/home");
    } catch (err) {
      console.error("Email Login Error:", err);
      setError("Invalid email or password. Please try again.");
    }
  };

  // Trigger Google login redirect
  const handleGoogleLogin = async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (err) {
      console.error("Google Login Error:", err);
      setError("Failed to log in with Google. Please try again.");
    }
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.error("Logout Error:", err);
      setError("Failed to log out. Please try again.");
    }
  };

  return (
    <div className="login-container">
      {user ? (
        <div className="user-info">
          <p>Welcome, {user.displayName || user.email}</p>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      ) : (
        <>
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
            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <div className="divider">OR</div>

          <button onClick={handleGoogleLogin} className="google-login-button">
            Login with Google
          </button>

          {error && <p className="error-message">{error}</p>}
        </>
      )}
    </div>
  );
};

export default LoginPage;
