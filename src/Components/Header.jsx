import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/360_F_261902858_onbxqSHf193X4w7e8fdRH8vjjoT3vOVZ.jpg'; // Asegúrate de tener tu logo en la carpeta de assets
import userIcon from '../assets/360_F_261902858_onbxqSHf193X4w7e8fdRH8vjjoT3vOVZ.jpg'; // Imagen de usuario genérico

export default function Header() {
    return (
        <>
            <div className="bg-blue-500 text-white p-6 text-center">
                <header className="bg-blue-500 text-white p-6 flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={logo} alt="MyTinerary Logo" className="h-12 mr-3" />
                        <h1 className="text-2xl font-bold">MyTinerary</h1>
                    </div>
                    <nav className="flex items-center">
                        <NavLink to="/cities" className="text-lg mr-6 hover:underline">Cities</NavLink>
                        <NavLink to="#" className="text-lg mr-6 hover:underline">About</NavLink>
                        <NavLink to="#" className="text-lg mr-6 hover:underline">Contact</NavLink>
                        <img src={userIcon} alt="User Icon" className="h-10 w-10 rounded-full" />
                    </nav>
                </header>
            </div>
        </>
    );
};

