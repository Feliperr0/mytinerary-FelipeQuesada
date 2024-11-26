import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCityDetails } from '../store/actions/DetailsActions';
import logo from '../assets/logo.png';

export default function DetailsComponent() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const city = useSelector(state => state.details.city);
  const loading = useSelector(state => state.details.loading);
  const errorMessage = useSelector(state => state.details.errorMessage);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    const verifyTokenAndFetchDetails = () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        dispatch(fetchCityDetails(id));
      } else {
        console.error('No token found');
      }
    };

    if (token) {
      verifyTokenAndFetchDetails();
    }
  }, [dispatch, id, token]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-16 w-16"></div>
      </div>
    );
  }

  if (!city) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 bg-opacity-70">
        <p className="text-white text-2xl mb-4">{errorMessage}</p>
        <img src={logo} alt="No results" className="max-w-xs" />
      </div>
    );
  }

  return (
    <div className="details-container p-6 bg-gradient-to-r from-gray-900 via-purple-900 to-black mx-auto text-center rounded-lg shadow-lg m-6 border-2 border-yellow-400">
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-6 border-b-4 border-yellow-400 pb-2">{city.city}</h1>
      <img
        src={city.photo}
        alt={city.city}
        className="w-full h-96 object-cover my-4 rounded-lg border-2 border-yellow-400 shadow-lg"
      />
      <h2 className="text-2xl font-bold text-yellow-300 mt-4">Country: <span className="text-white">{city.country}</span></h2>
      <p className="text-lg text-gray-300 mt-4">{city.description}</p>
      <h3 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">Tourist Attractions:</h3>
      <ul className="list-disc list-inside text-gray-300 mb-4">
        {city.attractions.map(attraction => (
          <li key={attraction} className="text-lg">{attraction}</li>
        ))}
      </ul>
      <h2 className="text-xl font-bold text-yellow-300">Local Currency: <span className="text-white">{city.localCurrency}</span></h2>
      <h2 className="text-xl font-bold text-yellow-300">Continent: <span className="text-white">{city.continent}</span></h2>
    </div>
  );
}
