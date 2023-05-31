import React, { useState } from 'react';
import axios from 'axios';


const API_BASE_URL = 'http://localhost:3000'; // Update this with your API URL

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(API_BASE_URL + '/users/forget-password', { email });
      setSuccess('Password reset email sent!');
    } catch (error) {
      console.log(error);
      setError('Failed to send reset email');
      console.error(error);
    }
  };

  return (
    <div className='contents'>
      <div className='forgot-password'>
        <h2>Forgot Password</h2>
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email:</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-outline-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
