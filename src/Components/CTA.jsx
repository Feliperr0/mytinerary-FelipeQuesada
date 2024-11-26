import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CTA() {
  return (
    <>
    <div className="relative w-full h-screen overflow-hidden rounded-lg m-2">
      <div className="absolute w-full h-full bg-cover bg-center bg-[url('https://th.bing.com/th/id/R.a8f6afa33bfdf7d3cb286391a2b99026?rik=3f5eBkCyjEb%2bnw&pid=ImgRaw&r=0')] animate-zoom-out"></div>
      <div className="bg-black bg-opacity-70 w-full h-full flex items-center justify-center p-4 sm:p-8 md:p-12">
        <section className="text-center bg-gray-900 bg-opacity-80 p-6 rounded-xl border-4 border-yellow-500 shadow-2xl sm:w-2/3 md:w-1/2 lg:w-1/3 z-10">
          <h2 className="text-3xl font-extrabold mb-6 sm:text-4xl md:text-5xl text-yellow-400 drop-shadow-lg">Explore Cities</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6">Find your perfect trip, designed by insiders who know and love their cities!</p>
          <NavLink to="/cities" className="inline-block bg-yellow-500 text-black py-2 px-6 rounded-full text-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 sm:py-3 sm:px-8 sm:text-xl">
            Discover Now!
          </NavLink>
        </section>
      </div>
    </div>
    </>
  );
}
