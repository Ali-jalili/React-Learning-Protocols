/** @format */

// import { testData } from "./components/data";

function ItemList({ item, onDeleteItem }) {
  return (
    <ul>
      {item.map((item) => (
        <li key={item.id}>
          {" "}
          {item.text}{" "}
          <button onClick={() => onDeleteItem(item.id)}>delete</button>{" "}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
