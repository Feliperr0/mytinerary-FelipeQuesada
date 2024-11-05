import React, { useState, useEffect } from 'react';

export default function ContinentFilter({ continentFilter, setContinentFilter }) {
  const [continents, setContinents] = useState([]);

  useEffect(() => {

    const fetchContinents = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/cities/all');
        const data = await response.json();
        const cities = data.cities;


        const uniqueContinents = [...new Set(cities.map(city => city.continent))];
        setContinents(uniqueContinents);
      } catch (error) {
        console.error("Error ", error);
      }
    };

    fetchContinents();
  }, []);

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