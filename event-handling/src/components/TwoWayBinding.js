import React, { useState } from 'react';

function TwoWayBinding() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <p>{value}</p>
        </div>
    );
}

export default TwoWayBinding;
