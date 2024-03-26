import React from 'react';

import './AddToCart.css'

import { useCart } from '/src/CartContext.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddToCart = () => {

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        const notify = () => {
            toast("👍 686 Snowboarding Jacket added to cart!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        };
        
        notify();
        addToCart();
      };

    return(
        <div className="addTC-btn">
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}