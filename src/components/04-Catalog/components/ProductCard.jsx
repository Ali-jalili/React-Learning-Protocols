/** @format */
import { Badge } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function ProductCard({ product }) {
  // رنگ‌های مختلف برای دسته‌بندی‌های مختلف
  const categoryColors = {
    کتاب: "#3b82f6",
    الکترونیک: "#ef4444",
    "خانه و آشپزخانه": "#10b981",
    "لوازم جانبی": "#f59e0b",
  };

  const categoryColor = categoryColors[product.category] || "#8b5cf6";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 0",
      }}
    >
      {/* سمت چپ - نام و دسته‌بندی */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontWeight: "600",
            fontSize: "16px",
            color: "#1f2937",
            marginBottom: "8px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {product.name}
        </div>
        <Badge
          content={product.category}
          style={{
            backgroundColor: categoryColor,
            borderRadius: "6px",
            padding: "4px 8px",
            fontSize: "12px",
            fontWeight: "500",
            color: "white",
            display: "inline-block",
          }}
        />
      </div>

      {/* سمت راست - قیمت */}
      <div
        style={{
          textAlign: "left",
          marginLeft: "20px",
        }}
      >
        <div
          style={{
            fontWeight: "700",
            fontSize: "18px",
            color: categoryColor,
          }}
        >
          {Number(product.price).toLocaleString("fa-IR")} تومان
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
