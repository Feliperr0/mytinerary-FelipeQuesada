import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from "./Pages/Home.jsx";
import Cities from './Pages/Cities.jsx';
import Profile from './Pages/Profile.jsx';
import NotFound from './Pages/NotFound.jsx'
import HomeLayout from "./Layouts/HomeLayout.jsx";
import CitiesLayout from './Layouts/CitiesLayout.jsx';

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
  },
  {
    country: "USA",
    city: "New York",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    touristAttractions: ["Statue of Liberty", "Central Park"]
  },
  {
    country: "Italy",
    city: "Rome",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    touristAttractions: ["Colosseum", "Vatican City"]
  },
  {
    country: "UK",
    city: "London",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    touristAttractions: ["Big Ben", "London Eye"]
  },
  {
    country: "Spain",
    city: "Barcelona",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
    touristAttractions: ["Sagrada Familia", "Park Güell"]
  },
  {
    country: "China",
    city: "Beijing",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Flag_of_China.svg",
    touristAttractions: ["Great Wall of China", "Forbidden City"]
  },
  {
    country: "Russia",
    city: "Moscow",
    flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
    touristAttractions: ["Red Square",  "Kremlin"]
  }
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


  { path: "/*", element: <NotFound></NotFound> }
])



function App() {

  return (
    <>
    
      <RouterProvider router={router} />    </>
  )
}

export default App