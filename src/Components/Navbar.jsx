
import React from "react";
import "../css/Navbar.css";
import * as FaIcons from "react-icons/fa";
import logo from "../images/pencepal_logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

import Sidebar from './Sidebar';
import History from "./History";

function Navbar() {

    const [ showSide, setShowSide ] = useState(false)
    const [ showHistory, setShowHistory ] = useState(false)

    return (
        <>
        <nav className="nav-bar">
            <div className="nav-container">

                <div className="nav-left">

                        <Link className="nav-menu" onClick={() => setShowSide(!showSide)}>
                            <FaIcons.FaBars size='30'/>
                        </Link>

                        <img className="nav-logo" src={logo}></img> 
                        <h1 className="brand-text">Pence Pal</h1>
                </div>

                <div className="nav-right">
                    <ul className="nav-list">
                        <Link to = "/" className="nav-link">Home</Link>
                        <Link to = "" className="nav-link">About</Link>
                        <Link to = "" className="nav-link">Support</Link>
                    </ul>

                    <Link className="nav-history" onClick={() => setShowHistory(!showHistory)}>
                            <FaIcons.FaRegClock size='30'/>
                    </Link>
                    
                </div>

            </div>
        </nav>

        <Sidebar show = {showSide} />
        
        <History show = {showHistory} />

        </>
    )
}

export default Navbar