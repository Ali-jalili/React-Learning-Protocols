/** @format */

import React from "react";
import ProductList from "./ProductList";
import FilterBar from "./FilterBar";
import { initialProducts } from "../data.js";
import { Button } from "rsuite";

function ProductCatalog() {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
      <FilterBar />
      <Button>الکترونیک</Button>
      <Button>کتاب</Button>
      <Button>آشپزخانه</Button>
      <Button>لوازم جانبی</Button>
      <ProductList initialProducts={initialProducts} />
    </div>
  );
}

export default ProductCatalog;
