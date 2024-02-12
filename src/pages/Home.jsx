import React from 'react';
import "../styles/Home.css";

import Hero from '../components/Hero';
import Product from '../components/Product';
import Work from '../components/Work';
import Services from '../components/Services';
import Block from '../components/Block';
import Blog from '../components/Blog';
import Faq from '../components/Faq';

function Home() {
  return (
    <div className='Home'>
      <Hero />
      <Product />
      <Work />
      <Services />
      <Block />
      <Blog />
      <Faq />
    </div>
  )
}

export default Home