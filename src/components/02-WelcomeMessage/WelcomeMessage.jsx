/** @format */

import { Container, Panel } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function WelcomeMessage({ name = "دوست عزیز" }) {
  return (
    <Container
      style={{
        padding: "30px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Panel
        shaded
        bordered
        style={{
          maxWidth: "500px",
          width: "100%",
          background: "white",
          borderRadius: "16px",
          padding: "60px 40px",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          border: "none",
        }}
      >
        <div
          style={{
            fontSize: "16px",
            color: "#9ca3af",
            marginBottom: "20px",
            fontWeight: "500",
            letterSpacing: "1px",
          }}
        >
          🎉 خوش آمدید 👋
        </div>
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "900",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: "0 0 20px 0",
          }}
        >
          Welcome {name}!
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#6b7280",
            marginBottom: "10px",
            lineHeight: "1.6",
          }}
        >
          خوشحال می‌شیم که شما را می‌بینیم
        </p>
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            background: "#f3f4f6",
            borderRadius: "8px",
            borderLeft: "4px solid #667eea",
          }}
        >
          <p
            style={{
              margin: "0",
              fontSize: "14px",
              color: "#555",
              fontWeight: "500",
            }}
          >
            ✨ برنامه شما با موفقیت بارگذاری شد!
          </p>
        </div>
      </Panel>
    </Container>
  );
}

export default WelcomeMessage;
