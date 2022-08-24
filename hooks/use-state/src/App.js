import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0)
  return (
    <div className="App">
      <h1>Count now: {count}</h1>
      <button onClick={()=>{
        setCount(count+1);
      }}>Click to increment</button>
    </div>
  );
}

export default App;
