import React from 'react';
import "../styles/Work.css";

function Work() {
  return (
    <div className='Product'>
        <div className="large">
            <p className="block-head">Check out the past Projects</p>
            <div className="grid-work">
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
            </div>
        </div>
    </div>
  )
}

export default Work