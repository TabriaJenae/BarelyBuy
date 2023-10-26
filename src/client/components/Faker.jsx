import Card from './Card';
import {faker} from '@faker-js/faker';
import { useState } from 'react';


export default function Faker() {
  const data = [];
  const [selectedProduct, setSelectedProduct] = useState(null); // Initialize selected product state
  
  faker.seed(123); //set seed for constitent inventory.
  const firstRandom = faker.number.int();
  // Setting the seed again resets the sequence.
  faker.seed(123);
  const secondRandom = faker.number.int();
  console.log(firstRandom === secondRandom); //console logs 'True' if seed is indeed working.

  for(let i = 0; i < 100; i++) {
    let fakee = {
      id: i, 
      product_name: faker.commerce.product(),
      price: faker.commerce.price({ min: 8, max: 20, dec: 2, symbol: "$"}),
    };
    data.push(fakee);
  }



  const handleAddToCart = (product) => { 
    console.log(`Added ${product.product_name} to the cart`);
    setCartItems(product);
    console.log(cartItems);
    };

  return (
    <>
    <div className="card-container outline">
      {data.map((product) => (
        <div key={product.id}>
          <Card product={product} cartItems={handleAddToCart} />
        </div>
      ))}

    </div>
    </>
  );
}