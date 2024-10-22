import React from 'react';

const continents = ["Asia", "South America", "Europe", "North America", "Africa", "Oceania"];

export default function ContinentFilter({ continentFilter, setContinentFilter }) {
  const handleCheckboxChange = (continent) => {
    if (continentFilter.includes(continent)) {
      setContinentFilter(continentFilter.filter(c => c !== continent));
    } else {
      setContinentFilter([...continentFilter, continent]);
    }
  };

  return (
    <>
    <div className="flex flex-wrap">
      {continents.map(continent => (
        <label key={continent} className="mr-4">
          <input
            type="checkbox"
            value={continent}
            checked={continentFilter.includes(continent)}
            onChange={() => handleCheckboxChange(continent)}
            className="mr-2"
          />
          {continent}
        </label>
      ))}
    </div>
    </>
  );
}