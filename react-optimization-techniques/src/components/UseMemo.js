import React, { useState, useMemo } from 'react';

const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const expensiveCalculation = () => {
        // This function is expensive to calculate.
        return Math.pow(2, count);
    };

    const memoizedCalculation = useMemo(() => expensiveCalculation(), [count]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h1>Count: {count}</h1>
            <h2>Memoized Calculation: {memoizedCalculation}</h2>
        </div>
    );
};
export default ParentComponent;