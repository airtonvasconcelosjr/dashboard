import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username.length >= 3) {
      onLogin(username);
    } else {
      setError('Username must have at least 3 characters');
    }
  };

  return (
    <div className="page-background">
      <div className="modal">
        <h2 className="modal-title">Welcome to CodeLeap network!</h2>
        <p> Please enter your username</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error && <div className="error-message">{error}</div>}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginModal;
