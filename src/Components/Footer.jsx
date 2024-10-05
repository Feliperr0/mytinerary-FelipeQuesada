import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {

    return (
        <>
          <footer className="bg-gray-800 text-white p-6 text-center">
            <p>Street Wallaby 42, Sydney</p>
            <p>Follow us on social media</p>
            <nav>
                <NavLink to="/" className="mr-4">Home</NavLink>
                <NavLink to="/cities" className="mr-4">Cities</NavLink>
                <NavLink to="/profile" className="mr-4">Profile</NavLink>
            </nav>
            </footer>
        </>
    )

}