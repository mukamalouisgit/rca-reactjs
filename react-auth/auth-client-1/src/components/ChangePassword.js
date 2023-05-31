import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Update this with your API URL


const ChangePassword = () => {

  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));


      const response = await axios.put(`${API_BASE_URL}/users/change-password`, {
        email: user.email,
        password: newPassword,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <div className='contents'>
      <div className='change-password'>
        <div className="mt-3">
          <h1>Change Password</h1>
        </div>
        <form onSubmit={handleChangePassword}>
          <div className="mt-3">
            <label htmlFor="newPassword" className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mt-3">
            <button type="submit" className="btn btn-outline-primary">Change Password</button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default ChangePassword;
