import React from 'react';
import "../styles/Contact.css";
import "../App.css";
import "../styles/Product.css";

import { BiSolidMap } from "react-icons/bi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BiSolidEnvelope } from "react-icons/bi";

function Contact() {
  return (
    <div className='Contact'>
      <div className="Page">
        <div className="large">
          <p className="block-head service">Get in Touch</p>
          <p className="block-desc service">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
          <div className="contact">
            <form>
              <input type="text" placeholder='Full Name' required />
              <input type="email" placeholder='Email Address' required />
              <input type="number" placeholder='Phone Number' required />
              <textarea placeholder='Example Text' required></textarea>
              <button type="submit">Submit</button>
            </form>
            <div className="contact-text">
              <p className="contact-head">Visit Us at our Office!</p>
              <p className="contact-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
              <ul>
                <li>
                  <i><BiSolidMap /></i>
                  <span>Los Angeles</span>
                </li>
                <li>
                  <i><BiSolidPhoneCall /></i>
                  <span>+48 123 456 789</span>
                </li>
                <li>
                  <i><BiSolidEnvelope /></i>
                  <span>support@example.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact