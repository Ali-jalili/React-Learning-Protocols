/** @format */

import { Input, Button, Stack } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function InputItem({ inputValue, onInputChange, onAddItem }) {
  return (
    <form
      onSubmit={onAddItem}
      style={{
        marginBottom: "30px",
        padding: "20px",
        background: "#f9fafb",
        borderRadius: "8px",
        border: "1px solid #e5e7eb",
      }}
    >
      <Stack spacing={12} vertical>
        <label
          style={{
            fontWeight: "600",
            color: "#555",
            fontSize: "14px",
          }}
        >
          آیتم جدید را وارد کنید:
        </label>
        <Stack spacing={8} horizontal>
          <Input
            type="text"
            value={inputValue}
            onChange={(value) => onInputChange(value)}
            placeholder="نام کالا یا خدمات..."
            style={{ flex: 1 }}
            size="lg"
          />
          <Button
            onClick={onAddItem}
            appearance="primary"
            color="cyan"
            style={{
              padding: "8px 20px",
              fontWeight: "600",
            }}
          >
            ➕ اضافه کردن
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}

export default InputItem;
