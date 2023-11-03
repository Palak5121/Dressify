import React from 'react';
import product1 from "../assets/phone1.jpg";
import product2 from "../assets/laptop.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/perfume.jpg";
// import Product5 from "../assets/shoe1.jpg";

import "../comman.scss";

const ProductList = ({ filters }) => {
  const products = [
    { id: 1, name: 'Product 1', category: 'Electronics', price: 499, image: product1 },
    { id: 2, name: 'Product 2', category: 'Clothing', price: 29, image: product3 },
    // { id: 3, name: 'Product 3', category: 'Shoes', price: 78, image: Product5 },
    { id: 4, name: 'Product 4', category: 'Beauty', price: 48, image: product4 },
    { id: 1, name: 'Product 5', category: 'Electronics', price: 499, image: product2 },

    // Add more products here
  ];

  const filteredProducts = products.filter(product => {
    if (filters.category && product.category !== filters.category) {
      return false;
    }
    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange.split('-');
      if (product.price < parseInt(minPrice) || product.price > parseInt(maxPrice)) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
