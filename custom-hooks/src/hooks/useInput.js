import { useState } from 'react';

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const reset = () => {
        setValue(initialValue);
    };

    const bind = {
        value,
        onChange: handleChange,
    };

    return [value, bind, reset];
};

export default useInput;
