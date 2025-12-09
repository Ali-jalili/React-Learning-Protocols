/** @format */
import { Button, Input } from "rsuite";
function FilterBar({ filterText, onHandelFilterChange, onCategorySelect }) {
  return (
    <div>
      <Input
        value={filterText}
        onChange={(value) => onHandelFilterChange(value)}
        placeholder="Search product"
      />

      <select name="" id="">
        <option value="">No sorting</option>
        <option value="name">Sort by name</option>
        <option value="price">Sort by price</option>
      </select>

      <Button onClick={() => onCategorySelect("all")}>All Categories</Button>
      <Button onClick={() => onCategorySelect("کتاب")}>کتاب</Button>
      <Button onClick={() => onCategorySelect("الکترونیک")}>الکترونیک</Button>
      <Button onClick={() => onCategorySelect("خانه و آشپزخانه")}>
        خانه و آشپزخانه
      </Button>
      <Button onClick={() => onCategorySelect("لوازم جانبی")}>
        لوازم جانبی
      </Button>
    </div>
  );
}

export default FilterBar;
