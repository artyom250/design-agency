import React from 'react';
import "../styles/Blog.css";

function Blog() {
  return (
    <div className='Product'>
        <div className="large">
            <p className="block-head service">Read our Articles</p>
            <p className="block-desc service">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <div className="blogs">
                <a href="#">
                    <div className="blog">
                        <div className="b-img">
                            <img src="https://images.unsplash.com/photo-1641579281152-e5d633aa3775?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bog" />
                        </div>
                        <div className="b-flex">
                            <p>Updates</p>
                            <p>September 5, 2023</p>
                        </div>
                        <p className="b-title">Behind the Scenes: A Day in the Life of a Design Agency</p>
                        <p className="b-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget varius enim, quis convallis tellus...</p>
                    </div>
                </a>
                <a href="#">
                    <div className="blog">
                        <div className="b-img">
                            <img src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bog" />
                        </div>
                        <div className="b-flex">
                            <p>Tutorial</p>
                            <p>September 5, 2023</p>
                        </div>
                        <p className="b-title">UX/UI Magic: Crafting User-Centric Digital Experiences</p>
                        <p className="b-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget varius enim, quis convallis tellus...</p>
                    </div>
                </a>
                <a href="#">
                    <div className="blog">
                        <div className="b-img">
                            <img src="https://images.unsplash.com/photo-1633164442172-dc4147f21954?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bog" />
                        </div>
                        <div className="b-flex">
                            <p>Articals</p>
                            <p>September 5, 2023</p>
                        </div>
                        <p className="b-title">Design Decoded: Unveiling the Secrets of Visual Branding</p>
                        <p className="b-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget varius enim, quis convallis tellus...</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Blog