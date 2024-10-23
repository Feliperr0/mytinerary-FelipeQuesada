import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Card({ city }) {
  const [details, setDetails] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  function handleClickDetails() {
    setDetails(!details);
  }

  return (
    <>
      <div className="card p-4 w-full max-w-xs bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform hover:bg-gradient-to-br hover:from-blue-600 hover:to-green-600 hover:text-white m-4 sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/5">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
          </div>
        ) : (
          <>
            <img src={city.photo} alt={city.city} className="rounded-t-lg w-full h-32 object-cover" />
            <div className="p-4 text-center">
              <h2 className="mb-2 text-xl font-bold tracking-tight text-white">{city.city}</h2>
              <h2 className="mb-2 text-lg font-semibold tracking-tight text-gray-300">Country:</h2>
              <h3 className="mb-2 text-lg font-semibold tracking-tight text-gray-300">{city.country}</h3>
              <NavLink to={`/details/city/${city._id}`} className="text-base md:text-lg mx-2 md:mx-4 hover:underline">
                More Details
              </NavLink>
              <button className="bg-red-500 text-black px-4 py-2 font-bold w-full" onClick={handleClickDetails}>
                {details ? 'Hide Details' : 'Tourist Attractions'}
              </button>
              {details && (
                <div className="mt-4">
                  <ul className="list-disc list-inside text-gray-300">
                    {city.attractions.map(attraction => (
                      <li key={attraction}>{attraction}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
