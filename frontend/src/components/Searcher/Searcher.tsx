import React, { useState, useEffect } from "react";

import "./Searcher.css";

type SearcherProps = {
    handleOnChange: any
}

function Searcher(props: SearcherProps) {
    
    const [search, setSearch] = useState<string>("");

    useEffect(() => {

        const timeout = setTimeout(() => {

            if (props.handleOnChange) {
                props.handleOnChange(search);
            }
        }, 500)

        return () => {
            clearTimeout(timeout);
        }
    }, [search]); // eslint-disable-line react-hooks/exhaustive-deps

    const cleanSearch = function() {
        setSearch("")
    }

    return(
        <nav>
            <button 
                onClick={cleanSearch}
            >Clean</button>
            
            <input 
                type={"text"}
                placeholder={"Type a City"} 
                value={search} 
                onChange={(event) => setSearch(event.currentTarget.value)}
            />
        </nav>  
    )
}

export default Searcher;
