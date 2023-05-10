

const ButtonClickEvent = () => {
    // Event handler or a function that will handle the event when the button is clicked
    const sayHello = () => {
        alert('Hello');
    }
    return (<button onClick={sayHello}>Click me</button>)

}
export default ButtonClickEvent;