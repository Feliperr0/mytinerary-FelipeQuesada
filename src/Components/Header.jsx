import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import userIcon from '../assets/360_F_261902858_onbxqSHf193X4w7e8fdRH8vjjoT3vOVZ.jpg'; 

export default function Header() {
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="bg-blue-500 text-white p-4 md:p-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center justify-between w-full md:w-auto">
                <div className="flex items-center">
                    <img src={logo} alt="MyTinerary Logo" className="h-10 md:h-12 mr-3" />
                    <h1 className="text-xl md:text-2xl font-bold">MyTinerary</h1>
                </div>
                <button className="block md:hidden" onClick={() => setShowMenu(!showMenu)}>
                    <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <nav className={`flex-col md:flex-row items-center mt-4 md:mt-0 w-full md:w-auto ${showMenu ? 'flex' : 'hidden'} md:flex`}>
                <NavLink to="/home" className={`text-base md:text-lg mx-2 md:mx-4 hover:underline ${location.pathname === '/home' ? 'font-bold' : ''}`}>
                    Home
                </NavLink>
                <NavLink to="/cities" className={`text-base md:text-lg mx-2 md:mx-4 hover:underline ${location.pathname === '/cities' ? 'font-bold' : ''}`}>
                    Cities
                </NavLink>
                <NavLink to="/about" className={`text-base md:text-lg mx-2 md:mx-4 hover:underline ${location.pathname === '/about' ? 'font-bold' : ''}`}>
                    About Us
                </NavLink>
                <NavLink to="/contact" className={`text-base md:text-lg mx-2 md:mx-4 hover:underline ${location.pathname === '/contact' ? 'font-bold' : ''}`}>
                    Contact
                </NavLink>
                <img src={userIcon} alt="User Icon" className="h-8 w-8 md:h-10 md:w-10 rounded-full mx-2 md:mx-4" />
            </nav>
        </header>
    );
}