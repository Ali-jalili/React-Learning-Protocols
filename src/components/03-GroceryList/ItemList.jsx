/** @format */

import { Panel, Button, Stack, Badge } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function ItemList({ item, onDeleteItem }) {
  return (
    <div>
      {item.length === 0 ? (
        <Panel
          shaded
          bordered
          style={{
            textAlign: "center",
            padding: "40px 20px",
            background: "#f0f4f8",
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
            📭 لیست خالی است. یک آیتم اضافه کنید!
          </div>
        </Panel>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Badge
            content={item.length}
            style={{
              marginBottom: "10px",
              backgroundColor: "#667eea",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#555",
              }}
            >
              {item.length} آیتم در لیست
            </div>
          </Badge>

          {item.map((itemData, index) => (
            <Panel
              key={itemData.id}
              bordered
              shaded
              style={{
                padding: "14px",
                borderRadius: "8px",
                background: "white",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(102, 126, 234, 0.15)";
                e.currentTarget.style.transform = "translateX(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <Stack horizontal spacing={12} alignItems="center">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    background: "#667eea",
                    color: "white",
                    borderRadius: "50%",
                    fontWeight: "600",
                    fontSize: "12px",
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </div>
                <div
                  style={{
                    flex: 1,
                    fontSize: "16px",
                    color: "#1f2937",
                    fontWeight: "500",
                    wordBreak: "break-word",
                  }}
                >
                  {itemData.text}
                </div>
                <Button
                  onClick={() => onDeleteItem(itemData.id)}
                  appearance="primary"
                  color="red"
                  size="sm"
                  style={{
                    padding: "6px 12px",
                    fontSize: "12px",
                    flexShrink: 0,
                  }}
                >
                  🗑️ حذف
                </Button>
              </Stack>
            </Panel>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemList;
