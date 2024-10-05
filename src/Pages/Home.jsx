import React from "react"
import { NavLink } from "react-router-dom";


export default function Home() {
    return (
        <>
            {/* Call to Action */}
            <section className="text-center py-10">

                <h2 className="text-2xl font-bold mb-4">Explore Cities</h2>
                <p className="text-xl mt-2 p-2">Find your perfect trip, designed by insiders who know and love their cities!</p>
                <NavLink to="/cities" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full text-lg hover:bg-blue-600">
                    Discover Now!
                </NavLink>
            </section>

            {/* Carousel */}
            <section className="py-10">
                <h2 className="text-3xl font-bold text-center mb-6">Popular destinations</h2>
                <div className="carousel">
                    {/* Aquí va el componente Carrusel */}
                </div>
            </section>
        </>
    )
} 