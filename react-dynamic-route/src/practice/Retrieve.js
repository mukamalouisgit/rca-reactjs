import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3001";

const Retrieve = () => {
    const [data, setData] = useState([]);
    // const [message, setMessage] = useState();



    const getBackendDetails = (e) => {
        e.preventDefault();

        axios.get(BASE_URL + "/todo/all").then((response) => {
            setData(response.data)
            // console.log(response.data);
        }).catch(error => {
            alert("error===" + error);
        });
    }


    return (
        <>
            <button type="button" onClick={getBackendDetails}>Retrieve</button>
            <ul>
                {data.map(task => (
                    <li key={task.id}>{task.title}  {task.description}</li>
                )) }
            </ul>
        </>
    );
}
export default Retrieve;