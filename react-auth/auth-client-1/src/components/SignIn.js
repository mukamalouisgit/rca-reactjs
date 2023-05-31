import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const API_BASE_URL = 'http://localhost:3000'; // Update this with your API URL

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // const [token, setToken] = useState('');
  // const [user, setUser] = useState(null);

  const handleForgotPassword = async (e) => {
    navigate("/forgot-password");

    // e.preventDefault();
    // try {
    //   const response = await axios.post(`${API_BASE_URL}/forgot-password`, {
    //     email,
    //   });
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error.response.data);
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/users/signin`, { email, password });
      const user = JSON.stringify(response.data.user);

      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem("user", user);
      navigate("/");
      // navigate('/', { state: { user } });//This requires useLocation to access this value in Home component

    } catch (error) {
      setMessage('Sign in failed');
      console.error(error.response.data);

    }
  };

  return (
    <div className='contents'>
      <div className='signin'>
        <div className="mt-3">
          <h2>Sign In</h2>
          {message && <p>{message}</p>}
        </div>

        <div className="mt-3">
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Sign In</button>
          </form>
        </div>

        <div className="mt-3">
          <button className="btn btn-link text-decoration-none" onClick={handleForgotPassword}>Forgot password?</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
