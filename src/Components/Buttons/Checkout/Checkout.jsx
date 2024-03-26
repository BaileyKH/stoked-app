import { Link } from 'react-router-dom';

import "./Checkout.css";

export const Checkout = () => {
    return (
        <div className="checkout-btn">
            <Link to="/"><button>Checkout</button></Link>
        </div>
    );
};
