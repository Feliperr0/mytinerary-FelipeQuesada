import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default function Carousel() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const cities = await fetch('http://localhost:8080/api/cities/all');
        const data = await cities.json();
        console.log(data.cities); // Agrega esto para revisar los datos en la consola
        setCities(Array.isArray(data.cities) ? data.cities : []);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCities();
  }, []);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="relative">
        <Slider {...settings} className="relative">
          {cities.length > 0 ? (
            cities.map((city, index) => (
              <div key={index} className="relative p-2">
                <img
                  src={city.photo}
                  alt={`Foto de ${city.city}`}
                  className="w-full h-48 rounded-lg border-2 border-gray-300 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-20 flex justify-center items-center">
                  <div className="text-center text-white">
                    <h2 className="text-2xl font-bold">{city.city}</h2>
                    <p className="text-lg">{city.country}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-white">
             No city data found
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
}
