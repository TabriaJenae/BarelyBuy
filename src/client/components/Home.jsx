import Faker from "./Faker"
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"
import { useState } from "react"
import ProductDetail from "./ProductDetail"
import Card from "./Card"


export default function Home({ onSearch }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchText, setSearchText] = useState(''); // State for search text
    const data = [];
  
    const handleProductClick = (product) => {
        setSelectedProduct(product);
      };
    
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
        <div>
            <SearchBar onSearch={handleSearch} /> {/* Add the SearchBar component */}
            {filteredProducts.map((product) => (
            <div key={product.id} onClick={() => handleProductClick(product)}>
                <Card product={product} />
            </div>
            ))}
        </div>
        <div>   
            <Faker />
        </div>
        { (selectedProduct && <ProductDetail product={selectedProduct} />) }
        </>
    )
}