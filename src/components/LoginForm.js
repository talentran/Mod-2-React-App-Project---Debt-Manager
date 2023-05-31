import React, { useState } from 'react';
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
        <button type="submit" className="login-btn">Login</button>
      </form>
      <br></br>
      <label>
        Register for an account:
      </label>
      <button className="signup-btn" onClick={onSignUpClick}>Sign Up</button>
    </div>
  );
};

export default LoginForm;
