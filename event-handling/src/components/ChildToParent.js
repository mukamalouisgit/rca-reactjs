import React, { useState } from 'react';
// Child component
function ChildComponent({ onSubmit }) {
    const [formData, setFormData] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent default form submission behavior
        onSubmit(formData); // pass form data to parent component
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <h1>Child component</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

// Parent component
function ParentComponent() {
    const handleFormSubmit = (formData) => {
        console.log(formData); // do something with the form data in the parent component
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent onSubmit={handleFormSubmit} />
        </div>
    );
}

export default ParentComponent;
