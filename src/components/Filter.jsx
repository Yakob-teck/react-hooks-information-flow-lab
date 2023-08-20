import React from "react";

function Filter({ onCategoryChange }) {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <select onChange={handleCategoryChange}>
      <option value="all">All</option>
      <option value="food">Food</option>
      <option value="electronics">Electronics</option>
      {/* Add more options as needed */}
    </select>
  );
}

export default Filter;
