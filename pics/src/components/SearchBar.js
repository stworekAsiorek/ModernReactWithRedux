import './SearchBar.css'

import { useState } from "react";

function SearchBar({onSubmit}){
    var [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault(EventSource);
        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value)
    };

    return (
        <div className='search-bar'>
            <form onSubmit={(event) => handleFormSubmit(event)}>
                <label>Enter Search Term</label>
                <input type='text' value={term} onChange={handleChange}/>
            </form>
        </div>
    );
}

export default SearchBar;