import './App.css';

function App() {
  var myStyle = {
    fontSize: 80,
    fontFamily: 'Courier',
    color: '#003300',
    textAlign: "center"
  }
  return (
    <div>
      <h1 style={myStyle}>JSX Styling</h1>
    </div>
  );
}

export default App;
