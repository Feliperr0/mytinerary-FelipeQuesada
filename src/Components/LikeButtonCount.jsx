import React, { useState } from 'react';

export default  function LikeButtonCount({ initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="flex items-center justify-center mt-2">
      <button
        className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition-colors duration-300"
        onClick={handleLike}
      >
        Like
      </button>
      <span className="ml-2 text-yellow-300">{likes} Likes</span>
    </div>
  );
}

