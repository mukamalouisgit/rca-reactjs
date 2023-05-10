import { useState } from "react";
const Form = () => {
    const [state, setState] = useState({
        fname: "",         //for input 
        lname: "",         //for input
        message: "",       //for textarea
        carBrand: "",      //for selection box
        isChecked: false,  //for checkbox
        gender: "",        //for radiobutton
        price: 0           //for range
    });

    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setState((state) => ({
            ...state,
            [e.target.name]: value
        }));
    };

    const carBrands = ["Mercedes", "BMW", "Maserati", "Infinity", "Audi"];

    const carBrandOptions = carBrands.map((carBrand, key) => (
        <option value={carBrand} key={key}>
            {carBrand}
        </option>
    ));

    const handleSubmit = (e) => {
        e.preventDefault();
        //console data or send them to the backend
        console.log(state);
    };

    return (
        <>
            <h1>My Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    First Name:{" "}
                    <input
                        type="text"
                        name="fname"
                        value={state.fname}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Last Name:{" "}
                    <input
                        type="text"
                        name="lname"
                        value={state.lname}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Your Message:{" "}
                    <textarea
                        name="message"
                        value={state.message}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Car brand:
                    <select
                        name="carBrand"
                        value={state.carBrand}
                        onChange={handleChange}
                    >
                        <option value={""} disabled>
                            --Pick a car brand--
                        </option>
                        {carBrandOptions}
                    </select>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="isChecked"
                        checked={state.isChecked}
                        onChange={handleChange}
                    />
                    Is Checked?
                </div>
                <div>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={state.gender === "male"}
                        onChange={handleChange}
                    />{" "}
                    Male
                </div>
                <div>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={state.gender === "female"}
                        onChange={handleChange}
                    />{" "}
                    Female
                </div>
                <div>
                    Price (between 0 and 50):
                    <input
                        type="range"
                        name="price"
                        min="0"
                        max="50"
                        value={state.price}
                        onChange={handleChange}
                    />
                </div>
                <button>Submit</button>
            </form>
            <div>
                <h5>Names: {state.fname} {state.lname} </h5>
                <h5>Favorite car brand: {state.carBrand}</h5>
                <p>Message: {state.message}</p>
                <h5>Is it checked? : {state.isChecked ? "Yes" : "No"}</h5>
                <h5>Gender : {state.gender}</h5>
                <h5>Price : ${state.price}</h5>
            </div>
        </>
    );
};

export default Form;