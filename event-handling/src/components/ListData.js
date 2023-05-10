import React from 'react';

function MyList() {
    const myListData = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];

    return (
        <div>
            <h1>List of Items</h1>
            <ul>
                {myListData.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>

    );
}
export default MyList;
