import { useState } from 'react';

import './Quantity.css'

export const Quantity = ({ maxQuantity = 10 }) => {
    const [quantity, setQuantity] = useState(1);
  
    const handleIncrease = () => {
      if (quantity < maxQuantity) {
        setQuantity(prevQuantity => prevQuantity + 1);
      }
    };
  
    const handleDecrease = () => {
      if (quantity > 1) {
        setQuantity(prevQuantity => prevQuantity - 1);
      }
    };
  
    const handleChange = (e) => {

      const val = parseInt(e.target.value, 10);
      
      if (!isNaN(val) && val <= maxQuantity && val >= 1) {
        setQuantity(val);
      }
    };
  
    return (
      <div className="quantity-container">
        <h4 className="quantity-title">Quantity</h4>
        <button onClick={handleDecrease} disabled={quantity === 1}>-</button>
        <input type="number" value={quantity} onChange={handleChange} min="1" max={maxQuantity} />
        <button onClick={handleIncrease} disabled={quantity === maxQuantity}>+</button>
      </div>
    );
}