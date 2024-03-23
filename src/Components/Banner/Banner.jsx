import './Banner.css'

export const Banner = () => {
    return(
        <div className="banner">
        <div className="container">
          <div className="banner-container">
            <div className="text-container">
              <div className="text">
                <h2>Burton Step-On</h2>
                <p>The newest addition to the burton line is their one of a kind step-on bindings, making it easier than ever to shred the moutain</p>
                  <button>Shop now</button>
              </div>
            </div>
            <div className="img-side">
              <img src="/src/assets/banner-images/step-on.png" alt="banner" />
            </div>
          </div>
        </div>
      </div>
    );
}
