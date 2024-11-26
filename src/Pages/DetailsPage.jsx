import React from "react";
import {  useSelector } from 'react-redux';
import DetailsComponent from "../Components/DetailsComponent";
import Carousel from "../Components/Carousel";
import { NavLink } from 'react-router-dom';
import ItinerariesBox from "../Components/ItinerariesBox";
import LoginForm from '../Components/LoginForm';


export default function DetailsPage() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);


  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold mb-4">Please log in</h1>
        <p className="text-xl mb-4">Sign in to access detailed itineraries and more!</p>
        <LoginForm isModal={false} /> 
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
