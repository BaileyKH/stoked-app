import "./Products.css";

// Update the component to accept `items` as a prop
export const Products = ({ items }) => {
  // No need to filter here; the filtering is done in CategoryList

  return (
    <>
      {items.map((item) => ( // Correct the parameter to 'item'
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

