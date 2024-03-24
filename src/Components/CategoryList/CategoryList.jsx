import { useState } from "react";
import { items } from "/src/Components/ProductData.js";

import "./CategoryList.css";
import { Products } from "../Products/Products";

export const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const uniqueCategories = [
    "All",
    ...new Set(items.map((item) => item.category)),
  ];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <div className="category-btn-container">
        {uniqueCategories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="prod-container">
        <Products items={filteredItems} />
      </div>
    </div>
  );
};
