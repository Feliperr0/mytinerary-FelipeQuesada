import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function DetailsComponent() {
  const { id } = useParams();
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    const fetchCityDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/cities/id/${id}`);
        const data = await response.json();

        if (response.ok) {
          setCity(data);
        } else {
          setError(true);
          setErrorMessage(data.message );
          console.log(data.message)
        }
      } catch (error) {
        console.error("Error fetching city details: ", error);
        setError(true);
        setErrorMessage('An error occurred while fetching city details.');
      }
    };

    fetchCityDetails();
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
      </div>
    );
  }

  if (error) {
    return (
      <>
        <div className="flex flex-col items-center">
          <p className="text-white text-2xl mb-4">{errorMessage}</p>
          <img src={logo} alt="No results" className="max-w-xs" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="details-container p-4">
        <h1 className="text-2xl font-bold">{city.city}</h1>
        <img src={city.photo} alt={city.city} className="w-full h-64 object-cover my-4" />
        <h2 className="text-xl font-semibold">Country: {city.country}</h2>
        <p>{city.description}</p>
        <h3 className="text-lg font-medium">Tourist Attractions:</h3>
        <ul className="list-disc list-inside">
          {city.attractions.map(attraction => (
            <li key={attraction}>{attraction}</li>
          ))}
        </ul>
        <p>Local Currency: {city.localCurrency}</p>
        <p>Continent: {city.continent}</p>
      </div>
    </>
  );
}
