/** @format */
import React from "react";
import { Center, List } from "rsuite";
import ProductCard from "./ProductCard";

function ProductList({ initialProducts }) {
  return (
    <Center style={{ marginTop: 20 }}>
      <div style={{ width: "100%", maxWidth: 720, padding: 8 }}>
        <List bordered hover>
          {initialProducts.map((item) => (
            <List.Item key={item.id} index={item.id}>
              <ProductCard product={item} />
            </List.Item>
          ))}
        </List>
      </div>
      <select name="" id="">
        <option value="">بدون مرتب سازی</option>
        <option value="name">مرتب سازی بر اساس نام</option>
        <option value="price">مرتب سازی بر اساس قیمت</option>
      </select>
    </Center>
  );
}

export default ProductList;
