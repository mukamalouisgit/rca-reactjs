
import React from "react";

 function SubmitFormInput(props) {
    const [inputValue, setInputValue] = React.useState("");

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submitted value:", inputValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="my-input">Enter something:</label>
            <input type="text" id="my-input" value={inputValue} onChange={handleInputChange} />
            <button type="submit">Submit</button>
        </form>
    );
}
export default  SubmitFormInput;