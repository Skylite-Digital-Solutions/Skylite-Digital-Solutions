import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth'; // Import directly from Firebase
// import { auth } from '../../Firebase/Auth'; // Adjust the path based on your Firebase setup
import '../../styles/BlogFirebasestyles/Signin.css'; // Import the CSS

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed in:', user);
      setSuccessMessage('Successfully signed in!');
      setEmail('');
      setPassword('');
      setErrorMessage('');
    } catch (error) {
      console.error('Error signing in:', error.message);
      setErrorMessage('Error signing in. Please check your credentials.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <div className='signin-fields'>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default SignInForm;
