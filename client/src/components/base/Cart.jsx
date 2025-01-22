// src/components/base/AddToCartButton.jsx
import React from 'react';

const Cart = () => {
  const handleAddToCart = () => {
    // Here you would add the product to the cart logic
    alert('Product added to cart!');
  };

  return (
    <button className="bg-green-500 mt-6 px-4 py-2 text-white" onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};

export default Cart;
