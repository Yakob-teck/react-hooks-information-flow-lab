import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const onDarkModeClick = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const onCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick} />
      <ShoppingList items={itemData} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
