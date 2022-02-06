import React, { useState, useEffect } from "react";

import "./Searcher.css";

type SearcherProps = {
    handleOnChange: any
}

function Searcher(props: SearcherProps) {
    
    const [search, setSearch] = useState<string>("");

    useEffect(() => {

        const timeout = setTimeout(() => {
            props.handleOnChange(search)
        }, 500)

        return () => {
            clearTimeout(timeout);
        }
    }, [search]);

    const cleanSearch = function() {
        setSearch("")
    }

    return(
        <nav>
            <button 
                onClick={cleanSearch}
            >
                Clean
            </button>
            
            <input 
                placeholder={"Type a City"} 
                value={search} 
                onChange={(event) => setSearch(event.currentTarget.value)}
            />
        </nav>  
    )
}

export default Searcher;
