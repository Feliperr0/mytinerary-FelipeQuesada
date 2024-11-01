import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';

export default function ItinerariesBox() {
  const { id } = useParams();
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(false);
  const [viewMore, setViewMore] = useState(null);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/cities/id/${id}`);
        const data = await response.json();
        setCity(data);
      } catch (error) {
        console.error('Error fetching city data:', error);
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

  if (!city) {
    return <div>City not found</div>;
  }

  return (
    <div className="card p-4 w-full max-w-xs bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-800 hover:bg-opacity-70 m-4 sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/5">

      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-white">Itineraries</h2>
        {city.itinerary.length > 0 ? (
          <ul className="list-disc list-inside text-gray-300">
            {city.itinerary.map(itinerary => (
              <li key={itinerary._id} className="mb-2">
                <h3 className="text-lg font-semibold">{itinerary.accountName}</h3>
                <img src={itinerary.photo} alt={itinerary.accountName} className="w-full h-20 object-cover rounded mb-2" />
                <p>Price: {itinerary.price}</p>
                <p>Duration: {itinerary.tripDuration}</p>
                <p>Likes: {itinerary.likes}</p>
                <p>Hashtags: {itinerary.hashtags.join(', ')}</p>
                <button
                  className="bg-blue-500 text-black px-4 py-2 font-bold w-full mt-2 rounded-full hover:bg-yellow-400"
                  onClick={() => handleViewMore(itinerary._id)}
                >
                  View more
                </button>
                {viewMore === itinerary._id && (
                  <div className="mt-4 bg-gray-800 p-4 rounded-lg">
                    <p className="text-yellow-400">Under construction</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-300">No itineraries found for this city.</p>
        )}
      </div>
    </div>
  );
}
