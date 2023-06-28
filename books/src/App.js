import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import { useContext, useEffect } from "react";
import BooksContext from "./context/Books";

function App(){
    const {fetchBooks} = useContext(BooksContext);

    useEffect(() => {
        fetchBooks();
     }, [fetchBooks])

    return (
    <div className="app">
        <h1>Reading list</h1>
        <BookList/>
        <BookCreate/>
    </div>)
}

export default App;