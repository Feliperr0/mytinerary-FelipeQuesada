import React, { useState } from 'react';
import Card from '../Components/Card';
import Filters from '../Components/Filters';

const citiesData = [
  {
    country: "Japan",
    city: "Tokyo",
    continent: "Asia",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    touristAttractions: ["Tokyo Tower", "Shinjuku Gyoen National Garden"]
  },
  {
    country: "Brazil",
    city: "Rio de Janeiro",
    continent: "South America",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
    touristAttractions: ["Christ the Redeemer", "Copacabana Beach"]
  },
  {
    country: "France",
    city: "Paris",
    continent: "Europe",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    touristAttractions: ["Eiffel Tower", "Louvre Museum"]
  },
  {
    country: "Australia",
    city: "Sydney",
    continent: "Australia",
    flag: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
    touristAttractions: ["Sydney Opera House", "Bondi Beach"]
  },
  {
    country: "South Africa",
    city: "Cape Town",
    continent: "Africa",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
    touristAttractions: ["Table Mountain", "Robben Island"]
  },
  {
    country: "Mexico",
    city: "Mexico City",
    continent: "North America",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
    touristAttractions: ["Zócalo", "Chapultepec Park"]
  },
  {
    country: "USA",
    city: "New York",
    continent: "North America",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    touristAttractions: ["Statue of Liberty", "Central Park"]
  },
  {
    country: "Italy",
    city: "Rome",
    continent: "Europe",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    touristAttractions: ["Colosseum", "Vatican City"]
  },
  {
    country: "UK",
    city: "London",
    continent: "Europe",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    touristAttractions: ["Big Ben", "London Eye"]
  },
  {
    country: "Spain",
    city: "Barcelona",
    continent: "Europe",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
    touristAttractions: ["Sagrada Familia", "Park Güell"]
  },
  {
    country: "China",
    city: "Beijing",
    continent: "Asia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Flag_of_China.svg",
    touristAttractions: ["Great Wall of China", "Forbidden City"]
  },
  {
    country: "Russia",
    city: "Moscow",
    continent: "Europe",
    flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
    touristAttractions: ["Red Square", "Kremlin"]
  }
];

export default function Cities() {
  const [searchText, setSearchText] = useState('');
  const [continentFilter, setContinentFilter] = useState([]);

  const filteredCities = citiesData.filter(city => {
    const matchesSearch = city.city.toLowerCase().includes(searchText.toLowerCase());
    const matchesContinent = continentFilter.length === 0 || continentFilter.includes(city.continent);
    return matchesSearch && matchesContinent;
  });

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Cities</h1>
      <Filters 
        searchText={searchText} 
        setSearchText={setSearchText} 
        continentFilter={continentFilter} 
        setContinentFilter={setContinentFilter} 
      />
      <div className="bg-black cards-container flex flex-wrap justify-center">
        {filteredCities.map(city => (
          <Card key={city.city} city={city} />
        ))}
      </div>
    </div>
  );
}