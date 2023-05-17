import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Dropdown.css';


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return ReactDOM.createPortal(
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Dropdown
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}
    </div>,
    document.getElementById('dropdown-root')
  );
};
export default Dropdown  ;