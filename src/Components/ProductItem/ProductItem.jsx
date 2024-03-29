import { useState } from "react";

import "./ProductItem.css";

import main from "/src/assets/product-images/686-jacket.jpg";
import img1 from "/src/assets/product-images/product-views/back.webp";
import img2 from "/src/assets/product-images/product-views/goggle-pocket.jpeg";
import img3 from "/src/assets/product-images/product-views/material.jpeg";
import img4 from "/src/assets/product-images/product-views/pass-pocket.webp";
import img5 from "/src/assets/product-images/product-views/phone-pocket.webp";
import img6 from "/src/assets/product-images/product-views/sleeve.webp";
import img7 from "/src/assets/product-images/product-views/waist.jpeg";

import { Size } from "../Buttons/Size/Size";
import { Quantity } from "../Buttons/Quantity/Quantity";
import { AddToCart } from "../Buttons/AddToCart/AddToCart";

export const ProductItem = () => {

    const [mainImg, setMainImg] = useState(main)

    const changeMainImage = (newSrc) => {
        setMainImg(newSrc);
    };

  return (
    <div>
      <div className="prod-page-container">
        <div className="small-img-container">
          <img src={img1} alt="back of black snow jacket" onClick={() => changeMainImage(img1)}/>
          <img src={img2} alt="goggle pocket of black snow jacket" onClick={() => changeMainImage(img2)}/>
          <img src={img3} alt="material of black snow jacket" onClick={() => changeMainImage(img3)}/>
          <img src={img4} alt="pass pocket of black snow jacket" onClick={() => changeMainImage(img4)}/>
          <img src={img5} alt="phone pocket of black snow jacket" onClick={() => changeMainImage(img5)}/>
          <img src={img6} alt="sleeve velcro of black snow jacket" onClick={() => changeMainImage(img6)}/>
          <img src={img7} alt="stretchy waist belt of black snow jacket" onClick={() => changeMainImage(img7)}/>
          <img src={main} alt="686 snowboarding jacket" onClick={() => changeMainImage(main)}/>
        </div>
        <div className="large-img-container">
          <img src={mainImg} alt="686 snowboarding jacket" />
        </div>
        <div className="checkout-container">
          <div className="checkout-text-container">
            <h3>686 Snow Jacket</h3>
            <p>Black and Orange 686 Snowboarding Jacket</p>
            <p className="price">$435.68</p>
          </div>
          <hr></hr>
          <div className="checkout-option">
            <Size />
            <Quantity />
            <AddToCart />
          </div>
        </div>
      </div>
      <div className="specs">
        <h3>Specs: </h3>
        <p>Insulation certified for 20 degrees</p>
      </div>
    </div>
  );
};
