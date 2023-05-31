import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import "./App.css";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ChangePassword from './components/ChangePassword';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';



function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="App">
      <BrowserRouter>
        {/**Begin page content */}
        <Header user={user} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home user={user} />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path='/reset-password' element={<ResetPassword/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>


          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
