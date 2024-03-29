import { useState } from "react";

import "./ShoppingCart.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import img from "/public/product-images/686-jacket.jpg";
import { Checkout } from "../Buttons/Checkout/Checkout";

export const ShoppingCart = () => {
    const [quantity, setQuantity] = useState(1);
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <div className="main-container">
            <div className="content-container">
                <div className="img-container">
                    <img src={img} />
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
                    <div className="size-quantity-change">
                        <p>Size</p>
                        <select>
                            <option value="s">Small</option>
                            <option value="m">Medium</option>
                            <option value="l">Large</option>
                            <option value="xl">XL</option>
                        </select>
                        <p>Quantity</p>
                        <select
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        >
                            {numbers.map((number) => (
                                <option key={number} value={number}>
                                    {number}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="content-price">
                    <p>$435.68</p>
                </div>
                <div className="remove-item">
                    <FontAwesomeIcon icon={faTrash} />
                </div>
            </div>
            <div className="summary-container">
                <h3>Summary</h3>
                <div className="promo-container">
                    <p>Do you have a Promo Code?</p>
                    <div className="input-container">
                        <input type="text" placeholder="enter promo code" />
                        <button>Apply</button>
                    </div>
                </div>
                <div className="subtotal">
                    <p>Subtotal</p>
                    <p className="price-text">$435.68</p>
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
                    <p className="price-text">$445.68</p>
                </div>
                <hr></hr>
                <div className="checkout-btn-container">
                    <Checkout />
                </div>
            </div>
        </div>
    );
};
