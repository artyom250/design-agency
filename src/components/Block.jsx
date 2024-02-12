import React from 'react';
import { Link } from "react-router-dom";

import { BiSolidCheckCircle } from "react-icons/bi";

function Block() {
  return (
    <div className='Product'>
      <div className="large">
          <div className="flex1 block">
            <div className="grid-img">
                <img src="https://images.unsplash.com/photo-1655998233171-ee5b130acba5?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="grid" />
            </div>
            <div className='flex-text'>
                <p className="block-head">The One-in-All Solution</p>
                <p className="block-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                <ul>
                  <li>
                    <i><BiSolidCheckCircle /></i>
                    <span>User Research & Testing</span>
                  </li>
                  <li>
                    <i><BiSolidCheckCircle /></i>
                    <span>Design & Development</span>
                  </li>
                  <li>
                    <i><BiSolidCheckCircle /></i>
                    <span>Publishing & Marketing</span>
                  </li>
                </ul>
                <Link to="/contact" className="block-link">Contact Us</Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Block