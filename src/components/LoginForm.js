import React, { useContext, useState } from 'react';
import { FaFacebookF, FaMicrosoft, FaAmazon, FaPaypal } from "react-icons/fa";
import logo from '../debt-logo.png';
import './LoginForm.css';
import GoogleIn from './GoogleLogin';
import { loginContext } from '../context/loginContext';

const LoginForm = ({ onLogin, onSignUpClick, onGoogleLogin }) => {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  const { setUser, setIsLoggedIn } = useContext(loginContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(userID, password);
  };

  const handleGoogleLogin = (googleUser) => {
    setUser(googleUser);
    setIsLoggedIn(true);
  };

  // For google logout
  // const handleGoogleLogout = () => {
  //   setUser(null);
  //   setIsLoggedIn(false);
  // };

  return (
    <div className="loginForm">
        <div className="logo-container">
            <img src={logo} alt="Debt-Logo" className="logo" />
        </div>

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

        <GoogleIn onGoogleLogin={handleGoogleLogin} className='social-login-btn google heck_button'/>

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
