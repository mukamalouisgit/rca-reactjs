
import React from "react";

function MultipleStateInFunctionalComponent(props) {
    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState(0);
    const [isStudent, setIsStudent] = React.useState(false);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleAgeChange(event) {
        setAge(parseInt(event.target.value));
    }

    function handleStudentChange(event) {
        setIsStudent(event.target.checked);
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log({ name, age, isStudent })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name-input">Name:</label>
                <input type="text" id="name-input" value={name} onChange={handleNameChange} />
            </div>
            <div>
                <label htmlFor="age-input">Age:</label>
                <input type="number" id="age-input" value={age} onChange={handleAgeChange} />
            </div>
            <div>
                <label htmlFor="student-checkbox">Student:</label>
                <input type="checkbox" id="student-checkbox" checked={isStudent} onChange={handleStudentChange} />
            </div>
            <div>
                <button type="submit" className="btn btn__primary btn__lg">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default MultipleStateInFunctionalComponent;
