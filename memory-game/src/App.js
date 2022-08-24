import { useState } from 'react';
import './App.css';
import ImageHolder from './picHolder';
function App() {

  const [highScore,handleHighScore]=useState(0)
  const setScore =(current_score)=>{
    
    if(current_score===false){
      // handleHighScore(highScore+1)
      console.log("continue")
      handleHighScore(highScore+1)
    }
    else if(current_score===true){
      console.log("rese")
      handleHighScore(0)
    }
     
  }
  return (
    <div className="App">

      <h1>Such memory much wow</h1>
      <h3>Score:{highScore}</h3>
      <ImageHolder setScore={setScore}></ImageHolder>
    </div>
  );
}

export default App;
