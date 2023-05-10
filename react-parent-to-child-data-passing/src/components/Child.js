export default function Child(props) {
    return (
        <div style={{ 'background-color': 'white' }}>
            <h5>Child</h5>
            <hr />
            Received message from parent :{props.message}
        </div>
    );
}