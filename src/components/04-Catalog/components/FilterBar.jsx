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

      <Button onClick={() => onCategorySelect("All Categories")}>
        All Categories
      </Button>
      <Button onClick={() => onCategorySelect("Electronics")}>
        Electronics
      </Button>
      <Button>Books</Button>
      <Button>Home & Kitchen</Button>
      <Button>Accessories</Button>
    </div>
  );
}

export default FilterBar;
