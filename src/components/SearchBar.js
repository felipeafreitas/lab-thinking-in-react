import React from 'react';

function SearchBar(props) {
  return (
    <div>
      <h2>Search</h2>
      <input onChange={props.handleSearch} />
      <input
        type="checkbox"
        id="stockButton"
        onChange={props.handleAvailableProducts}
      />
      <label for="stockButton">Only show products on stock</label>
    </div>
  );
}

export default SearchBar;
