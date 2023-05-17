import React, { useState } from 'react';
import './Modal.css';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Modal Title</h2>
                        <p>This is the modal content.</p>
                        <button onClick={closeModal}>Close Modal</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
