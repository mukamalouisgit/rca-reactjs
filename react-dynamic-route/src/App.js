import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Create from './components/Create';
import Todos from './components/Todos';
import Update from './components/Update';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
