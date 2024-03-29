import { useState } from 'react';

import { Link } from 'react-router-dom';
import { useCart } from '/src/CartContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'

import './NavBar.css'

export const NavBar = () => {
    const { cartCount } = useCart();

    const [navExpanded, setNavExpanded] = useState(false);

    return(
        <nav className="navbar">
            <Link to="/" className="nav-logo">STOKED</Link>
            <div className={`slideout-menu ${navExpanded ? 'open' : 'nav-items'}`} >
                <Link to="/productpage" className="links" onClick={navExpanded ? 'close' : ''} >Product Page</Link>
                <Link to="/categories" className="links" onClick={navExpanded ? 'close' : ''} >Categories</Link>
                <div className="search-container">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input className="search-input" 
                        type="search" 
                        placeholder="Search"/>
                </div>
                <div className="cart-container">
                    <Link to="/cart" onClick={navExpanded ? 'close' : ''}>
                    <div>
                        <FontAwesomeIcon icon={faCartShopping} className="cart-logo"/>
                        {cartCount > 0 &&
                            <p className="cart-count">{cartCount}</p>
                        }
                    </div>
                    </Link>
                </div>
            </div>
            <div className="nav-bar-container" onClick={() => setNavExpanded(!navExpanded)}>
                <FontAwesomeIcon icon={faBars} className="bar-icon"/>
            </div>
        </nav>
    );
}

