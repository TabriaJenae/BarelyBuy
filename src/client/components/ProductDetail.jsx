// ProductDetail.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ProductDetail({ product }) {
  return (
    <div>
      <h2>Product Details</h2>
      <p>ID: {product.id}</p>
      <p>Product Name: {product.product_name}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}

export default ProductDetail;
