import React from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Features from '../Components/Features';
import Services from '../Components/Services';
import Products from '../Components/Products';
import Pricing from '../Components/Pricing';
import Blog from '../Components/Blog';
// import Contact from '../Components/Contact';



const Home
    = () => {  
        return (
          <>
          <Header />
          <Banner/>
          <Features/>
          <Services/>
          <Products/>
          <Pricing/>
          <Blog/>
          {/* <Contact/> */}
          </>
        );
    }

export default Home;