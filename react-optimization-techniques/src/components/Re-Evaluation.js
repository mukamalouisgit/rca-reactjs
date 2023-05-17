import React, { useState } from 'react';


function ChildComponent(props) {
  console.log('ChildComponent re-evaluated');
  return <div>{props.value}</div>;
}

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({ value: 'hello' });

  function handleClick() {
    setCount(count + 1);
    setObj({ value: 'world '+count });
  }

  return (
    <div>
      <ChildComponent value={count} />
      <ChildComponent value={obj.value} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}


export default ParentComponent;
