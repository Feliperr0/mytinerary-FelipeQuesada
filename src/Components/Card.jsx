import React from 'react';

function Card({ city }) {
  return (
    <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <img src={city.flag} alt={city.city} className="w-full h-32 sm:h-48 object-cover opacity-90" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center">{city.city}</h3>
        <p className="text-sm text-center text-gray-700">{city.country}</p>
        <ul className="list-disc list-inside text-center">
          {city.touristAttractions.map(attraction => (
            <li key={attraction}>{attraction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;