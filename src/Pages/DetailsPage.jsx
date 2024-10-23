import React from "react";
import DetailsComponent from "../Components/DetailsComponent";
import Carousel from "../Components/Carousel";

export default function DetailsPage() {
    return (
      <>
        <main className="flex flex-col items-center">
          <DetailsComponent />
<div>
  <p>UNDER CONSTRUCTION</p>
</div>

          
        </main>
        <section className=" py-10 max-w-screen-xl mx-auto">
          <div >
            
            <Carousel />
          </div>


        </section>
      </>
    );
  }