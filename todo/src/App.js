//import logo from './logo.svg';
import './App.css';
import AboutUs from './components/about-us/AboutUs';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './components/contacts/Contact';
import Todos from './components/todos/Todos';
import Create from './components/todos/Create';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import Update from './components/todos/Update';



function App() {
  return (
    <div className="App">
      {/**Begin page content */}
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;