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
        <div className=" px-4 sm:px-6 lg:px-8">
          <Carousel />
        </div>
      </section>
    </>
  );
}

