import React from 'react';
import { Link } from "react-router-dom";
import { BiSolidXCircle } from "react-icons/bi";
import "../styles/Sidebar.css";

function Sidebar({ click, effect }) {
  return (
    <div className={effect ? "Sidebar show" : "Sidebar"}>
        <div className="menu">
            <div className="sidebar-top">
                <i onClick={click}><BiSolidXCircle /></i>
            </div>
            <ul>
                <li><Link to="/" onClick={click}>Home</Link></li>
                <li><Link to="/work" onClick={click}>Work</Link></li>
                <li><Link to="/services" onClick={click}>Services</Link></li>
                <li><Link to="/blog" onClick={click}>Blog</Link></li>
                <li><Link to="/price" onClick={click}>Pricing</Link></li>
                <li><Link to="/contact" onClick={click}>Work with Us</Link></li>
            </ul>
        </div>
    </div>
  ) 
}

export default Sidebar