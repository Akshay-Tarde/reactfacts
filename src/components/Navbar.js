import React from "react";
import logo from "../images/react-logo.png"

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <img src={logo}/>
                <h3><span>React Facts</span></h3>
                <h4>React Course - Project 1</h4>
        </nav>
    )
}