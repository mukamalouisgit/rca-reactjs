import React from 'react';
import { useState } from 'react';

export default function ControlledForm() {

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input
                        value={firstName}
                        onChange={e => setfirstName(e.target.value)}
                        type='text' />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        value={lastName}
                        onChange={e => setlastName(e.target.value)}
                        type='text'
                    />
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}