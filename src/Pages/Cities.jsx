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
        const query = new URLSearchParams();

        if (searchText) {
          query.append('city', searchText);
          query.append('country', searchText);
        }

        if (continentFilter.length > 0) {
          continentFilter.forEach(continent => query.append('continent', continent));
        }

        const cities = await fetch(`http://localhost:8080/api/cities/find?${query.toString()}`);
        console.log(query.toString)
        const data = await cities.json();
        setCitiesData(data.cities);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, [searchText, continentFilter]);

  return (
    <div className="container mx-auto w-full text-center">
      <h1 className="text-3xl font-bold mb-4">Cities</h1>
      <Filters
        searchText={searchText}
        setSearchText={setSearchText}
        continentFilter={continentFilter}
        setContinentFilter={setContinentFilter}
      />
      <div className="cards-container flex flex-wrap justify-center rounded-2xl bg-black p-4">
        {citiesData.length > 0 ? (
          citiesData.map(city => (
            <Card key={city._id} city={city} />
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
