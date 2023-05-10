import React, { useState } from 'react';

function StatefulList() {
    const [list, setList] = useState(['Item 1', 'Item 2', 'Item 3']);

    function addItem() {
        const newItem = `Item ${list.length + 1}`;
        setList([...list, newItem]);
    }

    return (
        <div>
            <h1>Stateful List</h1>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    );





}

export default StatefulList;
