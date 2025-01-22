// src/components/base/ProductDetails.jsx
import React from 'react';

const ProductDetails = ({ name, description, price }) => {
  return (
    <div className="mx-auto p-6 container">
      <h1 className="font-bold text-3xl">{name}</h1>
      <p className="mt-4">{description}</p>
      <p className="mt-2 text-lg font-semibold">Price: ${price}</p>
    </div>
  );
};

export default ProductDetails;
