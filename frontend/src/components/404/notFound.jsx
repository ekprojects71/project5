import React from "react";
import { Link } from "react-router-dom";

import "../../css/404.css";

const NotFound = () => {

    return (
        <div className="not-found">
            <h1>We could not find that page.</h1>
            <Link to="/">Return To Homepage</Link>
        </div>
    )
}

export default NotFound;