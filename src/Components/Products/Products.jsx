import "./Products.css";


export const Products = ({ items }) => {


  return (
    <>
      {items.map((item) => ( 
        <div className="card" key={item.id}>
          <p className="desc-text">{item.description}</p>
          <div className="image-container">
            <img src={item.img} alt={item.name} />
          </div>
          <div className="card-text">
            <h3>{item.name}</h3>
            <p>{`$${item.price.toFixed(2)}`}</p>
          </div>
        </div>
      ))}
    </>
  );
};

