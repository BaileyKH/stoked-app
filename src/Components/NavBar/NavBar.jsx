import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import './NavBar.css'

export const NavBar = () => {
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
            </div>
        </nav>
    );
}

