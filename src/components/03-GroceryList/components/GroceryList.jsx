/** @format */

import { useState } from "react";
import ItemList from "../ItemList";
import InputItem from "./inputItem";

function GroceryList() {
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState([]);

  function handleInputChange(value) {
    setInputValue(value);

    // console.log(inputValue);
  }

  function handleAddItem(e) {
    e.preventDefault();
    const id = crypto.randomUUID();

    const newItem = {
      id,
      text: inputValue,
    };

    if (!inputValue.trim()) return;
    setItem((item) => [...item, newItem]);

    setInputValue("");

    // console.log(item);
  }

  function handleDelete(id) {
    setItem((item) => item.filter((item) => item.id !== id));
  }

  function handelClearList() {
    if (!item) return;
    setItem([]);
  }

  return (
    <div>
      <InputItem
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onAddItem={handleAddItem}
      />
      <ItemList item={item} onDeleteItem={handleDelete} />
      {!item.length === 0 && <button onClick={handelClearList}>Clear</button>}
    </div>
  );
}

export default GroceryList;
