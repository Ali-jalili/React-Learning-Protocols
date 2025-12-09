/** @format */

import { useState } from "react";
import ItemList from "../ItemList";
import InputItem from "./inputItem";
import { Container } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function GroceryList() {
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState([]);

  function handleInputChange(value) {
    setInputValue(value);

    // console.log(inputValue);
  }

  function handleAddItem(e) {
    e.preventDefault();
    const id = crypto.randomUUID();

    const newItem = {
      id,
      text: inputValue,
    };

    if (!inputValue.trim()) return;
    setItem((item) => [...item, newItem]);

    setInputValue("");

    // console.log(item);
  }

  function handleDelete(id) {
    setItem((item) => item.filter((item) => item.id !== id));
  }

  function handelClearList() {
    if (!item) return;
    setItem([]);
  }

  return (
    <Container
      style={{
        padding: "30px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          padding: "40px",
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
          📝 لیست خریداری
        </h1>
        <InputItem
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onAddItem={handleAddItem}
        />
        <ItemList item={item} onDeleteItem={handleDelete} />
        {item.length > 0 && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={handelClearList}
              style={{
                background: "#ef4444",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#dc2626")}
              onMouseLeave={(e) => (e.target.style.background = "#ef4444")}
            >
              حذف همه
            </button>
          </div>
        )}
      </div>
    </Container>
  );
}

export default GroceryList;
