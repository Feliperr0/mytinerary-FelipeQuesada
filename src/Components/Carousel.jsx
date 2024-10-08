import React from 'react';
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
        slidesToShow:
          3,
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


export default function Carousel() {
  const images = cities.map(city => city.flag); // Extraemos la propiedad flag de cada ciudad

  return (
    <div className="mx-auto max-w-7xl m-2">
      <div className="relative">
        <Slider {...settings} className="relative">
          {images.map((image, index) => (
            <div key={index} className="relative p-2">
              <img
                key={index}
                src={image}
                alt={`Bandera de ${cities[index].city}`}
                className="w-full h-48 rounded-lg border-2 border-gray-300 object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}