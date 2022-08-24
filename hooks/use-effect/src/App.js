import './App.css';
import { useEffect,useState } from 'react';
function App() {
  const [color, setColor] = useState("black");

  useEffect(()=>{
    console.log("run on render")
  },[color])
  return (
    <div>
      <h1>Hello there</h1>
      <button onClick={()=>{
        setColor('Red')
      }}>Red</button>

      <button onClick={()=>{
        setColor('Blue')
      }}>Blue</button>

      
    </div>
  );

}

export default App;
