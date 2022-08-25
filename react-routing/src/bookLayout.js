import React from "react";
import { Link, Outlet } from "react-router-dom";
const BookLayout  =() =>{
    return(
        <>
        <Link to="/book/1">Book 1</Link>
        <Link to="/book/2">Book 2</Link>
        <br/>
        <Link to="/book/new">New Book</Link>
        <Outlet></Outlet>
        </>
    )
}

export default BookLayout