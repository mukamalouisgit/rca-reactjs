import React from "react";

class MultipleStateInClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: 0,
            isStudent: false
        };
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handleAgeChange = (event) => {
        this.setState({ age: parseInt(event.target.value) });
    };

    handleStudentChange = (event) => {
        this.setState({ isStudent: event.target.checked });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name-input">Name:</label>
                    <input type="text" id="name-input" value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <div>
                    <label htmlFor="age-input">Age:</label>
                    <input type="number" id="age-input" value={this.state.age} onChange={this.handleAgeChange} />
                </div>
                <div>
                    <label htmlFor="student-checkbox">Student:</label>
                    <input type="checkbox" id="student-checkbox" checked={this.state.isStudent} onChange={this.handleStudentChange} />
                </div>
                <div>
                    <button type="submit" className="btn btn__primary btn__lg">
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}
export default MultipleStateInClassComponent;
