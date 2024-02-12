import React from 'react';
import "../styles/Product.css";
import "../styles/Work.css";
import "../App.css";

function Work() {
  return (
    <div className='Work'>
      <div className="Page">
        <div className="large">
            <p className="block-head service">Previous Projects</p>
            <p className="block-desc service">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <div className="grid-work works">
                <div className="project">
                    <img src="https://images.unsplash.com/photo-1645378198905-bca326a21167?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="work" />
                    <div className="project-title">
                        <p>SnapshotPlus Branding & Web Design</p>
                    </div>
                </div>
                <div className="project">
                    <img src="https://images.unsplash.com/photo-1645990195529-14aa9e7b7a6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="work" />
                    <div className="project-title">
                        <p>NovaPlus Web Development & Marketing</p>
                    </div>
                </div>
                <div className="project">
                    <img src="https://images.unsplash.com/photo-1656066834927-5c1e3f5d6fe9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="work" />
                    <div className="project-title">
                        <p>Lunefolio User Research & UI Design</p>
                    </div>
                </div>
                <div className="project">
                    <img src="https://images.unsplash.com/photo-1670746428028-139a4241918f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="work" />
                    <div className="project-title">
                        <p>SnapshotPlus Branding & Web Design</p>
                    </div>
                </div>
                <div className="project">
                    <img src="https://images.unsplash.com/photo-1668718031554-9c05b5d03750?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="work" />
                    <div className="project-title">
                        <p>NovaPlus Web Development & Marketing</p>
                    </div>
                </div>
                <div className="project">
                    <img src="https://images.unsplash.com/photo-1669138902361-750985cf545b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="work" />
                    <div className="project-title">
                        <p>Lunefolio User Research & UI Design</p>
                    </div>
                </div>
            </div>
        </div>
        <center><a href="#" className='page-link'>Learn more</a></center>
      </div>
    </div>
  )
}

export default Work