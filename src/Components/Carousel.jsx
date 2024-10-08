import React from 'react';
import Slider from "react-slick";
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
  { country: "Japan", city: "Tokyo", flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg", attractions: ["Tokyo Tower", "Shinjuku Gyoen"] },
  { country: "Brazil", city: "Rio de Janeiro", flag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg", attractions: ["Christ the Redeemer", "Copacabana Beach"] },
  { country: "France", city: "Paris", flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg", attractions: ["Eiffel Tower", "Louvre Museum"] },
  { country: "Australia", city: "Sydney", flag: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg", attractions: ["Sydney Opera House", "Bondi Beach"] },
  { country: "South Africa", city: "Cape Town", flag: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg", attractions: ["Table Mountain", "Robben Island"] },
  { country: "Mexico", city: "Mexico City", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg", attractions: ["Zócalo", "Chapultepec Park"] },
  { country: "USA", city: "New York", flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg", attractions: ["Statue of Liberty", "Central Park"] },
  { country: "Italy", city: "Rome", flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg", attractions: ["Colosseum", "Vatican City"] },
  { country: "UK", city: "London", flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg", attractions: ["Big Ben", "London Eye"] },
  { country: "Spain", city: "Barcelona", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg", attractions: ["Sagrada Familia", "Park Güell"] },
  { country: "China", city: "Beijing", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg", attractions: ["Great Wall of China", "Forbidden City"] },
  { country: "Russia", city: "Moscow", flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg", attractions: ["Red Square", "Kremlin"] },
];

const createSlides = () => {
  const slides = [];
  for (let i = 0; i < cities.length; i += 4) {
    slides.push(
      <div key={i} className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ">
        {cities.slice(i, i + 4).map((city, index) => (
          <div key={index} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={city.flag} alt={city.city} className="w-full h-32 sm:h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center text-white">{city.city}</h3>
              <p className="text-sm text-center text-gray-300">{city.country}</p>
              <ul className="list-disc list-inside text-center text-gray-300">
                {city.attractions.map((attraction, index) => (
                  <li key={index}>{attraction}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return slides;
};

export default function Carousel() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">Popular Mytineraries</h2>
      <Slider {...settings}>
        {createSlides()}
      </Slider>
    </div>
  );
}