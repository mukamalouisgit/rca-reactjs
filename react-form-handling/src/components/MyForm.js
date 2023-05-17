import React, { useState } from 'react';
import './style.css';


const MyForm = () => {

    const hideDetails = {
        color: 'red',
        marginBottom: '10px',
        display: 'none'
    };

    function toggleDivs() {
        var form = document.getElementById('form');
        var details = document.getElementById('details');

        if (form.style.display === 'none') {
            form.style.display = 'block';
            details.style.display = 'none';
        } else {
            form.style.display = 'none';
            details.style.display = 'block';
        }
    }

    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        interests: [],
        country: '',
        age: 18,
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = e => {
        const { name, checked } = e.target;
        const updatedInterests = checked
            ? [...formData.interests, name]
            : formData.interests.filter(interest => interest !== name);
        setFormData({ ...formData, interests: updatedInterests });
    };

    const handleSubmit = e => {
        e.preventDefault();
        toggleDivs()
        console.log(formData);
    };

    return (
        <div className="container">
            <div id="form">
                <h1>My Awesome Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                        />
                        <label htmlFor="name">Name</label>
                    </div>


                    <div className="form-group mb-3">
                        <div className="mb-3">
                            <label htmlFor="gender">Gender</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={formData.gender === "male"}
                                onChange={handleInputChange}
                            />{' '}
                            <label>Male </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender === "female"}
                                onChange={handleInputChange}
                            />{' '}
                            <label>Female</label>
                        </div>
                    </div>
                    <div className="form-group  mb-3">
                        <div className="mb-3">
                            <label htmlFor="interests">Interests</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                id="design"
                                value="Design"
                                name="design"
                                checked={formData.interests.includes('design')}
                                onChange={handleCheckboxChange}
                            />
                            <label>Design</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                id="program"
                                value="Programming"
                                name="programming"
                                checked={formData.interests.includes('programming')}
                                onChange={handleCheckboxChange}
                            />
                            <label>Programming</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                id="networking"
                                value="networking"
                                name="Networking"
                                checked={formData.interests.includes('networking')}
                                onChange={handleCheckboxChange}
                            />
                            <label>Networking</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                id="database"
                                value="database"
                                name="Database"
                                checked={formData.interests.includes('database')}
                                onChange={handleCheckboxChange}
                            />
                            <label>Database</label>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <select
                            className="form-select"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                        >
                            <option value="">Select your country</option>
                            <option value="us">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="ca">Canada</option>
                            <option value="rw">Rwanda</option>
                            <option value="ug">Uganda</option>
                        </select>
                        <label htmlFor="country">Country</label>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="age">Age: {formData.age}</label>
                        <input
                            type="range"
                            className="form-range"
                            id="age"
                            name="age"
                            min="18"
                            max="100"
                            value={formData.age}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-floating mb-3">
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Enter your message"
                        ></textarea>
                        <label htmlFor="message">Message</label>
                    </div>
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="button" onClick={toggleDivs} className="btn btn-outline-primary">Preview</button>
                    </div>
                </form>
            </div>
            <div id="details" style={hideDetails}>
                <h1>My Awesome details</h1>
                <ul className="list-group">
                    {Object.entries(formData).map(([key, value]) => (
                        <li className="list-group-item" key={key}>
                            <strong>{key}:</strong> {Array.isArray(value) ? <p>{
                                <div>
                                    <ul className="list-group  list-group-flush">
                                        {value.map((item) => (
                                            <li className="list-group-item" key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            }</p> : <p>{value}</p>}
                        </li>
                    ))}
                </ul>


                <button type="button" onClick={toggleDivs} className="btn btn-outline-primary">Go back</button>
            </div>

        </div>
    );
}

export default MyForm;