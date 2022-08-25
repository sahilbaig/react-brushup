import React from "react";
import { Route,Routes } from "react-router-dom";
import BookList from "./pages/BookList";
import Book from "./pages/book"
import NewBook from "./pages/newBook"
import BookLayout from "./bookLayout";

const BookRoutes = () =>{
    return(
      <div>
        <BookLayout></BookLayout>
        <Routes>
            <Route index element={<BookList/>}></Route>
            <Route path=':id' element={<Book></Book>}></Route>
            <Route path='new' element={<NewBook></NewBook>}></Route>
        </Routes>
      </div>
    ) 
}


export default BookRoutes;