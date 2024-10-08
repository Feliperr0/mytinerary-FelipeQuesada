import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Footer() {
    return (
        <>
        <footer className="bg-gray-800 text-white p-6 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">MyTinerary</h3>
                    <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
                    <p>Street Wallaby 42, Sydney, Australia</p>
                </div>
                <nav className="mb-4 md:mb-0">
                    <NavLink to="/" className="mr-4 hover:underline">Home</NavLink>
                    <NavLink to="/cities" className="mr-4 hover:underline">Cities</NavLink>
                    <NavLink to="/about" className="mr-4 hover:underline">About Us</NavLink>
                    <NavLink to="/contact" className="hover:underline">Contact</NavLink>
                </nav>
                <div className="flex space-x-4">
                    <a href="https://facebook.com" className="hover:text-blue-500 underline">Facebook</a>
                    <a href="https://twitter.com" className="hover:text-blue-400 underline">Twitter</a>
                    <a href="https://wa.me" className="hover:text-green-500 underline">WhatsApp</a>
                    <a href="https://instagram.com" className="hover:text-pink-500 underline">Instagram</a>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-sm">By FQM</p>
            </div>
        </footer>
        </>
    );
}