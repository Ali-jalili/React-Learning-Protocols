/** @format */
import { Button, Input, SelectPicker, Stack, Panel } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function FilterBar({
  filterText,
  onHandelFilterChange,
  onCategorySelect,
  onSortSelect,
}) {
  const sortOptions = [
    { label: "بدون مرتب‌سازی", value: "no sorting" },
    { label: "مرتب‌سازی بر اساس نام", value: "name" },
    { label: "مرتب‌سازی بر اساس قیمت", value: "price" },
  ];

  const categories = [
    { label: "تمام دسته‌بندی‌ها", value: "all" },
    { label: "کتاب", value: "کتاب" },
    { label: "الکترونیک", value: "الکترونیک" },
    { label: "خانه و آشپزخانه", value: "خانه و آشپزخانه" },
    { label: "لوازم جانبی", value: "لوازم جانبی" },
  ];

  return (
    <Panel
      shaded
      bordered
      style={{
        marginBottom: "30px",
        borderRadius: "8px",
        background: "#f9fafb",
      }}
    >
      <Stack vertical spacing={15} style={{ padding: "20px" }}>
        {/* Title */}
        <h3 style={{ margin: "0 0 10px 0", color: "#333", fontSize: "16px" }}>
          فیلتر و مرتب‌سازی
        </h3>

        {/* Search Input */}
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "#555",
              fontSize: "14px",
            }}
          >
            جستجوی نام محصول
          </label>
          <Input
            value={filterText}
            onChange={(value) => onHandelFilterChange(value)}
            placeholder="نام محصول را وارد کنید..."
            style={{ width: "100%" }}
            size="lg"
          />
        </div>

        {/* Category and Sort in a Row */}
        <Stack spacing={15} horizontal>
          {/* Category Select */}
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#555",
                fontSize: "14px",
              }}
            >
              دسته‌بندی
            </label>
            <SelectPicker
              data={categories}
              defaultValue="all"
              onChange={onCategorySelect}
              style={{ width: "100%" }}
              size="lg"
            />
          </div>

          {/* Sort Select */}
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#555",
                fontSize: "14px",
              }}
            >
              مرتب‌سازی
            </label>
            <SelectPicker
              data={sortOptions}
              defaultValue="no sorting"
              onChange={onSortSelect}
              style={{ width: "100%" }}
              size="lg"
            />
          </div>
        </Stack>
      </Stack>
    </Panel>
  );
}

export default FilterBar;
