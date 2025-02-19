import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  provider,
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword,
} from "../Firebase/firebaseConfig";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {user ? (
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">Welcome, {user.displayName || user.email}</p>
            <button
              onClick={handleLogout}
              className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <form className="space-y-4" onSubmit={handleEmailLogin}>
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>

              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Login
              </button>
            </form>

            <div className="my-4 text-center">
              <div className="text-gray-500">OR</div>
            </div>

            <button
              onClick={handleGoogleLogin}
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200"
            >
              Login with Google
            </button>

            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
