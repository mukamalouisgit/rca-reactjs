import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const CenteredForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        gender: '',
        interests: [],
        country: '',
        age: 18
    });

    const handleInputChange = e => {
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

    const handleRangeChange = e => {
        const { value } = e.target;
        setFormData({ ...formData, age: parseInt(value) });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="d-flex justify-content-center align-items-left">
            <Form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-center">
                    <FormGroup className="mx-3">
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup className="mx-3">
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} />
                    </FormGroup>
                </div>
                <FormGroup className="mx-3">
                    <Label for="country">Country</Label>
                    <Input type="select" name="country" id="country" value={formData.country} onChange={handleInputChange}>
                        <option value="">Select a country</option>
                        <option value="usa">USA</option>
                        <option value="canada">Canada</option>
                        <option value="uk">UK</option>
                    </Input>
                </FormGroup>
                <FormGroup className="mx-3">
                    <Label for="message">Message</Label>
                    <Input type="textarea" name="message" id="message" value={formData.message} onChange={handleInputChange} />
                </FormGroup>
                <FormGroup className="mx-3">
                    <Label>Gender</Label>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleInputChange} />{' '}
                            Male
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleInputChange} />{' '}
                            Female
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleInputChange} />{' '}
                            Other
                        </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup className="mx-3">
                    <Label>Interests</Label>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="reading" checked={formData.interests.includes('reading')} onChange={handleCheckboxChange} />{' '}
                            Reading
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="sports" checked={formData.interests.includes('sports')} onChange={handleCheckboxChange} />{' '}
                            Sports
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="cooking" checked={formData.interests.includes('cooking')} onChange={handleCheckboxChange} />{' '}
                            Cooking
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="traveling" checked={formData.interests.includes('traveling')} onChange={handleCheckboxChange} />{' '}
                            Traveling
                        </Label>
                    </FormGroup>
                </FormGroup>

                <FormGroup className="mx-3">
                    <Label for="age">Age: {formData.age}</Label>
                    <Input type="range" name="age" id="age" min="18" max="99" value={formData.age} onChange={handleRangeChange} />
                </FormGroup>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </Form>
        </div>
    );
};

export default CenteredForm;
