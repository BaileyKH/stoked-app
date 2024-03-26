import React from 'react';

import { Link } from 'react-router-dom';
import { useCart } from '/src/CartContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'

import './NavBar.css'

export const NavBar = () => {
    const { cartCount } = useCart();

    return(
        <nav className="navbar">
            <Link to="/" className="nav-logo">STOKED</Link>
            <div className="nav-items">
                <Link to="/productpage" className="links" >Product Page</Link>
                <Link to="/categories" className="links" >Categories</Link>
                <div className="search-container">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input className="search-input" 
                        type="search" 
                        placeholder="Search"/>
                </div>
                <div className="cart-container">
                    <Link to="/cart">
                    <div>
                        <FontAwesomeIcon icon={faCartShopping} className="cart-logo"/>
                        {cartCount > 0 &&
                            <p className="cart-count">{cartCount}</p>
                        }
                    </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

