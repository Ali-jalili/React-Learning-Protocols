/** @format */

function ProductCard({ product }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ fontWeight: 600 }}>{product.name}</div>
      <div style={{ fontWeight: 700 }}>{product.price} تومان</div>
    </div>
  );
}

export default ProductCard;
