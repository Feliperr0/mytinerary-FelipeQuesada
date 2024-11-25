import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import DetailsComponent from "../Components/DetailsComponent";
import Carousel from "../Components/Carousel";
import { NavLink, useParams } from 'react-router-dom';
import ItinerariesBox from "../Components/ItinerariesBox";
import LoginForm from '../Components/LoginForm';
import { checkAuth, loginWithToken } from '../store/actions/LogActions';
import { fetchCityDetails } from '../store/actions/DetailsActions';
import axios from 'axios';

const loginWithTokenLocal = async (token) => {
  try {
    console.log("se ejecutó login with token");

    const response = await axios.get("http://localhost:8080/api/users/validatetoken", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.response;
  } catch (error) {
    console.log("error", error);
  }
}

export default function DetailsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const { id } = useParams();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      dispatch(loginWithToken({ token: storedToken, user: JSON.parse(storedUser) }))
        .then(() => {
          dispatch(checkAuth());
          dispatch(fetchCityDetails(id)); // Fetch city details after authentication
        });
    } else {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      const user = params.get('user');

      if (token && user) {
        loginWithTokenLocal(token)
          .then((data) => {
            localStorage.setItem('token', token);
            localStorage.setItem('user', user);
            dispatch(loginWithToken({ token, user: JSON.parse(user) }))
              .then(() => {
                dispatch(checkAuth());
                dispatch(fetchCityDetails(id)); // Fetch city details after authentication
              });
          })
          .catch(error => {
            console.error("Error logging in with token:", error);
          });
      } else {
        dispatch(checkAuth());
      }
    }
  }, [dispatch, id]);

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold mb-4">Please log in</h1>
        <p className="text-xl mb-4">Sign in to access detailed itineraries and more!</p>
        <LoginForm isModal={false} /> {/* Renderizado como formulario regular */}
      </div>
    );
  }

  return (
    <>
      <main className="flex flex-col items-center">
        <DetailsComponent />
        <ItinerariesBox />
        
        <NavLink to="/cities" className="inline-block m-6 bg-blue-500 text-white py-2 px-4 rounded-full text-lg hover:bg-blue-600 sm:py-3 sm:px-6 sm:text-xl">
          Go back to discover wonderful cities!
        </NavLink>
      </main>
      <div className="flex items-center justify-center l-screen bg-gray-900">
        <div className="border-4 border-yellow-400 bg-opacity-50 p-8 rounded-lg text-center">
          <p className="text-4xl font-bold text-yellow-400">UNDER CONSTRUCTION</p>
        </div>
      </div>
      <section className="py-10 max-w-screen-xl mx-auto">
        <div>
          <Carousel />
        </div>
      </section>
    </>
  );
}
