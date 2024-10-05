import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from "./Pages/Home.jsx";
import Cities from './Pages/Cities.jsx';
import Profile from './Pages/Profile.jsx';
import NotFound from './Pages/NotFound.jsx'
import HomeLayout from "./Layouts/HomeLayout.jsx";
import CitiesLayout from './Layouts/CitiesLayout.jsx';

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
