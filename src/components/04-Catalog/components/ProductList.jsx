/** @format */
import React from "react";
import { Center, Panel } from "rsuite";
import ProductCard from "./ProductCard";
import "rsuite/dist/rsuite.min.css";

function ProductList({ initialProducts }) {
  return (
    <Center style={{ marginTop: 20, marginBottom: 20 }}>
      <div style={{ width: "100%", maxWidth: "100%" }}>
        {initialProducts.length === 0 ? (
          <Panel
            shaded
            bordered
            style={{
              textAlign: "center",
              padding: "40px 20px",
              background: "#f9fafb",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                color: "#6b7280",
                fontWeight: "500",
              }}
            >
              محصولی با این شرایط یافت نشد
            </div>
          </Panel>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {initialProducts.map((item) => (
              <Panel
                key={item.id}
                bordered
                shaded
                style={{
                  padding: "16px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  background: "white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.15)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <ProductCard product={item} />
              </Panel>
            ))}
          </div>
        )}
      </div>
    </Center>
  );
}

export default ProductList;
