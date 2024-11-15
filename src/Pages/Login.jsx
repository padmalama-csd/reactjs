// src/Pages/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username && password) {
      navigate('/dashboard'); 
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className='login-box'>
      <h1>LOGIN PAGE</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='username' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        /><br />
        <input 
          type="password" 
          placeholder='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        /><br />
        <button type="submit">Login</button>
      </form>
      <p>Don't you have an account?</p>
      <Link to='/Signup'>Sign-up</Link>
    </div>
  );
}

export default Login;
