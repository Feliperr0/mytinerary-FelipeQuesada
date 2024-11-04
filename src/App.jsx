import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import './App.css';
import Home from "./Pages/Home.jsx";
import Cities from './Pages/Cities.jsx';
import NotFound from './Pages/NotFound.jsx';
import HomeLayout from "./Layouts/HomeLayout.jsx";
import CitiesLayout from './Layouts/CitiesLayout.jsx';
import DetailsPage from './Pages/DetailsPage.jsx'; 

const router = createBrowserRouter([
  {
    element: <HomeLayout></HomeLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "cities", element: <Cities></Cities> },
      { path: "home", element: <Home></Home> },
      { path: "details/city/:id", element: <DetailsPage></DetailsPage> } 
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
