import React, { useState } from 'react';


const ChildComponent = ({ name }) => {
  return <h1>Hello, {name}</h1>;
};

const MemoizedComponent = React.memo(ChildComponent);

const ParentComponent = () => {
  const [name, setName] = useState("World");

  return (
    <div>
      <MemoizedComponent name={name} />
      <button onClick={() => setName("RCA")}>Change Name</button>
    </div>
  );
};

export default ParentComponent;
