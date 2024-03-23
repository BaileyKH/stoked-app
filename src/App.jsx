import React from 'react'
import './App.css'
import { Hero } from './Components/Hero/Hero'
import { NavBar } from './Components/NavBar/NavBar'
import { Products } from './Components/Products/Products';
import { Footer } from './Components/Footer/Footer';
import { Banner } from './Components/Banner/Banner';
import { Trending } from './Components/Trending/Trending';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="product-layout">
        <div className="product-header">
          <h2>Newest Products</h2>
          <p>Checkout our most recent additions to the gear locker!</p>
        </div>
        <div className="product-container">
          <Products />
        </div>
      </div>
      <Banner 
        title={"Burton Step-On"}
        description={"The newest addition to the burton line is their one of a kind step-on bindings, making it easier than ever to shred the moutain"}
        image={"/src/assets/banner-images/step-on.png"}
      />
      <Trending />
      <Banner 
        title={"Montec Snowboard Jacket"}
        description={"The newest addition to the burton line is their one of a kind step-on bindings, making it easier than ever to shred the moutain"}
        image={"/src/assets/banner-images/banner-2.png"}
      />
      <Footer />
    </>
  )
}

export default App
