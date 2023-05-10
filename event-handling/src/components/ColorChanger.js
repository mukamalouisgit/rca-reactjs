import React, { useState } from 'react';

function ColorChanger() {
  const [backgroundColor, setBackgroundColor] = useState('yellow');

  function handleButtonClick() {
    setBackgroundColor('blue');
  }

  return (
    <div style={{ backgroundColor }}>
      <button onClick={handleButtonClick}>Change color</button>
    </div>
  );
}

export default ColorChanger;

