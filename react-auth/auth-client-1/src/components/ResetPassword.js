import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await axios.post(`/api/reset-password/${token}`, { password });
      alert('Password reset successfully!');
    } catch (error) {
      setError('Password reset failed');
      console.error(error);
    }
  };

  return (
    <div className='contents'>
      <div className='reset-password'>
        <h2>Reset Password</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>New Password:</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label>Confirm Password:</label>
            <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-outline-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
