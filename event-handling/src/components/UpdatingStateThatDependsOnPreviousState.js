import React, { useState } from "react";

function UpdatingStateThatDependsOnPreviousState() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}
export default UpdatingStateThatDependsOnPreviousState;
