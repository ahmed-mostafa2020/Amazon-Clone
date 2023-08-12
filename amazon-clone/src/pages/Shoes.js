import Nav from "../components/Nav";
import Recommended from "../components/Recommended";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import products from "../db/data";
import Card from "../components/Card";
import Products from "../components/Products";

const Shoes = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering (Category)-----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering (Company) -----------
  const handleClick = (event) => {
    setSelectedCompany(event.target.value);
  };

  // ----------- Radio Filtering (Price) -----------
  const handleChangePrice = (event) => {
    setSelectedPrice(event.target.value);
  };

  // ----------- Radio Filtering (Color) -----------
  const handleChangeColor = (event) => {
    setSelectedColor(event.target.value);
  };

  function filteredData(
    products,
    selectedCategory,
    selectedCompany,
    selectedPrice,
    selectedColor,
    query
  ) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selectedCategory filter
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        ({ category }) => category === selectedCategory
      );
    }

    // Applying selectedCompany filter
    if (selectedCompany) {
      filteredProducts = filteredProducts.filter(
        ({ company }) => company === selectedCompany
      );
    }

    // Applying selectedPrice filter
    if (selectedPrice) {
      filteredProducts = filteredProducts.filter(
        ({ newPrice }) => newPrice === selectedPrice
      );
    }

    // Applying selectedColor filter
    if (selectedColor) {
      filteredProducts = filteredProducts.filter(
        ({ color }) => color === selectedColor
      );
    }

    return filteredProducts.map(
      ({ id, image, title, rating, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          id={id}
          image={image}
          title={title}
          rating={rating}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(
    products,
    selectedCategory,
    selectedCompany,
    selectedPrice,
    selectedColor,
    query
  );

  return (
    <div className="shoes">
      <Sidebar
        handleChange={handleChange}
        handleChangePrice={handleChangePrice}
        handleChangeColor={handleChangeColor}
      />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
};

export default Shoes;
