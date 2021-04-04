import React from 'react';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <MainTitle>IronStore</MainTitle>
      <div>
        <h2>Search</h2>
        <input></input>
        <input type="checkbox" id="stockButton" />
        <label for="stockButton">Only show products on stock</label>
      </div>
      <div></div>
    </div>
  );
}

export default App;

const MainTitle = styled.h1`
  font-size: 42px;
`;
