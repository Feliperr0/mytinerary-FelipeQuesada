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
        <CTA />
      </main>
      <section className="py-10 max-w-screen-xl mx-auto">
        <div className="">
          <Carousel />
        </div>
      </section>
    </>
  );
}
