/** @format */

import React from "react";
import { useState } from "react";
import ProductList from "./ProductList";
import FilterBar from "./FilterBar";
import { initialProducts } from "../data.js";
import { Container } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function ProductCatalog() {
  // const [products, setProducts] = useState(initialProducts);
  const [filterText, setFilterText] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("no sorting");

  function handleFilterChange(value) {
    setFilterText(value);
  }

  function handleCategoryChange(category) {
    setCategory(category);
  }

  function handleSortChange(sortBy) {
    setSort(sortBy);
  }

  const filteredProducts = initialProducts.filter((item) => {
    const isTextMatch = item.name
      .toLowerCase()
      .includes(filterText.toLowerCase().trim());

    const isCategoryMatch = category === "all" || item.category === category;

    return isTextMatch && isCategoryMatch;
  });

  let displayedProducts = [...filteredProducts]; // کپی از لیست فیلتر شده

  if (sort === "name") {
    displayedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "price") {
    displayedProducts.sort((a, b) => a.price - b.price);
  }
  return (
    <Container
      style={{
        padding: "30px",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          padding: "30px",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#333",
            fontSize: "28px",
            fontWeight: "700",
          }}
        >
          کاتالوگ محصولات
        </h1>
        <FilterBar
          onHandelFilterChange={handleFilterChange}
          filterText={filterText}
          onCategorySelect={handleCategoryChange}
          onSortSelect={handleSortChange}
        />
        <ProductList initialProducts={displayedProducts} />
      </div>
    </Container>
  );
}

export default ProductCatalog;
