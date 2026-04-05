// src/App.js
import React, { useState } from "react";
import UserForm from "./components/UserForm";
import ItemList from "./components/ItemList";
import FetchData from "./components/FetchData";

function App() {
  const [active, setActive] = useState("form");

  return (
    <div>
      <h1>React Advanced Lab</h1>

      {/* Navigation Buttons */}
      <button onClick={() => setActive("form")}>Exercise 1</button>
      <button onClick={() => setActive("list")}>Exercise 2</button>
      <button onClick={() => setActive("api")}>Exercise 3</button>

      {/* Render Components */}
      {active === "form" && <UserForm />}
      {active === "list" && <ItemList />}
      {active === "api" && <FetchData />}
    </div>
  );
}

export default App;
