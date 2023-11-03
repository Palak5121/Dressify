// src/components/ProductPage.js
import React, { useState } from 'react';
import ProductList from '../pages/productList';
import FilterSidebar from './FilterSidebar';
import "../comman.scss"


function ProductPage() {
  const [filters, setFilters] = useState({ category: '', priceRange: '' });
  
  return (
    <div className="product-page">
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <ProductList filters={filters} />
    </div>
  );
}

export default ProductPage;
