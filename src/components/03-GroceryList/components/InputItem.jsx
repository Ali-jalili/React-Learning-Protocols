/** @format */

import Button from "./Button";

function InputItem({ inputValue, onInputChange, onAddItem }) {
  return (
    <form>
      <label>Enter Text: </label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <Button onClick={onAddItem}>Add</Button>
    </form>
  );
}

export default InputItem;
