import './App.css';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import { Routes, Route } from "react-router-dom";
import NoPage from './components/NoPage';
import Header from './components/Header';
import Footer from './components/Footer';

// import Header from './components/Header';

function App() {
  return (
    <div className="App">
       {/**Begin page content */}
       <Header />
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
     {/**End page content */}
     <Footer />
    </div>
  );
}

export default App;
