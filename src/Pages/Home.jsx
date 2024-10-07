import React from "react";
import Carousel from "../Components/Carousel";
import CTA from "../Components/CTA"; // Importa el componente CTA

export default function Home() {
  return (
    <>
      {/* Call to Action */}
      <CTA />

      {/* Carousel */}
      <section className="py-10">
        <div>
          <Carousel />
        </div>
      </section>
    </>
  );
}