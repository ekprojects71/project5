import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import "../../css/navSearch.css";

const NavSearch = (props) => {

    const [ query, setQuery ] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        if(query.length > 0) {
            props.history.push(`/orders/${query}`);    
        }
    }

    return (
        <div className="nav-search">
            <div className="search-bar">
                <div className="search-box">
                    <form onSubmit={handleSearch}>
                        <input type="text" placeholder="myemail@example.com" 
                            onChange={e => setQuery(e.target.value)}
                        />
                    </form>    
                </div>
                <div className="search-btn">
                    <button onClick={handleSearch}>
                        <span>Search</span>
                    </button>
                </div>    
            </div>
        </div>
    )
}

export default withRouter(NavSearch);