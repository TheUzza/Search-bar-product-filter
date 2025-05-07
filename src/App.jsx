import React, { useState } from "react";
import products from "./Components/Products";
import { SearchBar } from "./Components/SearchBar";
import Cards from "./Components/Cards";

function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div className="bg-gray-700 min-h-screen flex flex-col items-center justify-center">
      <SearchBar items={products} setResults={setFilteredProducts} />
      <Cards items={filteredProducts} />
    </div>
  );
}

export default App;
