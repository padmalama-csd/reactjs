import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='signup-container'>
      <h1>Sign Up Now</h1>
      <div className='create-account'>
        <p>Create an account now</p>
        <form>
          <input type='text' placeholder='Enter username' className='input-field' /><br />
          <input type='number' placeholder='Enter number' className='input-field' /><br />
          <input type='password' placeholder='New password' className='input-field' /><br />
        </form>
        <Link to='/react9306'>
          <button className='back-button'>Back to Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
