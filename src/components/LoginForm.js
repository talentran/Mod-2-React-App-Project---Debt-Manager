import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(userID, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" value={userID} onChange={e => setUserID(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <input type="submit" value="Login" />
    </form>
  );
};

export default LoginForm;