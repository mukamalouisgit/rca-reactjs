import React, { useRef } from 'react';

const MyComponent = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
        <p>In React, refs provide a way to access and interact with DOM elements or React components directly. They allow you to get references to specific elements or components in your application and perform operations like focusing an input, scrolling to a specific section, or accessing component methods.</p>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default MyComponent;
