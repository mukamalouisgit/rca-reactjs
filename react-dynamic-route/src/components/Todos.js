import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';


const Todos = () => {

    const navigate = useNavigate();
    const baseURL = "http://localhost:3001";
    const [todos, setTodos] = useState([]);

    const setTodosData = () => {
        axios.get(baseURL + "/todo/all").then((response) => {
            setTodos(response.data);
        }).catch(error => {
            alert("Error Ocurred while loading data:" + error);
        });
    }

    useEffect(() => {
        setTodosData();
    }, []);


    const removeTodo = (id) => {
        axios.delete(baseURL + "/todo/delete/" + id).then((response) => {
            alert("Todos record " + id + " deleted!");
            setTodosData();
            navigate("/todos")

        }).catch(error => {
            alert("Error Ocurred in removeTodo:" + error);
        });
    }


    const removeAllTodos = () => {
        axios.delete(baseURL + "/todo/delete-all").then((response) => {
            alert("All Todos deleted!");
            setTodosData();
            navigate("/todos")
        }).catch(error => {
            alert("Error Ocurred in removeTodos:" + error);
        });
    }

    return (
        <div className="contents px-4 text-center">

            <Stack direction="horizontal" gap={3}>
                <h4 className="me-auto">Todo List</h4>
                <Button variant="outline-secondary" size="sm" onClick={() => navigate("/create")}>
                    Add Todo
                </Button>                <div className="vr" />
                <Button variant="outline-danger" size="sm" onClick={() => removeAllTodos()}> Delete all</Button>
            </Stack>
            
            <div className="col-md-12">

                <div class="container py-4">
                    <div class="row">
                        <div class="col-12">
                        <Table responsive="sm">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th scope="col">Action</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        todos &&
                                        todos.map((todo, index) => (

                                            <tr>
                                                <td>{todo.title}</td>
                                                <td>{todo.description}</td>
                                                <td >
                                                    <ButtonGroup >
                                                        <Button variant="outline-primary" size="sm" onClick={() => navigate("/update/" + todo.id)}><i className="bi bi-pen"></i></Button>
                                                        <Button variant="outline-danger" size="sm" onClick={() => removeTodo(todo.id)}> <i className="bi bi-trash"></i></Button>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>

                                        ))
                                    }

                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Todos;
