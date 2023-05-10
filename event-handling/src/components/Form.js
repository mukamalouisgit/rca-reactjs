import { useState } from "react";

function Form() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");


    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setMessage('Hi ' + name)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                Enter name
            </h2>
            <input
                type="text"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
            <h5 className="label-wrapper">
                {message}
            </h5>
        </form>
    );
}

export default Form;