import './Trending.css'

import { TrendingList } from './TrendingList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const Trending = () => {
    const moveRight = () => {
        let moveIt = document.getElementById("moveIt");
        moveIt.scrollLeft = moveIt.scrollLeft + 285;
    };

    const moveLeft = () => {
        let moveIt = document.getElementById("moveIt");
        moveIt.scrollLeft = moveIt.scrollLeft - 285;
    };

    return(
        <div className="trending">
            <div className="trending-container">
                <div className="trending-title">
                    <div className="trending-btn">
                        <button title="move left" onClick={moveLeft}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <h3>Now Trending</h3>
                        <button title="move right" onClick={moveRight}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
                <div className="item-container" id="moveIt">
                    <TrendingList />
                </div>
            </div>
        </div>
    );
}

