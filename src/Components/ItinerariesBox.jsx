import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PriceRating from './PriceRating';
import LikeButtonCount from './LikeButtonCount';
import axios from 'axios';

export default function ItinerariesBox() {
  const { id } = useParams();
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState(false);
  const [viewMore, setViewMore] = useState(null);

  useEffect(() => {
    const fetchCity = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await axios.get(`https://mytinerary-back-felipequesada-production.up.railway.app/api/cities/id/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          setCity(response.data);
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        setError('Network error');
      } finally {
        setLoading(false);
      }
    };

    fetchCity();
  }, [id]);

  function handleClickDetails() {
    setDetails(!details);
  }

  function handleViewMore(itineraryId) {
    setViewMore(viewMore === itineraryId ? null : itineraryId);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
      </div>
    );
  }
  if (error || !city || !city.itinerary) {
    return null;  //aquí para evitar mostrar otro contenido, porque si el id no existe o está mal escrito, el componente details, ya muestra el contenido de error de la api, así no se hace redundante
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black bg-opacity-90 w-11/12 mx-auto p-6 rounded-lg shadow-2xl transition-all duration-500 border-4 border-yellow-500">
      <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-6 drop-shadow-lg">Itineraries</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {city.itinerary.length > 0 ? (
          city.itinerary.map(itinerary => (
            <div key={itinerary._id} className="flex flex-col items-center bg-gray-700 bg-opacity-90 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-blue-600 transition-transform duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 border-2 border-yellow-400">
              <h3 className="text-2xl font-bold text-center text-yellow-400">{itinerary.accountName}</h3>
              <img src={itinerary.photo} alt={itinerary.accountName} className="w-24 h-24 object-cover rounded-full mb-4 mx-auto border-4 border-yellow-500 shadow-lg" />
              <div className="text-center text-yellow-300">
                <p>Price Rate</p>
                <PriceRating price={itinerary.price} />
              </div>
              <p className="text-center text-yellow-300">Estimated Time: {itinerary.tripDuration} Hours</p>
              <LikeButtonCount initialLikes={itinerary.likes} />
              <p className="text-center text-yellow-300">Hashtags: {itinerary.hashtags.join(', ')}</p>
              <button
                className="bg-yellow-400 text-gray-900 px-4 py-2 font-bold w-full mt-4 rounded-full hover:bg-yellow-500 transition-colors duration-300"
                onClick={() => handleViewMore(itinerary._id)}
              >
                View more
              </button>
              {viewMore === itinerary._id && (
                <div className="mt-4 bg-gray-800 p-4 rounded-lg">
                  <p className="text-yellow-400 text-center">Under construction</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-yellow-400">No itineraries found for this city.</p>
        )}
      </div>
    </div>
  );
}
