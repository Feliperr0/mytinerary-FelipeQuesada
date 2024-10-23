import React from "react";
import DetailsComponent from "../Components/DetailsComponent";
import Carousel from "../Components/Carousel";
import { NavLink } from 'react-router-dom';

export default function DetailsPage() {
  return (
    <>
      <main className="flex flex-col items-center">
        <DetailsComponent />
        <NavLink to="/cities" className="inline-block m-6 bg-blue-500 text-white py-2 px-4 rounded-full text-lg hover:bg-blue-600 sm:py-3 sm:px-6 sm:text-xl">
          Go back to discover wonderful cities!
        </NavLink>
      </main>
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="border-4 border-yellow-400 bg-opacity-50 p-8 rounded-lg text-center">
          <p className="text-4xl font-bold text-yellow-400">UNDER CONSTRUCTION</p>
        </div>
      </div>
      <section className=" py-10 max-w-screen-xl mx-auto">
        <div >

          <Carousel />
        </div>


      </section>
    </>
  );
}