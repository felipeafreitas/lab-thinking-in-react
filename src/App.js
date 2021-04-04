import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import jsondata from './data.json';

function App() {
  const [products, setProducts] = useState([...jsondata.data]);

  const [unfilteredProducts, setunfilteredProducts] = useState([]);

  let handleSearch = (e) => {
    console.log(e.target.value);
    let newArr = jsondata.data.filter((element) => {
      return element.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setProducts([...newArr]);
  };

  let handleAvailableProducts = (e) => {
    if (e.target.checked === true) {
      setunfilteredProducts(products);
      let newArr = products.filter((element) => {
        return element.stocked === true;
      });
      setProducts(newArr);
    } else {
      setProducts(unfilteredProducts);
    }
  };

  return (
    <div className="App">
      <MainTitle>IronStore</MainTitle>
      <SearchBar
        handleSearch={handleSearch}
        handleAvailableProducts={handleAvailableProducts}
      />
      <ProductTable products={products} />
    </div>
  );
}

export default App;

const MainTitle = styled.h1`
  font-size: 42px;
`;
