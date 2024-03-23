import React from 'react'
import './App.css'
import { Hero } from './Components/Hero/Hero'
import { NavBar } from './Components/NavBar/NavBar'
import { Products } from './Components/Products/Products';
import { Footer } from './Components/Footer/Footer';
import { Banner } from './Components/Banner/Banner';

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
      <Banner />
      <Footer />
    </>
  )
}

export default App
