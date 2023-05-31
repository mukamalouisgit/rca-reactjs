import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3001";

const Createe = () => {
    const [taskName, setTaskName] = useState();
    const [message, setMessage] = useState();


    const handleChanges = (event) => {
        setTaskName(event.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskName);

        axios.post(
            BASE_URL + "/todo/create",
            {
                title: taskName,
                description:"teeeee"
            }
        ).then((response) => {
            setMessage(response.statusText)
            console.log(response.statusText);
        }).catch(error => {
            alert("error===" + error);
        });
    }


    return (
        <>
            <form id="" className="" onSubmit={handleSubmit}>
                <p>{message}</p>
                <label>Enter a task name</label>
                <input type="text" className="" name="taskName" value={taskName} onChange={handleChanges} />
                <button type="submit" className="btn btn-sm btn-info">Submit</button>
            </form>
        </>
    );
}
export default Createe;