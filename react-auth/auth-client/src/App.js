
import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
// import Footer from './components/Footer';

const API_BASE_URL = 'http://localhost:3000'; // Update this with your API URL

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [names, setNames] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [token, setToken] = useState('');
  
  

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (password.match(confirmPassword)) {
        const response = await axios.post(`${API_BASE_URL}/users/signup`, {
          names,
          email,
          password,
          confirmPassword
        });
        console.log(response.data);
      } else {
        console.log("Password mismatch");

      }

    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/users/signin`, {
        email,
        password,
      });
      setUser(response.data.user);
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/forgot-password`, {
        email,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/change-password`, {
        email,
        password: newPassword,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleSignOut = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('token');
  };

  const loggedIn = !!user;

  return (
    <div className="container bg-light">

      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><i className="bi bi-egg-fried"></i> Preparation</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {loggedIn ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={handleSignOut}>Sign Out</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signin">Sign In</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                  </li>
                </>
              )}
            </ul>
            <span className="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
        </div>
      </nav>




      <Routes>
        <Route exact path="/"
          element={<Home user={user} />}
        />
        <Route
          path="/signup"
          element={loggedIn ? (
            <Navigate to="/" />
          ) : (
            <SignUp
              names={names}
              email={email}
              password={password}
              setNames={setNames}
              setEmail={setEmail}
              setPassword={setPassword}
              setConfirmPassword={setConfirmPassword}
              handleSignUp={handleSignUp}
            />
          )} />
        <Route
          path="/signin"
          element={loggedIn ? (
            <Navigate to="/" />
          ) : (
            <SignIn
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              handleSignIn={handleSignIn}
              handleForgotPassword={handleForgotPassword}
            />
          )}
        />
        <Route
          path="/change-password"
          element={loggedIn ? (
            <ChangePassword
              newPassword={newPassword}
              setNewPassword={setNewPassword}
              handleChangePassword={handleChangePassword}
            />
          ) : (
            <Navigate to="/signin" />
          )} />
      </Routes>

    </div>

  );
}

function Home({ user }) {
  return (
    <div>
      <h1>Welcome to the Home page</h1>
      {user && (
        <div>
          <h2>User Details:</h2>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

function SignUp({ names, email, password, confirmPassword, setNames, setEmail, setPassword, setConfirmPassword, handleSignUp }) {
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <div className="mb-3">
          <label htmlFor="names" className="form-label">Full name</label>
          <input
            type="text"
            className="form-control"
            id="names"
            value={names}
            onChange={(e) => setNames(e.target.value)}
            required
          />
        </div>
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
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
}

function SignIn({ email, password, setEmail, setPassword, handleSignIn, handleForgotPassword }) {
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
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

      <div className="mt-3">
        <button className="btn btn-link" onClick={handleForgotPassword}>Forgot password?</button>
      </div>
    </div>
  );
}

function ChangePassword({ newPassword, setNewPassword, handleChangePassword }) {
  return (
    <div>
      <h1>Change Password</h1>
      <form onSubmit={handleChangePassword}>
        <div className="mb-3">
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
        <button type="submit" className="btn btn-primary">Change Password</button>
      </form>
    </div>
  );
}

export default App;

