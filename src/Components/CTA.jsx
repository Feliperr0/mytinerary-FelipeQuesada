import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CTA() {
  return (
    <>
    <div className="relative w-full h-screen overflow-hidden rounded-lg m-2">
      <div className="absolute w-full h-full bg-cover bg-center bg-[url('https://th.bing.com/th/id/R.a8f6afa33bfdf7d3cb286391a2b99026?rik=3f5eBkCyjEb%2bnw&pid=ImgRaw&r=0')] animate-zoom-out"></div>
      <div className="bg-black bg-opacity-70 w-full h-full flex items-center justify-center p-4 sm:p-8 md:p-12">
        <section className="text-center bg-black bg-opacity-40 p-4 rounded-lg sm:w-2/3 md:w-1/2 lg:w-1/3 z-10">
          <h2 className="text-2xl font-bold mb-4 sm:text-3xl md:text-4xl text-white">Explore Cities</h2>
          <p className="text-xl mt-2 p-2 sm:text-2xl md:text-3xl text-white">Find your perfect trip, designed by insiders who know and love their cities!</p>
          <NavLink to="/cities" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full text-lg hover:bg-blue-600 sm:py-3 sm:px-6 sm:text-xl">
            Discover Now!
          </NavLink>
        </section>
      </div>
    </div>
    </>
  );
}
