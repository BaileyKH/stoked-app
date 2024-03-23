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
                  <button>Shop now</button>
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
