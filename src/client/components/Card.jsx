import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Card({ product, onAddToCart }) {
  const handleAddToCart = () => {
    // You can perform actions here when the button is clicked
    // For example, you can add the product to the cart
    onAddToCart(product);
  };

  return (
    <div className="card outline">
      <h2>{product.product_name}</h2>
      <p>Price: {product.price}</p>
      <button onClick={handleAddToCart} className='addCart'>Add to Cart</button>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    product_name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired, // Callback function for adding to cart
};

