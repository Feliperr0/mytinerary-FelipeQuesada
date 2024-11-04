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
    const fetchCityDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/cities/id/${id}`);
        const data = await response.json();

        if (response.ok) {
          setCity(data);
        } else {
          setError(true);
          setErrorMessage(data.message || 'City not found');
        }
      } catch (error) {
        console.error("Error fetching city details: ", error);
        setError(true);
        setErrorMessage('An error occurred while fetching city details.');
      } finally {
        setLoading(false);
      }
    };

    fetchCityDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-16 w-16"></div>
      </div>
    );
  }
  if (error || !city) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 bg-opacity-70">
        <p className="text-white text-2xl mb-4">{errorMessage}</p>
        <img src={logo} alt="No results" className="max-w-xs" />
      </div>
    );
  }

  return (
    <div className="details-container p-4 bg-gray-900 bg-opacity-70 mx-auto text-center rounded-lg m-6">
      <h1 className="text-3xl font-bold text-white mb-4">{city.city}</h1>
      <img
        src={city.photo}
        alt={city.city}
        className="w-full h-96 object-cover my-4 rounded-lg"
      />
      <h2 className="text-xl font-semibold text-gray-300">Country: {city.country}</h2>
      <p className="text-gray-300">{city.description}</p>
      <h3 className="text-lg font-medium text-gray-300">Tourist Attractions:</h3>
      <ul className="list-disc list-inside text-gray-300">
        {city.attractions.map(attraction => (
          <li key={attraction}>{attraction}</li>
        ))}
      </ul>
      <h2 className="text-lg font-medium text-gray-300">Local Currency: {city.localCurrency}</h2>
      <h2 className="text-lg font-medium text-gray-300">Continent: {city.continent}</h2>
    </div>
  );
}
