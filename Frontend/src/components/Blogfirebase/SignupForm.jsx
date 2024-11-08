import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import from Firebase
// import { auth } from '../../Firebase/Auth'; // Adjust the path based on your Firebase setup
import '../../styles/BlogFirebasestyles/Signup.css';

const SignupForm = () => {
  const [name, setName] = useState(''); // New state for name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Password confirmation check
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed up:', user);
      setSuccessMessage('Account created successfully!');
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrorMessage('');
    } catch (error) {
      console.error('Error signing up:', error.message);
      setErrorMessage('Error signing up. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <div className='signup-fields'>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        
        <button type="submit">Sign Up</button>
      </form>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default SignupForm;
