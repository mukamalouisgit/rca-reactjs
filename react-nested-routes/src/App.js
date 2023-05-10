import {
  BrowserRouter as Router, Link,
  Routes, Route
} from 'react-router-dom'
import './App.css';
import Search from './components/Search';
import List from './components/List';
import Courses from './components/Courses';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="courses">Courses</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />}>
            <Route path="search" element={<Search />} />
            <Route path="list" element={<List />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
