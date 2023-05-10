

const GetFormInput = () => {
    const handleInputChange = (event) => {
        // Do something with the input value
        console.log(event.target.value)
    }
    return (
        <input
            type="text"
            onChange={handleInputChange}
        />
    );
}
export default GetFormInput;
