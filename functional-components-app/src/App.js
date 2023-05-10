import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <First />
        <Second />
      </div>
    );
  }
}
class First extends React.Component {
  render() {
    return (
      <div>
        <h1>First</h1>
      </div>
    );
  }
}
class Second extends React.Component {
  render() {
    return (
      <div>
        <h2>Second</h2>
        <p>The functional component is also known as a stateless component because they do not hold or manage state. It can be explained in this example.</p>
      </div>
    );
  }
}
export default App;