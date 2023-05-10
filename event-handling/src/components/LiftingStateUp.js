import React, { useState } from 'react';
//Parent component
function LiftingStateUp() {
    const [value, setValue] = useState('');

    function handleValueChange(newValue) {
        setValue(newValue);
    }

    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent1 value={value} onValueChange={handleValueChange} />
            <ChildComponent2 value={value} onValueChange={handleValueChange} />
            <ChildComponent3 value={value} onValueChange={handleValueChange} />
        </div>
    );
}

function ChildComponent1({ value, onValueChange }) {
    function handleInputChange(event) {
        onValueChange(event.target.value);
    }

    return (
        <div>
            <h2>Child Component 1</h2>
            <input type="text" value={value} onChange={handleInputChange} />
        </div>
    );
}

function ChildComponent2({ value, onValueChange }) {
    function handleClick() {
        const newValue = value.toUpperCase();
        onValueChange(newValue);
    }

    return (
        <div>
            <h2>Child Component 2</h2>
            <p>{value}</p>
            <button onClick={handleClick}>Convert to Uppercase</button>
        </div>
    );
}

function ChildComponent3({ value, onValueChange }) {
    function handleButtonClick() {
        const newValue = value + '!';
        onValueChange(newValue);
    }

    return (
        <div>
            <h2>Child Component 3</h2>
            <p>{value}</p>
            <button onClick={handleButtonClick}>Add Exclamation Mark</button>
        </div>
    );
}

export default LiftingStateUp;
