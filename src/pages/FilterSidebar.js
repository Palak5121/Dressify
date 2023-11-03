// src/components/FilterSidebar.js
import React from 'react';
import "../comman.scss"

const FilterSidebar = ({ filters, setFilters }) => {
  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handlePriceRangeChange = (e) => {
    setFilters({ ...filters, priceRange: e.target.value });
  };

  return (
    <div className="filter-sidebar">
      <h2>Filters</h2>
      <label>
        Category:
        <select value={filters.category} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          {/* <option value="Shoe">Shoes</option> */}
          <option value="Beauty">Beauty</option>

          {/* Add more categories here */}
        </select>
      </label>
      <label>
        Price Range:
        <select value={filters.priceRange} onChange={handlePriceRangeChange}>
          <option value="">All</option>
          <option value="0-50">$0 - $50</option>
          <option value="51-100">$51 - $100</option>
          {/* Add more price ranges here */}
        </select>
      </label>
    </div>
  );
};

export default FilterSidebar;
