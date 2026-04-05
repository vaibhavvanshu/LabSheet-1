// src/components/ItemList.js
import React, { useState } from "react";

function ItemList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  // Add item
  const addItem = () => {
    if (input.trim() === "") return;

    const newItem = {
      id: Date.now(),
      text: input
    };

    setItems([...items, newItem]);
    setInput("");
  };

  // Remove item
  const removeItem = (id) => {
    const updatedList = items.filter((item) => item.id !== id);
    setItems(updatedList);
  };

  return (
    <div style={styles.container}>
      <h1>Dynamic List</h1>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addItem}>Add</button>

      {/* List Display */}
      {items.length === 0 ? (
        <p>No items in the list</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} style={styles.item}>
              {item.text}
              <button onClick={() => removeItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px"
  },
  item: {
    margin: "10px",
    listStyle: "none"
  }
};

export default ItemList;
