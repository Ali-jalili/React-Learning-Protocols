/** @format */
import React from "react";
import { Center, List } from "rsuite";

function ProductList({ initialProducts }) {
  return (
    <Center style={{ marginTop: 20 }}>
      <div style={{ width: "100%", maxWidth: 720, padding: 8 }}>
        <List bordered hover>
          {initialProducts.map((item) => (
            <List.Item key={item.id} index={item.id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ fontWeight: 600 }}>{item.name}</div>
                <div style={{ fontWeight: 700 }}>{item.price} تومان</div>
              </div>
            </List.Item>
          ))}
        </List>
      </div>
    </Center>
  );
}

export default ProductList;
