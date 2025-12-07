/** @format */

import { useState } from "react";
import CounterDemo from "./components/01-counter/Counter.demo.jsx";
// import TodoDemo from "./components/02-todo-list/Todo.demo.jsx"; // بعداً می‌سازیم
import "./App.css";
import WelcomeMessageDemo from "./components/02-WelcomeMessage/WelcomeMessage.demo.jsx";

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
        <button onClick={() => setCurrentPractice("WelcomeMessage")}>
          تمرین ۲: WelcomeMessage
        </button>
        {/* بعداً دکمه‌های بیشتر */}
      </div>

      {currentPractice === "counter" && <CounterDemo />}
      {currentPractice === "WelcomeMessage" && <WelcomeMessageDemo />}
    </div>
  );
}

export default App;
