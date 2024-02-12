import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

import { BiGridAlt  } from "react-icons/bi";

function Navbar({ click }) {
    const [navbar, setNavbar] = useState(false);
  
    const navbarActive = () => {
      if(window.scrollY > 0) {
        setNavbar(true);
      } else {
        setNavbar(false)
      }
    }
  
    window.addEventListener("scroll", navbarActive);
  return (
    <div className={navbar ? "Navbar scroll" : "Navbar"}>
      <nav>
        <a href="#" className="logo">
            <img src="https://assets-global.website-files.com/64f57cdc2ee859647d676b3a/64f737e5a51c5cdb6579f938_Umbra%20Logo.svg" alt="umbra" />
        </a>
        <ul>
            <li><Link to="/" className='nav-link'>Home</Link></li>
            <li><Link to="/work" className='nav-link'>Work</Link></li>
            <li><Link to="/services" className='nav-link'>Services</Link></li>
            <li><Link to="/blog" className='nav-link'>Blog</Link></li>
            <li><Link to="/price" className='nav-link'>Pricing</Link></li>
            <li><Link to="/contact" className='work'>Work with Us</Link></li>
            <li><i onClick={click}><BiGridAlt  /></i></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar