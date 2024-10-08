import React from 'react';

export default function SearchFilter({ searchText, setSearchText }) {
  return (
    <input 
      type="text" 
      value={searchText} 
      onChange={(e) => setSearchText(e.target.value)} 
      placeholder="Search cities..." 
      className="p-2 border border-gray-300 rounded-md"
    />
  );
}