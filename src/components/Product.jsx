import React from 'react';
import "../styles/Product.css";

import { BiSearch } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { BiCodeBlock } from "react-icons/bi";
import { BiSolidMagicWand } from "react-icons/bi";

function Product() {
  return (
    <div className='Product'>
        <div className="auto">
            <div className="flex1">
                <div className='flex-text'>
                    <p className="block-head">We deliver great products</p>
                    <p className="block-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <div className="block-grid1">
                        <div>
                            <i><BiSearch /></i>
                            <p>In Depth Research</p>
                        </div>
                        <div>
                            <i><BiSolidMagicWand /></i>
                            <p>Premium Design</p>
                        </div>
                        <div>
                            <i><BiCodeBlock  /></i>
                            <p>Fast Development</p>
                        </div>
                        <div>
                            <i><BiSolidUser /></i>
                            <p>Extensive User Testing</p>
                        </div>
                    </div>
                </div>
                <div className="grid-img">
                    <img src="https://images.unsplash.com/photo-1657632843433-e6a8b7451ac6?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="grid" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Product