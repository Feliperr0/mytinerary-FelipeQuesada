import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from "./Pages/Home.jsx";
import Cities from './Pages/Cities.jsx';
import Profile from './Pages/Profile.jsx';
import NotFound from './Pages/NotFound.jsx'
import HomeLayout from "./Layouts/HomeLayout.jsx";
import CitiesLayout from './Layouts/CitiesLayout.jsx';

const cities = [
  { country: "Japan", city: "Tokyo", flag: "https://images.ecestaticos.com/TIh3Ip8m6fwlFW4YiF37lAfjvus=/0x184:2271x1531/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ffbc%2F44e%2F899%2Ffbc44e8997b2a025a8776c0439ac0449.jpg", attractions: ["Tokyo Tower", "Shinjuku Gyoen"] },
  { country: "Brazil", city: "Rio de Janeiro", flag: "https://i0.wp.com/imaginariodejaneiro.com/wp-content/uploads/2014/03/cristo-redentor-corcovado-rio-de-janeiro.jpg", attractions: ["Christ the Redeemer", "Copacabana Beach"] },
  { country: "France", city: "Paris", flag: "https://cdn-imgix.headout.com/media/images/c90f7eb7a5825e6f5e57a5a62d05399c-25058-BestofParis-EiffelTower-Cruise-Louvre-002.jpg", attractions: ["Eiffel Tower", "Louvre Museum"] },
  { country: "Australia", city: "Sydney", flag: "https://www.civitatis.com/blog/wp-content/uploads/2018/01/vista-opera-house-sidney.jpg", attractions: ["Sydney Opera House", "Bondi Beach"] },
  { country: "South Africa", city: "Cape Town", flag: "https://dynamic-media.tacdn.com/media/attractions-content--1x-1/10/46/0d/b9.jpg?f=webp&w=1000&h=700", attractions: ["Table Mountain", "Robben Island"] },
  { country: "Mexico", city: "Mexico City", flag: "https://blog.estrellaroja.com.mx/wp-content/uploads/2023/11/Mirador-monumento-revolucion.jpg", attractions: ["Zócalo", "Chapultepec Park"] },
  { country: "USA", city: "New York", flag: "https://img.freepik.com/fotos-premium/estatua-libertad-noche-ciudad-nueva-york-ee-uu-estatua-libertad-sobre-escena-ciudad-nueva-york-lado-rio-que-ubicacion-es-manhattan-ai-generado_538213-9317.jpg", attractions: ["Statue of Liberty", "Central Park"] },
  { country: "Italy", city: "Rome", flag: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2017/05/15/5fa3c5d7ef234.jpeg", attractions: ["Colosseum", "Vatican City"] },
  { country: "UK", city: "London", flag: "https://www.shutterstock.com/image-photo/beautiful-sunset-view-big-ben-600nw-2397823585.jpg", attractions: ["Big Ben", "London Eye"] },
  { country: "Spain", city: "Barcelona", flag: "https://www.berlinsbi.com/uploads/sites/2/2023/06/web-banner-barcelona.jpg?w=1854&h=1043&crop=1", attractions: ["Sagrada Familia", "Park Güell"] },
  { country: "China", city: "Beijing", flag: "https://cdn.britannica.com/03/198203-050-138BB1C3/entrance-Gate-of-Divine-Might-Beijing-Forbidden.jpg", attractions: ["Great Wall of China", "Forbidden City"] },
  { country: "Russia", city: "Moscow", flag: "https://www.civitatis.com/blog/wp-content/uploads/2019/09/invierno-moscu.jpg", attractions: ["Red Square", "Kremlin"] },
];


const router = createBrowserRouter([
  {
    element: <HomeLayout></HomeLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "cities", element: <Cities></Cities> },
      { path: "home", element: <Home></Home> },

    ],
  },
  {
    element: <CitiesLayout></CitiesLayout>,
    children: [
      { path: "/", element: <Cities></Cities> },
      { path: "/*", element: <NotFound></NotFound> }

    ]
  },



])



function App() {

  return (
    <>

      <RouterProvider router={router} />    </>
  )
}

export default App