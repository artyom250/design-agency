import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Hero.css";

function Hero() {
  return (
    <div className='Hero'>
        <center><p className="heading">We are Umbra. <br />A Creative Design <br />Agency.</p></center>
        <center><p className="desc">We build Creative Experiences for Leading Companies in the World.</p></center>
        <div className="links">
            <Link to="/contact">Get in Touch</Link>
            <Link to="/work">Explore our Work</Link>
        </div>
        <div className="stats">
            <div>
                <p>150+</p>
                <p>Clients</p>
            </div>
            <div>
                <p>10+</p>
                <p>Years of <br />Experience</p>
            </div>
            <div>
                <p>300+</p>
                <p>Projects <br />Completed</p>
            </div>
            <div>
                <p>20+</p>
                <p>Design Awards</p>
            </div>
        </div>
    </div>
  )
}

export default Hero