const Welcome = ({message, purpose, notes}) => {

    return (
        <div>
            <h5>{message}</h5>
            <p> {purpose}</p>
            <p>{notes}</p>
        </div>
    );
}
export default Welcome;