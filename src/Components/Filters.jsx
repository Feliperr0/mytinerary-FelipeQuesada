import React from 'react';

export default function Filters({ searchText, setSearchText, continentFilter, setContinentFilter }) {
  const handleContinentChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setContinentFilter([...continentFilter, value]);
    } else {
      setContinentFilter(continentFilter.filter(continent => continent !== value));
    }
  };

  return (
    <div className="filters mb-4 w-11/12 mx-auto bg-gray-800 bg-opacity-50 rounded-lg p-6">
      <input 
        type="text"
        placeholder="Search by country..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        className="w-full p-3 mb-4 text-xl font-bold text-black text-center  bg-opacity-80 rounded-lg border-2 border-red-500 focus:outline-none focus:ring-2 focus:ring-red-700"
      />
      <div className="continent-filters flex flex-wrap justify-center">
        {['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania'].map(continent => (
          <label key={continent} className="mx-2 my-2 text-white text-lg">
            <input
              type="checkbox"
              value={continent}
              checked={continentFilter.includes(continent)}
              onChange={handleContinentChange}
              className="mr-2 accent-red-600 focus:ring-2 focus:ring-red-700"
            />
            {continent}
          </label>
        ))}
      </div>
    </div>
  );
}
