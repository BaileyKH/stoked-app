import { Link } from 'react-router-dom';

import './Banner.css'

export const Banner = ({title, description, image}) => {
    return(
        <div className="banner">
        <div className="container">
          <div className="banner-container">
            <div className="text-container">
              <div className="text">
                <h2>{title}</h2>
                <p>{description}</p>
                  <Link onClick={() => window.top(0,0)} to="/categories"><button> Shop now</button></Link>
              </div>
            </div>
            <div className="img-side">
              <img src={image} alt={title} />
            </div>
          </div>
        </div>
      </div>
    );
}
