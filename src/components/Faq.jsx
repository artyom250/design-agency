import React from 'react';
import { useState } from 'react';
import "../styles/Faq.css";

import { BiHelpCircle } from "react-icons/bi";

function Faq() {
    const [drop, setDrop] = useState(false);
    const [drop2, setDrop2] = useState(false);
    const [drop3, setDrop3] = useState(false);
  
    const dropFunction = () => setDrop(!drop);
    const dropFunction2 = () => setDrop2(!drop2);
    const dropFunction3 = () => setDrop3(!drop3);
  return (
    <div className='Product'>
      <div className="large">
        <center><p className="block-head service">Frequently Asked Questions</p></center>
        <center><p className="block-desc service">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p></center>
        <div className="questions">
            <div className="ques" onClick={dropFunction}>
              <div>
                <p>Are your currently accepting new Projects?</p>
                <i><BiHelpCircle /></i>
              </div>
              <p className={drop ? "answer show" : "answer"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>
            <div className="ques" onClick={dropFunction2}>
              <div>
                <p>How long does it take to finish new Projects?</p>
                <i><BiHelpCircle /></i>
              </div>
              <p className={drop2 ? "answer show" : "answer"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>
            <div className="ques" onClick={dropFunction3}>
              <div>
                <p>How much will my Project cost?</p>
                <i><BiHelpCircle /></i>
              </div>
              <p className={drop3 ? "answer show" : "answer"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Faq