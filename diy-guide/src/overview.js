import React from "react";
import { useState } from "react";
const InputBox =(props) =>{
    const [inputData,handleInputData]=useState('')
    return(
        <div>
            <input type="text" name="input" value={inputData} onChange={(e)=>{
                handleInputData(e.target.value)
            }}></input>
            <button onClick={()=>{
                props.addTask({"name":inputData})
            }}> Submit</button>
        </div>
    )
} 

export default InputBox