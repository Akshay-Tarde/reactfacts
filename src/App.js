import React from "react";
import Navbar from './components/Navbar.js';
import MainContent from './components/MainContent.js';
import './index.css';


export default function App() {
    return (
        <div>
            <Navbar/>
            <MainContent/>
        </div>
    )
}