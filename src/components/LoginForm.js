import React, { useState } from 'react';
import { FaGoogle, FaFacebookF, FaMicrosoft, FaAmazon, FaPaypal } from "react-icons/fa";
import './LoginForm.css';

const LoginForm = ({ onLogin, onSignUpClick }) => {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(userID, password);
  };

  return (
    <div className="loginForm">
      <h1>Welcome to Tri - Debt Management Application</h1>
      <h2>Your Debt Manager is greeting you!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Your ID:
            <input type="text" value={userID} onChange={e => setUserID(e.target.value)} />
        </label>
        <label>
          Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>

        <div className="remember-me">
            <input type="checkbox" id="remember-me-checkbox" />
            <label htmlFor="remember-me-checkbox">Remember me</label>
        </div>

        <a href="#future-feature" className="forgot-password">Forgot your password?</a>

        <button type="submit" className="login-btn">Login</button>
        </form>

        <p>Or login with:</p>

        <button className="social-login-btn google">
            <FaGoogle />
            Log in with Google
        </button>

        <button className="social-login-btn facebook">
            <FaFacebookF />
            Log in with Facebook
        </button>

        <button className="social-login-btn microsoft">
            <FaMicrosoft />
            Log in with Microsoft
        </button>

        <button className="social-login-btn amazon">
            <FaAmazon />
            Log in with Amazon
        </button>

        <button className="social-login-btn paypal">
            <FaPaypal />
            Log in with PayPal
        </button>
        <br></br>
        <label>
            Register for an account:
        </label>
        <button className="signup-btn" onClick={onSignUpClick}>Sign Up</button>
    </div>
  );
};

export default LoginForm;
