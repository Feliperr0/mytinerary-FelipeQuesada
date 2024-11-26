import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Components/Card';
import Filters from '../Components/Filters';
import logo from '../assets/logo.png';
import LoginForm from '../Components/LoginForm';
import { setUser } from '../store/actions/LogActions';
import { fetchCities } from '../store/actions/CitiesActions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Función para validar el token con Google
const loginWithTokenGoogle = async (token) => {
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

export default function Cities() {

  const params = new URLSearchParams(window.location.search);
  const token = params.get('token');
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);

      loginWithTokenGoogle(token).then((user) => {
        dispatch(setUser({ user, token }));
      });
    } else {

      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        loginWithTokenGoogle(storedToken).then((user) => {
          dispatch(setUser({ user, token: storedToken }));
        });
      }
    } navigate('/cities')
  }, [dispatch]);


  const citiesData = useSelector(state => state.cities.citiesData);
  const searchText = useSelector(state => state.filters.searchText);
  const continentFilter = useSelector(state => state.filters.continentFilter);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCities({ searchText, continentFilter }));
    }
  }, [dispatch, isLoggedIn, searchText, continentFilter]);

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold mb-4">Please log in</h1>
        <p className="text-xl mb-4">Sign in to discover itineraries shared by other adventurers for you</p>
        <LoginForm isModal={false} />
      </div>
    );
  }
  return (
    <div className="container mx-auto w-full text-center">
      <h1 className="text-3xl font-bold mb-4">Cities</h1>
      <Filters />
      <div className="cards-container flex flex-wrap justify-center rounded-2xl bg-black p-4">
        {citiesData.length > 0 ? (
          citiesData.map(city => (
            <Card key={city._id} city={city} />
          ))
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-white text-2xl mb-4">No city data found</p>
            <img src={logo} alt="No results" className="max-w-xs" />
          </div>
        )}
      </div>
    </div>
  );
}
