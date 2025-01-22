// src/components/BlogContent.jsx
import React from 'react';

const Blogs = ({ title, content }) => {
  return (
    <div className="mx-auto p-6 container">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="mt-4">{content}</p>
    </div>
  );
};

export default Blogs;
