import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert } from 'react-bootstrap';

const TodoForm = () => {

    const editURL = "http://localhost:3001/todo/";

    const navigate = useNavigate();
    const param = useParams();


    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    useEffect(() => {
        axios.get(editURL + param.id).then((response) => {

            const todoData = response.data;
            setId(todoData.id);
            setTitle(todoData.title);
            setDescription(todoData.description);

        }).catch(error => {
            alert("Error Ocurred getting todo detail:" + error);
        });
    }, [param.id]);


    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    };


    const submitActionHandler = (event) => {
        event.preventDefault();

        axios.put(editURL + "update/" + param.id, {
            title: title,
            description: description
        })
            .then((response) => {
                alert("Todo " + id + " updated!");
                navigate('/todos')

            }).catch(error => {
                alert("Error Ocurred updating todo:" + error);
            });

    };

    return (
        <div className='contents px-4 text-center'>
            <Alert variant='primary'>
                <Container>
                    <Form onSubmit={submitActionHandler} id="data">
                        <Form.Group controlId="form.Title">
                            <Form.Label>User Title</Form.Label>
                            <Form.Control type="text" value={title} onChange={titleChangeHandler} placeholder="Enter User Title" required />
                        </Form.Group>
                        <Form.Group controlId="form.Description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" value={description} onChange={descriptionChangeHandler} placeholder="Enter Description" required />
                        </Form.Group>
                        <br></br>
                        <Button variant="outline-primary" type='submit'>Update</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button variant="outline-secondary" type='submit' onClick={() => navigate("/todos")}>Cancel</Button>
                    </Form>
                </Container>
            </Alert>
        </div>
    );
}
export default TodoForm;