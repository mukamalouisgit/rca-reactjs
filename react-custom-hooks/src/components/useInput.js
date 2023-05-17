import { useState } from 'react';

const useInput = (initialValue) => {
    //Initialise state
    const [value, setValue] = useState(initialValue);

    //Handle changes
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    //Reset form fields
    const reset = () => {
        setValue(initialValue);
    };

    //Binding form field values & their changes
    const bind = {
        value,
        onChange: handleChange,
    };

    return [value, bind, reset];
};

export default useInput;
