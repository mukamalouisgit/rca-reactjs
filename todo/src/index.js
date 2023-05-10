import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// import AboutUs from './components/about-us/AboutUs';
// import Contact from './components/contacts/Contact';
import reportWebVitals from './reportWebVitals';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
// import Contact from './components/contacts/Contact';
// const routing = (  
//   <Router>  
//     <div>  
//       <h1>React Router Example</h1>  
//       <Route path="/" component={App} />  
//       <Route path="/about" component={AboutUs} />  
//       <Route path="/contact" component={Contact} />  
//     </div>  
//   </Router>  
// ) 
// ReactDOM.render(routing, document.getElementById('root'));  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
