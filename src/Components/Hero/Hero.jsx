import { Link } from 'react-router-dom';

import './Hero.css'

export const Hero = () => {
    return(
        <div className="hero-container">
            <div className="hero-text-container">
                <h1>Stoked Snowboarding</h1>
                <p>Gear up for the season with the latest boards from your favorite brands</p>
                <Link to="/categories"><button>Shop now</button></Link>
            </div>
        </div>
    );
}