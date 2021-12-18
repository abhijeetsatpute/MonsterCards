import React from "react";

const Searchbox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input 
                autoFocus
                className="pa2 br-pill grow red b bg-lightest-yellow tc"
                type='search' 
                placeholder='Search Monsters' 
                onChange={searchChange}
            />
        </div>
    )
}

export default Searchbox;