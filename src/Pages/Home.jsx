import React from "react";
import Carousel from "../Components/Carousel";
import CTA from "../Components/CTA"; 
import LoginForm from "../Components/LoginForm";

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
     <LoginForm></LoginForm>
      </section>
    </>
  );
}

