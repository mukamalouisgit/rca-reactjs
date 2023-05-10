import React from 'react';
import useCustomFormHook from './useCustomFormHook';
import './styles.css';

const Form = () => {
    const { values, errors, handleChange, handleSubmit } = useCustomFormHook();

    return (
        <div className='container'>
            <div class="signup-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for='name'> Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                        <div >
                            {errors.name && <small className='error-message'>{errors.name}</small>}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        <div>
                            {errors.email && <small className='error-message'>{errors.email}</small>}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <div>
                            {errors.password && <small className='error-message'>{errors.password}</small>}
                        </div>                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Form;
