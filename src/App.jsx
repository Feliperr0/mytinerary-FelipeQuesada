import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store/store.js';
import './App.css';
import Home from "./Pages/Home.jsx";
import Cities from './Pages/Cities.jsx';
import NotFound from './Pages/NotFound.jsx';
import HomeLayout from "./Layouts/HomeLayout.jsx";
import CitiesLayout from './Layouts/CitiesLayout.jsx';
import DetailsPage from './Pages/DetailsPage.jsx';
import { useEffect } from 'react';
import { checkAuth } from './store/actions/LogActions';
import Header from './Components/Header'; // Importar el componente Header

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
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className="App">
      <Header /> {/* Usar Header */}
      <RouterProvider router={router} />
    </div>
  );
}

const AppWrapper = () => (
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);

export default AppWrapper;
