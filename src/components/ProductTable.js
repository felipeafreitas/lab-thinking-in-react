import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((element) => {
          return <ProductRow name={element.name} price={element.price} />;
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
