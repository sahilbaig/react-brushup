import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const NotFound=()=>{
    const navigate= useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
    },5000)
    },[])

    return(
        <h1>Not found</h1>
    )
}

export default NotFound