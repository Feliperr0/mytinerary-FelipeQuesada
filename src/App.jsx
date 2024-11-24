import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './App.css';
import Home from "./Pages/Home.jsx";
import Cities from './Pages/Cities.jsx';
import NotFound from './Pages/NotFound.jsx';
import HomeLayout from "./Layouts/HomeLayout.jsx";
import CitiesLayout from './Layouts/CitiesLayout.jsx';
import DetailsPage from './Pages/DetailsPage.jsx';
import { useEffect } from 'react';
import { checkAuth, setUser } from './store/actions/LogActions';

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "cities", element: <Cities /> },
      { path: "home", element: <Home /> },
      { path: "details/city/:id", element: <DetailsPage /> }
    ],
  },
  {
    element: <CitiesLayout />,
    children: [
      { path: "/", element: <Cities /> },
      { path: "/*", element: <NotFound /> }
    ]
  },
]);

const loginWithToken = async (token) => {
  try {
    console.log("se ejecutó login with token");

    const response = await axios.get("http://localhost:8080/api/users/validatetoken",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data.response
  } catch (error) {
    console.log("error", error)
  }
}
function App() {

  const dispatch = useDispatch();

  let token = localStorage.getItem("token")
  if (token) {
    loginWithToken(token).then((user) => {
      dispatch(setUser({ user, token }))
    })
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const googleToken = params.get("token");
    if (googleToken) {
      localStorage.setItem("token", googleToken);
      loginWithToken(googleToken).then((user) => {
        dispatch(setUser({ user, googleToken }));
      });
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
