/** @format */

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        background: "#667eea",
        color: "white",
        border: "none",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.background = "#5568d3")}
      onMouseLeave={(e) => (e.target.style.background = "#667eea")}
    >
      {children}
    </button>
  );
}

export default Button;
