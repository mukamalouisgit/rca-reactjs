import { useState } from 'react';

const useCustomFormHook = () => {
    //Initialise  state values
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    //Initialise errors
    const [errors, setErrors] = useState({});

    //Handle form field value changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const allErrors = validate(values);
        if (Object.keys(allErrors).length > 0) {
            setErrors(allErrors);
        } else {
            console.log(values);//Or submit them to the back - end
            setErrors({});
            resetForm();
        }
    };

    const validate = (values) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let errors = {};
        if (!values.name) {
            errors.name = 'Name is required';
        }

        if (!emailRegex.test(values.email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        }

        if (!passwordRegex.test(values.password)) {
            errors.password = "Password must be at least 8 characters,  contain at least one uppercase letter, one lowercase letter,  one number, and one special character";
        }

        if (!values.password) {
            errors.password = 'Password is required';
        }
        return errors;
    };

    const resetForm = () => {
        setValues({
            name: '',
            email: '',
            password: ''
        });
    };

    return { values, errors, handleChange, handleSubmit };
};

export default useCustomFormHook;
