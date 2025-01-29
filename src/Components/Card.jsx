import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleLoading } from '../store/actions/CardActions';

export default function Card({ city }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.card.loading);
  const [details, setDetails] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(toggleLoading(false));
    }, 100);
    return () => clearTimeout(timer);
  }, [dispatch]);

  function handleClickDetails() {
    setDetails(prevDetails => !prevDetails);
  }

  return (
    <div className="card p-6 w-full max-w-xs bg-gradient-to-br from-gray-900 via-purple-900 to-black rounded-lg shadow-2xl hover:scale-110 transition-transform duration-300 ease-in-out m-4 sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/5 border-2 border-yellow-500">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      ) : (
        <>
          <img src={city.photo} alt={city.city} className="rounded-t-lg w-full h-40 object-cover border-b-2 border-yellow-500" />
          <div className="p-4 text-center">
            <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-yellow-400">{city.city}</h2>
            <h2 className="mb-2 text-xl font-bold tracking-tight text-yellow-300">Country:</h2>
            <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">{city.country}</h3>
            <NavLink to={`/details/city/${city._id}`} className="text-base md:text-lg mx-2 md:mx-4 bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out">
              More Details
            </NavLink>
            <button className="bg-yellow-500 text-black px-4 py-2 font-bold w-full mt-2 rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out" onClick={handleClickDetails}>
              {details ? 'Hide Details' : 'Tourist Attractions'}
            </button>
            {details && (
              <div className="mt-4 bg-gray-800 bg-opacity-70 p-2 rounded-lg">
                <ul className="list-disc list-inside text-yellow-300">
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
  );
}
