import Card from './Card';
import {faker} from '@faker-js/faker';
import { useState } from 'react';


export default function Faker() {
  const data = [];
  const [selectedProduct, setSelectedProduct] = useState(null); // Initialize selected product state

  
  for(let i = 0; i < 50; i++) {
    const minPrice = 8;
    const maxPrice = 20;
    const price = `$${(minPrice + Math.random() * (maxPrice - minPrice)).toFixed(2)}`;

    let fakee = {
      id: i, 
      product_name: faker.commerce.product(),
      price: price,
    };
    data.push(fakee);
  }

   // Define the handleProductClick function to set the selected product
   const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    // Implement your logic to add the product to the cart here
    console.log(`Added ${product.product_name} to the cart`);
  };


  return (
    <>
    <div className="card-container outline">
      {data.map((product) => (
        <div key={product.id} onClick={() => handleProductClick(product)}>
          <Card product={product} onAddToCart={handleAddToCart} />
        </div>
      ))}

    </div>
    </>
  );
}