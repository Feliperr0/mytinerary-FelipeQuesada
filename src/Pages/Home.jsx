import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Carousel from "../Components/Carousel";
import CTA from "../Components/CTA";
import { setUser } from "../store/actions/LogActions"; // Asegúrate de que esta acción esté correctamente importada

export default function Home() {
  
  return (
    <>
      <main className="flex flex-col items-center">
        {/* Otros contenidos del main */}
      </main>
      <div className="flex justify-center items-center min-h-screen overflow-hidden">
        <CTA />
      </div>
      <section className="py-10 max-w-screen-xl mx-auto overflow-hidden">
        <div className="flex justify-center">
          <Carousel />
        </div>
      </section>
    </>
  );
}
