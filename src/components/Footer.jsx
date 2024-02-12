import React from 'react';
import "../styles/Footer.css";

import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";

function Footer() {
  return (
    <div className='Product'>
      <div className="large">
        <footer>
          <div className="f-flex1">
            <div className="f-flex2">
              <div>
                <p className="f-head">Website</p>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Work</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <p className="f-head">Company</p>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy policy</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>
            </div>
            <div>
              <p className="f-head">Join the Newsletter:</p>
              <p className="f-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
              <form>
                <div className="search">
                  <input type="email" placeholder='Your Email...' required />
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="f-flex3">
            <a href="#" className="logo">
              <img src="https://assets-global.website-files.com/64f57cdc2ee859647d676b3a/64f737e5a51c5cdb6579f938_Umbra%20Logo.svg" alt="umbra" />
            </a>
            <p>Designed & Build by <span>Umbra</span>. Powered by <span>React</span>.</p>
            <div className="f-sn">
              <a href="https://twitter.com/?lang=en" target='_blank'><i><BiLogoTwitter /></i></a>
              <a href="https://www.facebook.com/" target='_blank'><i><BiLogoFacebook /></i></a>
              <a href="https://www.instagram.com/" target='_blank'><i><BiLogoInstagramAlt /></i></a>
              <a href="https://www.linkedin.com/" target='_blank'><i><BiLogoLinkedin /></i></a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer