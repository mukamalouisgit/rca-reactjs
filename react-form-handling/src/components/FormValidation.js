import React, { useState } from "react";

function FormValidation() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
    });
    const [formErrors, setFormErrors] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
        ageError: "",
    });

    const validateForm = () => {
        let isValid = true;
        const errors = {
            nameError: "",
            emailError: "",
            passwordError: "",
            ageError: "",
        };

        // Validate name
        if (!formData.name) {
            errors.nameError = "Name is required";
            isValid = false;
        }

        // Validate email
        if (!formData.email) {
            errors.emailError = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.emailError = "Invalid email address";
            isValid = false;
        }

        // Validate password length
        if (formData.password.length < 8) {
            errors.passwordError = "Password must be at least 8 characters";
            isValid = false;
        }

        // Validate password uppercase letter
        if (!/[A-Z]/.test(formData.password)) {
            errors.passwordError = "Password must include at least an upper case letter";
            isValid = false;
        }

        // Validate password lowercase letter
        if (!/[a-z]/.test(formData.password)) {
            errors.passwordError = "Password must include at least a lower case letter";
            isValid = false;
        }

        // Validate password number
        if (!/\d/.test(formData.password)) {
            errors.passwordError = "Password must include at least a digit";
            isValid = false;
        }

        // Validate password special character
        if (!/[!@#$%^&*]/.test(formData.password)) {
            errors.passwordError = "Password must include at least a special character";
            isValid = false;
        }

        // Validate empty password
        if (!formData.password) {
            errors.passwordError = "Password is required";
            isValid = false;
        }

        /***  You can simply validate the password using these commented
         *  codes instead of vaditating one by one case
        
         const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
        if (!formData.password) {
            errors.passwordError = "Password is required";
            isValid = false;
        } else if (!strongRegex.test(formData.password)) {
            errors.passwordError = "Password must be at least 8 characters, 
            contain at least one uppercase letter, one lowercase letter, 
            one number, and one special character";
            isValid = false;
        }
    
        */

        // Validate age
        if (!formData.age) {
            errors.ageError = "Age is required";
            isValid = false;
        } else if (isNaN(formData.age)) {
            errors.ageError = "Age must be a number";
            isValid = false;
        } else if (formData.age < 18) {
            errors.ageError = "You must be at least 18 years old";
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            console.log(formData);//Form submitted successfully
        } else {
            console.log("Form validation failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                {formErrors.nameError && (
                    <span className="error">{formErrors.nameError}</span>
                )}
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                {formErrors.emailError && (
                    <span className="error">{formErrors.emailError}</span>
                )}
            </div>

            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                {formErrors.passwordError && (
                    <span className="error">{formErrors.passwordError}</span>
                )}
            </div>

            <div>
                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                />
                {formErrors.ageError && (
                    <span className="error">{formErrors.ageError}</span>
                )}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default FormValidation