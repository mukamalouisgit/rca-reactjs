import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:3000'; // Update this with your API URL


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response= await axios.post(`${API_BASE_URL}/users/signup`, { email, password });
      setMessage(response.data.message);
      // You can redirect the user to another page here if needed
    } catch (error) {
      console.log(error)
      setError('Sign up failed');
      console.error(error);
    }
  };

  return (
    <div className='contents'>
      <div className='signup'>
        <div className="mt-3">
          <h2>Sign Up</h2>
          {error && <p className='text-danger'>{error}</p>}
          {message && <small className='text-primary'>{message}</small>}
        </div>
        <div className="mt-3">

          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <div className="mt-3">
              <button type="submit" className="btn btn-outline-success">Sign Up</button>
            </div>
          </form>
        </div>
        <div className="mt-3">

          Already have an account? <Link to="/">Sign In</Link>
        </div>
      </div>

    </div>
  );
};

export default SignUp;
