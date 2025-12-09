/** @format */

import { useState } from "react";
import CounterDemo from "./components/01-counter/Counter.demo.jsx";
import WelcomeMessageDemo from "./components/02-WelcomeMessage/WelcomeMessage.demo.jsx";
import "./App.css";
import GroceryListDemo from "./components/03-GroceryList/GroceryListDemo.jsx";
import ProductCatalogDemo from "./components/04-Catalog/ProductCatalog.demo.jsx";

function App() {
  const [currentPractice, setCurrentPractice] = useState("counter");

  return (
    <div>
      <h1>🧠 نمایشگاه تمرین‌های React</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setCurrentPractice("WelcomeMessage")}>
          1: WelcomeMessage
        </button>

        <button
          onClick={() => setCurrentPractice("counter")}
          style={{ marginRight: "10px" }}
        >
          2: Counter
        </button>

        <button
          onClick={() => setCurrentPractice("GroceryListDemo")}
          style={{ marginRight: "10px" }}
        >
          3: GroceryList
        </button>

        <button
          onClick={() => setCurrentPractice("ProductCatalogDemo")}
          style={{ marginRight: "10px" }}
        >
          4: ProductCatalog
        </button>
      </div>

      {currentPractice === "WelcomeMessage" && <WelcomeMessageDemo />}
      {currentPractice === "counter" && <CounterDemo />}
      {currentPractice === "GroceryListDemo" && <GroceryListDemo />}
      {currentPractice === "ProductCatalogDemo" && <ProductCatalogDemo />}
    </div>
  );
}

export default App;
