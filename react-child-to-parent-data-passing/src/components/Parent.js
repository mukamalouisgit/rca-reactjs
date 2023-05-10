import Child from "./Child";

export default function Parent() {
    function callbackData(childData) {
        return (
            <div>
               {childData}
            </div>
        )
    }
    return (
        <div>
            <div>
                <h5>Parent</h5>
                <p>Passing Data from Child To Parent Components</p>
                <p>Passing data from child to parent is more tricky. This is different compare to passing data from Parent to Child.</p>
                <ul>
                    <li>Create a callback method. This method will get the data from the Child to Parent.</li>
                    <li>Pass your data as props in Child. The Child will call the Parent callback using props.</li>
                    <li>The callback method in the Parent will act as prop to the Child component.</li>
                </ul>
            </div>
            <hr />
            <Child handleCallback={callbackData} />

        </div>
    )
}