import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import userIcon from '../assets/360_F_261902858_onbxqSHf193X4w7e8fdRH8vjjoT3vOVZ.jpg'; 

export default function Header() {
    const location = useLocation();

    return (
        <header className="bg-blue-500 text-white p-4 md:p-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
                <img src={logo} alt="MyTinerary Logo" className="h-10 md:h-12 mr-3" />
                <h1 className="text-xl md:text-2xl font-bold">MyTinerary</h1>
            </div>
            <nav className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
                <NavLink to="/home" className={`text-base md:text-lg mx-2 md:mx-4 hover:underline ${location.pathname === '/home' ? 'text-bold' : ''}`}>
                    Home
                </NavLink>
                <NavLink to="/cities" className="text-base md:text-lg mx-2 md:mx-4 hover:underline">
                    Cities
                </NavLink>
                <NavLink to="#" className="text-base md:text-lg mx-2 md:mx-4 hover:underline">
                    About Us
                </NavLink>
                <NavLink to="#" className="text-base md:text-lg mx-2 md:mx-4 hover:underline">
                    Contact
                </NavLink>
                <img src={userIcon} alt="User Icon" className="h-8 w-8 md:h-10 md:w-10 rounded-full mx-2 md:mx-4" />
            </nav>
        </header>
    );
}
