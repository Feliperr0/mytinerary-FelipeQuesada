import React from 'react';

export default function SearchFilter({ searchText, setSearchText }) {
  return (
    <>
      <input 
        type="text" 
        value={searchText} 
        onChange={(e) => setSearchText(e.target.value)} 
        placeholder="Search cities..." 
        className="p-3 bg-gray-900 text-yellow-300 placeholder-yellow-500 border-2 border-yellow-500 rounded-full shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
    </>
  );
}
