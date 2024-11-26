import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="bg-black text-gold-500 p-6 text-center">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-extrabold mb-2 text-yellow-400 drop-shadow-lg">MyTinerary</h3>
                        <p className="text-lg text-gray-300">Find your perfect trip, designed by insiders who know and love their cities!</p>
                        <p className="text-gray-400">Street Wallaby 42, Sydney, Australia</p>
                    </div>
                    <nav className="mb-4 md:mb-0">
                        <NavLink to="/" className="mr-4 text-lg text-gray-300 hover:text-yellow-400">Home</NavLink>
                        <NavLink to="/cities" className="mr-4 text-lg text-gray-300 hover:text-yellow-400">Cities</NavLink>
                        <NavLink to="/about" className="mr-4 text-lg text-gray-300 hover:text-yellow-400">About Us</NavLink>
                        <NavLink to="/contact" className="text-lg text-gray-300 hover:text-yellow-400">Contact</NavLink>
                    </nav>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="text-lg text-gray-300 hover:text-blue-500">Facebook</a>
                        <a href="https://twitter.com" className="text-lg text-gray-300 hover:text-blue-400">Twitter</a>
                        <a href="https://wa.me" className="text-lg text-gray-300 hover:text-green-500">WhatsApp</a>
                        <a href="https://instagram.com" className="text-lg text-gray-300 hover:text-pink-500">Instagram</a>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-gray-400">By FQM</p>
                </div>
            </footer>
        </>
    );
}
