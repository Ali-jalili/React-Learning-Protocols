/** @format */

import { useState } from "react";
import CounterDemo from "./components/01-counter/Counter.demo.jsx";
// import TodoDemo from "./components/02-todo-list/Todo.demo.jsx"; // بعداً می‌سازیم
import "./App.css";

function App() {
  const [currentPractice, setCurrentPractice] = useState("counter");

  return (
    <div>
      <h1>🧠 نمایشگاه تمرین‌های React</h1>

      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setCurrentPractice("counter")}
          style={{ marginRight: "10px" }}
        >
          تمرین ۱: Counter
        </button>
        <button onClick={() => setCurrentPractice("todo")}>
          تمرین ۲: Todo List
        </button>
        {/* بعداً دکمه‌های بیشتر */}
      </div>

      {currentPractice === "counter" && <CounterDemo />}
      {currentPractice === "todo" && <TodoDemo />}
    </div>
  );
}

export default App;
