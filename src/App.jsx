import React, { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import "./App.css";

// Lazy-loaded components
const Home = React.lazy(() => import('./pages/Home'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Price = React.lazy(() => import('./pages/Price'));
const Services = React.lazy(() => import('./pages/Services'));
const Work = React.lazy(() => import('./pages/Work'));

function App() {
  const [side, setSide] = useState(false);

  const sidebarFunc = () => setSide(!side);

  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar click={sidebarFunc} effect={side} />
        <Navbar click={sidebarFunc} />
        <Suspense fallback={<div className='loading'>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/price" element={<Price />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
