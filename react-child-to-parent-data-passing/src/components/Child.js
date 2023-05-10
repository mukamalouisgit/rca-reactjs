export default function Child(props) {
    var message='Hello from  child';
    return (
        <div >
            <h5>Child</h5>
            <hr />
            <p>Sent message from child is ({props.handleCallback(message)})</p>
        </div>
    );
}