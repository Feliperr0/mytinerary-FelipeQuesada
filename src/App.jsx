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
  }
];
  


const router = createBrowserRouter([
  {
    element: <HomeLayout></HomeLayout>,
    children: [
      { path: "/", element: <Home></Home> },
     
    ],
  },
  {
    element: <CitiesLayout></CitiesLayout>,
    children: [
      { path: "/cities", element: <Cities></Cities> },
      { path: "/profile", element: <Profile></Profile> },

    ]
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
