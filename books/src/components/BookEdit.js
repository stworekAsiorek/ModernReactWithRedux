import { useState} from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({book, onSubmit}){

    const [newTitle, setNewTitle] = useState(book.title);

    const {editBookById} = useBooksContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, newTitle)
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
            <button className="button">Save</button>
        </form>
    </div>)
}

export default BookEdit;