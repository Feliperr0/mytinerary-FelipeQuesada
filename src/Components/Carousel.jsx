import React from 'react';
import Slider from "react-slick";
import Card from './Card';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const cities = [
  {
    country: "Japan",
    city: "Tokyo",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    touristAttractions: ["Tokyo Tower", "Shinjuku Gyoen National Garden"]
  },
  {
    country: "Brazil",
    city: "Rio de Janeiro",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
    touristAttractions: ["Christ the Redeemer", "Copacabana Beach"]
  },
  {
    country: "France",
    city: "Paris",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    touristAttractions: ["Eiffel Tower", "Louvre Museum"]
  },
  {
    country: "Australia",
    city: "Sydney",
    flag: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
    touristAttractions: ["Sydney Opera House", "Bondi Beach"]
  },
  {
    country: "South Africa",
    city: "Cape Town",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
    touristAttractions: ["Table Mountain", "Robben Island"]
  },
  {
    country: "Mexico",
    city: "Mexico City",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
    touristAttractions: ["Zócalo", "Chapultepec Park"]
  }
];

export default function Carousel() {
  return (
    <Slider {...settings}>
      {/* Primera transición */}
      <div className="flex justify-between">
        <div className="w-1/2 relative">
          <img src={cities[0].flag} alt={cities[0].city} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">{cities[0].city}</div>
        </div>
        <div className="w-1/4 relative">
          <img src={cities[1].flag} alt={cities[1].city} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">{cities[1].city}</div>
        </div>
        <div className="w-1/4 relative">
          <img src={cities[2].flag} alt={cities[2].city} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">{cities[2].city}</div>
        </div>
      </div>

      {/* Segunda transición */}
      <div className="flex justify-center">
        <div className="w-full relative">
          <img src="promo.jpg" alt="Promotion" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">Special Promotion</div>
        </div>
      </div>

      {/* Tercera transición */}
      <div className="flex justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {cities.slice(3).map(city => (
            <Card key={city.city} city={city} />
          ))}
        </div>
      </div>
    </Slider>
  );
}