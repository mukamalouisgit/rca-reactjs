import Child from "./Child";

export default function Parent() {
    return (
        <div style={{ 'background-color': 'green' }}>
            <h5>Parent</h5>
            <hr />
            <Child message={'Message from Parent'} />
        </div>
    )
}