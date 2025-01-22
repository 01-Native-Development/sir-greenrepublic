// src/components/base/Reviews.jsx
import React, { useState } from 'react';

const Reviews = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => setComment(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would submit the comment to the backend
    alert('Comment submitted: ' + comment);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl">Leave a Comment</h2>
      <textarea
        className="p-2 border w-full"
        placeholder="Write your comment here..."
        value={comment}
        onChange={handleCommentChange}
      />
      <button className="bg-green-500 mt-2 px-4 py-2 text-white" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Reviews;
