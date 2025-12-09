/** @format */

import React from "react";
import { useState } from "react";
import ProductList from "./ProductList";
import FilterBar from "./FilterBar";
import { initialProducts } from "../data.js";
import { Button } from "rsuite";

function ProductCatalog() {
  const [products, setProducts] = useState(initialProducts);

  const [filterText, setFilterText] = useState("");

  const [category, setCategory] = useState("All");

  function handleFilterChange(value) {
    setFilterText(value.trim());
  }

  const filteredByText = products.filter((item) =>
    item.name.toLowerCase().includes(filterText)
  );

  function handleCategoryChange(category) {
    setCategory(category);

    console.log(category);
  }


  const filteredProducts = products.filter((item) => {
  
  }

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
      <FilterBar
        onHandelFilterChange={handleFilterChange}
        filterText={filterText}
        onCategorySelect={handleCategoryChange}
      />

      <ProductList initialProducts={filteredByText} />
    </div>
  );
}

export default ProductCatalog;
