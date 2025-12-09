/** @format */

import { useState } from "react";
import { Container, Button, Stack, Panel } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <Container
      style={{
        padding: "30px",
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          background: "white",
          borderRadius: "16px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "40px",
            color: "#1f2937",
            fontSize: "32px",
            fontWeight: "700",
          }}
        >
          🔢 شمارنده
        </h1>

        <Panel
          shaded
          bordered
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            borderRadius: "12px",
            padding: "30px",
            marginBottom: "30px",
            border: "none",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: "900",
              color: "white",
              textShadow: "0 2px 8px rgba(0,0,0,0.2)",
              fontFamily: "'Courier New', monospace",
            }}
          >
            {count}
          </div>
        </Panel>

        <Stack spacing={12} vertical>
          <Stack spacing={10} horizontal justify="center">
            <Button
              onClick={handleDecrement}
              disabled={count === 0}
              appearance="primary"
              color="red"
              size="lg"
              style={{
                flex: 1,
                padding: "12px",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              ➖ کاهش
            </Button>
            <Button
              onClick={handleIncrement}
              appearance="primary"
              color="green"
              size="lg"
              style={{
                flex: 1,
                padding: "12px",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              ➕ افزایش
            </Button>
          </Stack>

          <Button
            onClick={handleReset}
            appearance="ghost"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              fontWeight: "600",
              color: "#f5576c",
              border: "2px solid #f5576c",
            }}
          >
            🔄 ریست
          </Button>
        </Stack>

        <div
          style={{
            marginTop: "30px",
            padding: "15px",
            background: "#f3f4f6",
            borderRadius: "8px",
            fontSize: "13px",
            color: "#6b7280",
            fontWeight: "500",
          }}
        >
          <p style={{ margin: "0 0 8px 0" }}>📊 وضعیت:</p>
          <p style={{ margin: "0" }}>
            {count === 0
              ? "شروع از صفر 🚀"
              : count > 10
              ? `عدد بزرگ: ${count} 🎉`
              : `عدد: ${count}`}
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Counter;
