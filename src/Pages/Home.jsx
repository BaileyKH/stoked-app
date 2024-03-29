import React from 'react'
import './Home.css'
import { Hero } from '../Components/Hero/Hero'
import { NewProducts } from '../Components/NewProducts/NewProducts';
import { Banner } from '../Components/Banner/Banner';
import { Trending } from '../Components/Trending/Trending';

export const Home = () => {
  return (
    <>
      <Hero />
      <div className="product-layout">
        <div className="product-header">
          <h2>Newest Products</h2>
          <p>Check out our most recent additions to the gear locker!</p>
        </div>
        <div className="main-item-container">
          <NewProducts />
        </div>
      </div>
      <Banner 
        title={"Burton Step-On"}
        description={"The newest addition to the burton line is their one of a kind step-on bindings, making it easier than ever to shred the moutain"}
        image={"/banner-images/step-on.png"}
      />
      <Trending />
      <Banner 
        title={"Montec Snowboard Jacket"}
        description={"Medium-weight insulation for perfect balance between warmth and performance"}
        image={"/banner-images/banner-2.png"}
      />
    </>
  )
}

