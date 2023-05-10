
import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import './Dropdown.css';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }










    
    return (
        <div className="dropdown">
            <button className='Dropdown-btn' onClick={toggleDropdown}>
                Dropdown
            </button>
            {isOpen && createPortal(
                <div className="dropdown-menu">
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                </div>,
                document.getElementById("portal")
            )}
        </div>
    );
};

export default Dropdown;