import React, { useState } from 'react';


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

function ParentComponent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(25000)
    const incrementAge = () => {
        setAge(age + 1);
    }
    const incrementSalary = () => {
        setSalary(salary + 1000);
    }
    return (
        <div>
            <Title />
            <Count text="age" count={age} />
            <Button handleClick={incrementAge}>Increment my age</Button>
            <Count text="salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment my salary</Button>
        </div>
    );
}
export default ParentComponent;


