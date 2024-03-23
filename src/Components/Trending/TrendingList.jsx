import "./Trending.css";
import { items } from "/src/Components/ProductData.js";

export const TrendingList = () => {
  const filteredItems = items.filter((item) => item.id <= 10);

  return (
    <>
      {filteredItems.map((item) => ( 
      <div className="items" key={item.id}>
        <div className="image-container">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="item-text">
          <h3>{item.name}</h3>
          <p className="item-price">{`$${item.price.toFixed(2)}`}</p>
        </div>
      </div>
      ))}
    </>
  );
};