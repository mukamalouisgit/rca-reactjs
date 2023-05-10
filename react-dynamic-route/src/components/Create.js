import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Form, Button, Container, Alert } from 'react-bootstrap';

const TodoForm = () => {

    const baseURL = "http://localhost:3001";
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    };


    const submitActionHandler = (event) => {
        event.preventDefault();
        axios.post(baseURL + "/todo/create", {
            title: title,
            description: description
        }).then((response) => {
            alert("Todo " + title + " added!");
            navigate("/todos");
        }).catch(error => {
            alert("error===" + error);
        });

    };

    const cancelHandler = () => {
        //reset the values of input fields
        setTitle('');
        setDescription('');
        navigate("/todos");

    }
    return (
        <div className='contents px-4 text-center'>
            <Alert variant='primary'>
                <Container>
                    <Form onSubmit={submitActionHandler}>
                        <Form.Group controlId="form.Title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={title} onChange={titleChangeHandler} placeholder="Title" required />
                        </Form.Group>
                        <Form.Group controlId="form.Description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" value={description} onChange={descriptionChangeHandler} placeholder="Description" required />
                        </Form.Group>
                        <br></br>
                        <Button type='submit' variant='outline-primary'>Submit</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button type='submit'variant='outline-secondary' onClick={() => cancelHandler()}>Cancel</Button>
                    </Form>

                </Container>
            </Alert>
        </div>


    );
}
export default TodoForm;