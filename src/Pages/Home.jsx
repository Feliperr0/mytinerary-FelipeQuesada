import React from "react";
import Carousel from "../Components/Carousel";
import CTA from "../Components/CTA"; // Importa el componente CTA

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center">
        <CTA />
      </main>
      <section className=" py-10 max-w-screen-xl mx-auto">
        <div className="">
          <Carousel />
        </div>
      </section>
    </>
  );
}

