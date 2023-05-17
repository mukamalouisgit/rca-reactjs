import React, { forwardRef } from 'react';

const ChildComponent = forwardRef((props, ref) => {
    return <input type="text" ref={ref} />;
});

const ParentComponent = () => {
    const inputRef = React.createRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <ChildComponent ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
};

export default ParentComponent;
