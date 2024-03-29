import { Link } from 'react-router-dom';

import "./Checkout.css";

export const Checkout = () => {
    return (
        <div className="checkout-btn">
            <Link onClick={() => window.top(0,0)} to="/"><button>Checkout</button></Link>
        </div>
    );
};
