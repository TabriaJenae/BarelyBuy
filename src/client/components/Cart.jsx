import React from 'react';

const handleAddToCart = (product) => {
    // Create a copy of the current cartItems array and add the new product
    const updatedCart = [...cartItems, product];
  
    // Update the cartItems state with the new array
    setCartItems(updatedCart);
  };

  
function Cart({ cartItems }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.product_name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
