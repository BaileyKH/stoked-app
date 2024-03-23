import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import './NavBar.css'

export const NavBar = () => {
    return(
        <nav className="navbar">
            <a className="nav-logo" href="#">STOKED</a>
            <div className="nav-items">
                <a className="links" href="#">Product Page</a>
                <a className="links" href="#">Categories</a>
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

