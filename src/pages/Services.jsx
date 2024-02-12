import React from 'react';
import "../App.css";
import "../styles/Services.css";
import "../styles/Product.css";

import { BiSolidUserAccount } from "react-icons/bi";
import { BiSolidWindowAlt } from "react-icons/bi";
import { BiMobile } from "react-icons/bi";
import { BiCodeBlock } from "react-icons/bi";
import { BiSolidImageAlt  } from "react-icons/bi";
import { BiSolidCheckCircle } from "react-icons/bi";

function Services() {
  return (
    <div className='Services'>
      <div className="Page">
        <div className="large">
          <p className="block-head service">Our Package</p>
          <p className="block-desc service">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
          <div className="services">
              <div className="s-block">
                  <i className="s-icon"><BiSolidUserAccount /></i>
                  <p className='s-title'>UI/UX Research</p>
                  <p className='s-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
              <div className="s-block">
                  <i className="s-icon"><BiSolidCheckCircle /></i>
                  <p className='s-title'>Branding</p>
                  <p className='s-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
              <div className="s-block">
                  <i className="s-icon"><BiSolidWindowAlt /></i>
                  <p className='s-title'>Web Design</p>
                  <p className='s-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
              <div className="s-block">
                  <i className="s-icon"><BiMobile /></i>
                  <p className='s-title'>UI/UX Design</p>
                  <p className='s-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
              <div className="s-block">
                  <i className="s-icon"><BiCodeBlock /></i>
                  <p className='s-title'>Web Development</p>
                  <p className='s-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
              <div className="s-block">
                  <i className="s-icon"><BiSolidImageAlt   /></i>
                  <p className='s-title'>Graphic Design</p>
                  <p className='s-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Services