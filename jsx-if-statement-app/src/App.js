import './App.css';

function App() {
  var i = 5;  
  var myStyle = {
    fontSize: 80,
    fontFamily: 'Courier',
    color: '#003300',
    textAlign: "center"
  }
  return (  
     <div>  
        <h1 style={myStyle}>{i === 1 ? 'True!' : 'False!'}</h1>  
     </div>  
  ); 
}

export default App;
