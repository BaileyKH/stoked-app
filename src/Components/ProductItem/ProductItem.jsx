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

export const ProductItem = () => {
  const [selected, setSelected] = useState(0);
  const options = ["Small", "Medium", "Large", "XL"];

  const [clicked, setClicked] = useState(false); 

  const handleClick = () => {
    setClicked(true); 
  };

  return (
    <div>
      <div className="prod-container">
        <div className="small-img-container">
          <img src={img1} alt="back of black snow jacket" />
          <img src={img2} alt="goggle pocket of black snow jacket" />
          <img src={img3} alt="material of black snow jacket" />
          <img src={img4} alt="pass pocket of black snow jacket" />
          <img src={img5} alt="phone pocket of black snow jacket" />
          <img src={img6} alt="sleeve velcro of black snow jacket" />
          <img src={img7} alt="stretchy waist belt of black snow jacket" />
        </div>
        <div className="large-img-container">
          <img src={main} alt="686 snowboarding jacket" />
        </div>
        <div className="checkout-container">
          <h3>686 Snow Jacket</h3>
          <p>Black and Orange 686 Snowboarding Jacket</p>
          <p className="price">$435.68</p>
          <hr></hr>
          <div className="checkout-option">
            <h4>Size</h4>
            {options.map((option, index) => (
              <button
                key={index}
                className={`segment ${selected === index ? "selected" : ""}`}
                onClick={() => setSelected(index)}
              >
                {option}
              </button>
            ))}
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
