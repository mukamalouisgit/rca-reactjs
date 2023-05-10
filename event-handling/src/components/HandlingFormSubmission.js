import React, { useState } from 'react';

function HandlingFormSubmission() {
    const [name, setName] = useState('');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        // Send form data to server
        fetch('/api/submitName', {
            method: 'POST',
            body: JSON.stringify({ name }),
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

        // Reset form fields
        setName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}
export default HandlingFormSubmission;
