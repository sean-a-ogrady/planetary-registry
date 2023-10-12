import React from "react"

function Search({query, setQuery}) {
    return (
        <div>
            <input type="text" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search..."/>
        </div>
    );
}

export default Search;