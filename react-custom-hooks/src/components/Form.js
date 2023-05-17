/**
 * Now, let's create our custom hook. For this example, 
 * we want our custom hook to encapsulate controlled component behavior for our input element. 
 * In other words, 
 * we want to be able to bind the value and onChange attributes together since they are repeated severally 
 */
import React from 'react';
import useInput from './useInput';

const Form = () => {
    const [name, bindName, resetName] = useInput('');
    const [email, bindEmail, resetEmail] = useInput('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}, Email: ${email}`);
        resetName();
        resetEmail();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" {...bindName} />
            </label>
            <label>
                Email:
                <input type="email" {...bindEmail} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
