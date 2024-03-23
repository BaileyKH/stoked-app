import "./Products.css";
import { items } from "/src/Components/ProductData.js";

export const Products = () => {
  const filteredItems = items.filter((item) => item.id <= 10);

  return (
    <>
      {filteredItems.map((item) => ( 
      <div className="card" key={item.id}>
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
