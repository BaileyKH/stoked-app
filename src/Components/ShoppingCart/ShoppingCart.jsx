import "./ShoppingCart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

import img from '/src/assets/product-images/686-jacket.jpg'
import { Checkout } from "../Buttons/Checkout/Checkout";

export const ShoppingCart = () => {
    return (
        <div className="main-container">
            <div className="content-container">
                <div className="img-container">
                    <img src={img}/>
                    <hr></hr>
                    <div className="shipping">
                        <p>Shipping</p>
                        <p>Arrives Wed, Apr 24</p>
                    </div>
                </div>
                <div className="content-text-container">
                    <h3>686 Snowboarding Jacket</h3>
                    <p>Heavy duty jacket</p>
                    <p>Black / orange</p>
                    <p><strong>Size</strong> Medium <strong>Quantity</strong> 1</p>
                </div>
                <div className="content-price">
                        <p>$489.34</p>
                </div>
            </div>
            <div className="summary-container">
                <h3>Summary</h3>
                <div className="promo-container">
                    <p>Do you have a Promo Code?</p>
                    <div className="input-container">
                        <input type="text" placeholder="enter promo code"/>
                        <button>Apply</button>
                    </div>
                </div>
                <div className="subtotal">
                    <p>Subtotal</p>
                    <p className="price-text">$489.34</p>
                </div>
                <div className="est-ship">
                    <p>Estimated Shipping</p>
                    <p className="price-text">$10.00</p>
                </div>
                <div className="est-tax">
                    <p>Estimated Tax</p>
                    <p>--</p>
                </div>
                <hr></hr>
                <div className="overall-total">
                    <p>Total</p>
                    <p className="price-text">$499.34</p>
                </div>
                <hr></hr>
                <div className="checkout-btn-container">
                    <Checkout />
                </div>
            </div>
        </div>
    );
};
