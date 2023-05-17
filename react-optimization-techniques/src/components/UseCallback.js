import React, { useState, useCallback } from 'react';

function Title() {
    console.log("Title Rendering");
    return (
        <div>
            <h2> useCallBack hook</h2>
        </div>
    );
}


function Button(props) {
    console.log(`Button clicked ${props.children}`);
    return (
        <div>
            <button onClick={props.handleClick}> {props.children} </button>
        </div>
    );
}

function Count(props) {
    console.log("Count rendering");
    return (
        <div>
            {props.text} is {props.count}
        </div>
    );
}
// This is ho to memoize components in a single file.
// N.B:If each component is a file on its own, you memoize during export. e.g: export default React.memo(Title);
const MemoizedTitle = React.memo(Title);
const MemoizedButton = React.memo(Button);
const MemoizedCount = React.memo(Count);


function ParentComponent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(25000);
    
    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);
    return (
        <div>
            <MemoizedTitle />
            <MemoizedCount text="age" count={age} />
            <MemoizedButton handleClick={incrementAge}>Increment my age</MemoizedButton>
            <MemoizedCount text="salary" count={salary} />
            <MemoizedButton handleClick={incrementSalary}>Increment my salary</MemoizedButton>
        </div>
    );
}
export default ParentComponent;


