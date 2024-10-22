import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import Filters from '../Components/Filters';
import logo from '../assets/logo.png';

export default function Cities() {
  const [citiesData, setCitiesData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [continentFilter, setContinentFilter] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const cities = await fetch('http://localhost:8080/api/cities/all');
        const data = await cities.json();
        setCitiesData(data.cities); // Accediendo al array de ciudades dentro de 'response'
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  const filteredCities = citiesData.filter(city => {
    const matchesSearch = city.city.toLowerCase().includes(searchText.toLowerCase()) || city.country.toLowerCase().includes(searchText.toLowerCase());
    const matchesContinent = continentFilter.length === 0 || continentFilter.includes(city.continent);
    return matchesSearch && matchesContinent;
  });

  return (
    <div className="container mx-auto w-full text-center">
      <h1 className="text-3xl font-bold mb-4">Cities</h1>
      <Filters
        searchText={searchText}
        setSearchText={setSearchText}
        continentFilter={continentFilter}
        setContinentFilter={setContinentFilter}
      />
      <div className="cards-container flex flex-wrap justify-center bg-black p-4">
        {filteredCities.length > 0 ? (
          filteredCities.map(city => (
            <Card key={city.city} city={city} />
          ))
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-white text-2xl mb-4">No city data found</p>
            <img src={logo} alt="No results" className="max-w-xs" />
          </div>
        )}
      </div>
    </div>
  );
}
