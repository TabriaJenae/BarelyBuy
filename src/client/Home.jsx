import Faker from "./components/Faker"
import NavBar from "./components/NavBar"
import SearchBar from "./components/SearchBar"
import { useState } from "react"
import ProductDetail from "./components/ProductDetail"
import Card from "./components/Card"
import {faker} from '@faker-js/faker'


export default function Home() {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchText, setSearchText] = useState(''); // State for search text
    const data = [];

    //faker
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
    //end of faker


      // Function to filter products based on search text
      const filterProducts = (products, text) => {
        return products.filter((product) =>
          product.product_name.toLowerCase().includes(text.toLowerCase()),
        );
      };
    
      // Update the search text and filtered products when the user types in the search bar
      const handleSearch = (text) => {
        setSearchText(text);
      };
    
      // Filter the products based on the search text
      const filteredProducts = filterProducts(data, searchText);
    
    

    return(
        <>
        <div>
            <NavBar />
        </div>
        <div className="card-container outline">
          <SearchBar onSearch={handleSearch} /> {/* Add the SearchBar component */}
            {filteredProducts.map((product) => (
            <div key={product.id}>
              <Card product={product} />
            </div>
            ))}
            { (selectedProduct && <ProductDetail product={selectedProduct} />) }
        </div>

        
        </>
    )
}