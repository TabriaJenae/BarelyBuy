import React, { useState } from 'react';
import NavBar from './NavBar';

const handleAddToCart = (product) => {
  // Create a copy of the current cartItems array and add the new product
  const updatedCart = [...cartItems, product];

  // Update the cartItems state with the new array
  cartItem(updatedCart);
  
};
  
function Cart({ cartItems }) {

  const cartItem = [];
  function handleCart(e){
    cartItems(e.target.value);
    cartItem(cartItems);
  }


  return (
    <>
    <NavBar />
    <div className='outline padding'>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItem.map((item) => (
          <li key={item.id}>
            {item.product_name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Cart;
