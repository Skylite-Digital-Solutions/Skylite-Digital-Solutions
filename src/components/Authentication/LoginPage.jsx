import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  provider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
  signOut,
} from "../../Firebase/firebaseConfig";

const LoginPage = ({ onLoginSuccess, redirectPath = "/" }) => {
  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // UI states
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);

  // Auth state
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Handle auth state changes
  useEffect(() => {
    console.log("Setting up auth state listener");
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth state changed:", currentUser);
      setUser(currentUser);
      if (currentUser) {
        onLoginSuccess?.(currentUser);
        navigate(redirectPath);
      }
    });

    return () => unsubscribe();
  }, [onLoginSuccess, navigate, redirectPath]);

  // Check for redirect results and handle Google login
  useEffect(() => {
    const checkRedirectResult = async () => {
      try {
        setIsLoading(true);
        console.log("Checking redirect result...");
        
        const result = await getRedirectResult(auth);
        console.log("Redirect result:", result);

        if (result?.user) {
          setUser(result.user);
          onLoginSuccess?.(result.user);
          navigate(redirectPath);
        }
      } catch (err) {
        console.error("Error during redirect sign-in:", err);
        setError(getErrorMessage(err));
      } finally {
        setIsLoading(false);
      }
    };

    checkRedirectResult();
  }, [onLoginSuccess, navigate, redirectPath]);

  // Get user-friendly error messages
  const getErrorMessage = (error) => {
    console.error("Authentication error:", error);
    const errorCode = error?.code || '';

    switch (errorCode) {
      case 'auth/invalid-email':
        return 'The email address is not valid.';
      case 'auth/user-disabled':
        return 'This account has been disabled.';
      case 'auth/user-not-found':
        return 'No account found with this email.';
      case 'auth/wrong-password':
        return 'Incorrect password.';
      case 'auth/too-many-requests':
        return 'Too many failed login attempts. Please try again later.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your connection.';
      case 'auth/popup-closed-by-user':
        return 'Login popup was closed. Please try again.';
      case 'auth/cancelled-popup-request':
        return 'Login process was interrupted. Please try again.';
      case 'auth/popup-blocked':
        return 'Login popup was blocked by your browser. Please allow popups for this site.';
      default:
        return `Authentication error: ${error?.message || 'Unknown error occurred'}`;
    }
  };

  // Handle email/password login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    
    setIsLoading(true);
    setError("");

    try {
      console.log("Attempting email login for:", email);

      const persistenceType = rememberMe ? browserLocalPersistence : browserSessionPersistence;
      console.log("Setting persistence to:", rememberMe ? "LOCAL" : "SESSION");
      await setPersistence(auth, persistenceType);

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful:", userCredential.user);
      navigate(redirectPath);
    } catch (err) {
      console.error("Email Login Error:", err);
      setError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  // Trigger Google login with popup and redirect fallback
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError("");

    try {
      console.log("Setting authentication persistence...");
      const persistenceType = rememberMe ? browserLocalPersistence : browserSessionPersistence;
      await setPersistence(auth, persistenceType);

      console.log("Trying Google sign-in via popup...");
      const result = await signInWithPopup(auth, provider);
      console.log("Popup login successful:", result.user);
      navigate(redirectPath);
    } catch (popupError) {
      console.warn("Popup login failed, falling back to redirect:", popupError);
      
      if (popupError.code === 'auth/popup-blocked' || 
          popupError.code === 'auth/cancelled-popup-request' ||
          popupError.code === 'auth/popup-closed-by-user') {
        setError(getErrorMessage(popupError));
        setIsLoading(false);
        return;
      }
      
      try {
        console.log("Initiating Google sign-in redirect...");
        await signInWithRedirect(auth, provider);
      } catch (redirectError) {
        console.error("Google Login Error:", redirectError);
        setError(getErrorMessage(redirectError));
        setIsLoading(false);
      }
    }
  };

  // Handle password reset
  const handlePasswordReset = async (e) => {
    if (e) e.preventDefault();
    
    if (!email) {
      setError("Please enter your email address first.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
      setShowResetForm(false);
      setTimeout(() => setResetSent(false), 5000);
    } catch (err) {
      console.error("Password Reset Error:", err);
      setError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Logout Error:", err);
      setError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <nav className="w-full bg-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-lg font-semibold">MyApp</h1>
        {user ? (
          <div className="flex items-center space-x-4">
            <p className="text-sm font-medium">{user.email}</p>
            {user.displayName && (
              <p className="text-sm font-medium">{user.displayName}</p>
            )}
            {user.photoURL && (
              <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full" />
            )}
            <button
              onClick={handleLogout}
              disabled={isLoading}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-red-400"
            >
              {isLoading ? "Logging out..." : "Logout"}
            </button>
          </div>
        ) : null}
      </nav>

      {!user && (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-8">
          {showResetForm ? (
            <form className="space-y-4" onSubmit={handlePasswordReset}>
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Reset Password</h2>
              
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="w-full p-3 border rounded-lg"
              />
              
              <button 
                type="submit" 
                disabled={isLoading} 
                className="w-full py-3 bg-blue-600 text-white rounded-lg"
              >
                {isLoading ? "Sending..." : "Send Reset Email"}
              </button>
              
              <button
                type="button"
                onClick={() => setShowResetForm(false)}
                className="w-full py-3 bg-gray-300 text-gray-800 rounded-lg"
              >
                Back to Login
              </button>
            </form>
          ) : (
            <>
              <form className="space-y-4" onSubmit={handleEmailLogin}>
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="w-full p-3 border rounded-lg"
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  className="w-full p-3 border rounded-lg"
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="mr-2"
                    />
                    <label htmlFor="rememberMe" className="text-sm text-gray-600">Remember me</label>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowResetForm(true)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading} 
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
                >
                  {isLoading ? "Logging in..." : "Login with Email"}
                </button>
              </form>

              <div className="mt-4 text-center text-gray-500 text-sm">- OR -</div>

              <button
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full py-3 bg-red-600 text-white rounded-lg mt-3 hover:bg-red-700 disabled:bg-red-400 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                </svg>
                {isLoading ? "Processing..." : "Login with Google"}
              </button>
            </>
          )}

          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
          {resetSent && <p className="mt-4 text-green-500 text-center">Password reset email sent! Check your inbox.</p>}
        </div>
      )}
    </div>
  );
};

export default LoginPage;