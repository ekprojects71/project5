import React from "react";
import { Link } from "react-router-dom";

import NavSearch from "../navbar/navSearch";

import "../../css/home.css";

const Home = () => {

    return (
        <div className="home">
            <div className="order-pizza">
                <Link to="/place-order">
                    <h1>Place An Order</h1>
                    <h3>Build Your Pizza</h3>
                </Link>
            </div>
            <div className="lookup-order">
                <h2>View your orders</h2>
                <NavSearch />
            </div>
            <div className="filler">
                <p>Serving quality pizza since 1991</p>
            </div>
        </div>
    )
}

export default Home;