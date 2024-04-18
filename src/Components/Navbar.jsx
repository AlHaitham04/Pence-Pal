
import React from "react";
import "../css/Navbar.css";
import * as FaIcons from "react-icons/fa";
import logo from "../images/pencepal_logo.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav-bar">
            <div className="nav-container">

                <div className="nav-left">
                        <Link to = "#Menu" className="menu-bars"><FaIcons.FaBars size='30'/></Link>
                        <img className="nav-logo" src={logo}></img> 
                        <h1 className="brand-text">Pence Pal</h1>
                </div>

                <div className="nav-right">
                    <ul className="nav-list">
                        <Link to = "/" className="nav-link">Home</Link>
                        <Link to = "" className="nav-link">About</Link>
                        <Link to = "" className="nav-link">Support</Link>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar