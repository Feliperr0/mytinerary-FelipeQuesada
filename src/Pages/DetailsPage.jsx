import React from "react";
import { useSelector } from 'react-redux';
import DetailsComponent from "../Components/DetailsComponent";
import Carousel from "../Components/Carousel";
import { NavLink } from 'react-router-dom';
import ItinerariesBox from "../Components/ItinerariesBox";
import LoginForm from '../Components/LoginForm';

export default function DetailsPage() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 bg-wow-background bg-cover bg-center">
        <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-70 text-white p-8 rounded-lg border-4 border-yellow-500 shadow-2xl">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-4 glow-text">Please log in</h1>
          <p className="text-2xl mb-4">Sign in to access detailed itineraries and more!</p>
          <LoginForm isModal={false} />
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="flex flex-col items-center">
        <DetailsComponent />
        <ItinerariesBox />
        
        <NavLink to="/cities" className="inline-block m-6 bg-red-600 text-white py-2 px-4 rounded-full text-lg hover:bg-red-800 sm:py-3 sm:px-6 sm:text-xl">
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
