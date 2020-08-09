import React from "react";
import { Link } from "react-router-dom";

import NavSearch from "./navSearch";

import "../../css/navbar.css";

const Navbar = () => {

    return (
        <header className="navbar">
            <div className="container">
                <div className="nav-left">
                    <div className="logo">
                        <Link to="/">
                            <div className="img-wrapper">
                                <img src="/images/logo.png" alt="logo"/>
                            </div>
                            <div className="logo-text">
                                <span>PIZZA STACK</span>    
                            </div>
                        </Link>
                    </div>    
                </div>
                <div className="search">
                    <div className="searchbar-wrapper">
                        <div className="label">
                            <span>ORDER LOOKUP:</span>
                        </div>
                        <NavSearch />    
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;