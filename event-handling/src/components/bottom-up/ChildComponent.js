import React from 'react';

function ChildComponent(props) {
    const handleClick = () => {
        props.onData('Hello from child component!');
    };

    return (
        <div>
            <button onClick={handleClick}>Send Data to Parent</button>
        </div>
    );
}
export default ChildComponent;
