import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const [data, setData] = useState('');

    const handleChildData = (childData) => {
        setData(childData);
    };

    return (
        <div>
            <ChildComponent onData={handleChildData} />
            <p>Data received from child component: {data}</p>
        </div>
    );
}
export default ParentComponent;
