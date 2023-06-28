import { useState} from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate(){

    const [title, setTitle] = useState("");
    const {createBook} = useBooksContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle("");
    }

    return (
    <div className="book-create">
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button className="button">Submit</button>
        </form>
    </div>)
}

export default BookCreate;