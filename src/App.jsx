import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home.jsx";
import Cities from './Pages/Cities.jsx';
import NotFound from './Pages/NotFound.jsx';
import HomeLayout from "./Layouts/HomeLayout.jsx";
import CitiesLayout from './Layouts/CitiesLayout.jsx';
import DetailsPage from './Pages/DetailsPage.jsx'; // Importamos el nuevo componente Details

const router = createBrowserRouter([
  {
    element: <HomeLayout></HomeLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "cities", element: <Cities></Cities> },
      { path: "home", element: <Home></Home> },
      { path: "details/:id", element: <DetailsPage></DetailsPage> } // Nueva ruta para Details
    ],
  },
  {
    element: <CitiesLayout></CitiesLayout>,
    children: [
      { path: "/", element: <Cities></Cities> },
      { path: "/*", element: <NotFound></NotFound> }
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
