import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import userIcon from '../assets/360_F_261902858_onbxqSHf193X4w7e8fdRH8vjjoT3vOVZ.jpg';
import AuthButtons from './AuthButtons'; // Importa el componente AuthButtons
import LoginForm from './LoginForm'; // Importa el componente LoginForm

export default function Header() {
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Obtenemos el estado de autenticación

    const handleLoginModalToggle = () => setShowLoginModal(prev => !prev);

    useEffect(() => {
        if (isLoggedIn) {
            setShowLoginModal(false); // Cierra el modal cuando el usuario se haya logueado
        }
    }, [isLoggedIn]);

    return (
        <>
            <header className="bg-blue-500 text-white p-4 md:p-6 flex justify-between items-center relative">
                <div className="flex items-center">
                    <img src={logo} alt="MyTinerary Logo" className="h-10 md:h-12 mr-3" />
                    <h1 className="text-xl md:text-4xl font-bold">MyTinerary</h1>
                </div>
                {!showMenu && (
                    <button className="block md:hidden" onClick={() => setShowMenu(!showMenu)}>
                        <svg className="h-8 w-8 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                )}
                <nav className={`fixed text-center top-0 right-0 h-full bg-gray-500 bg-opacity-80 text-white p-4 w-[50vw] transform ${showMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40 flex flex-col items-center justify-center md:static md:flex md:w-auto md:h-auto md:bg-transparent md:p-0 md:translate-x-0`}>
                    <button onClick={() => setShowMenu(false)} className="absolute top-4 right-4 mr-8 bg-yellow-500 text-white p-2 rounded-full z-50 md:hidden">
                        <svg className="h-8 w-8 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="flex flex-col md:flex-row w-full md:w-auto">
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
                    </div>
                    <img src={userIcon} alt="User Icon" className="h-8 w-8 md:h-10 md:w-10 rounded-full mx-2 md:mx-4 mt-4 md:mt-0" />
                    <AuthButtons onLoginClick={handleLoginModalToggle} /> {/* Incluir AuthButtons */}
                </nav>
            </header>
            {showLoginModal && <LoginForm onClose={handleLoginModalToggle} />} {/* Mostrar LoginForm si showLoginModal es true */}
        </>
    );
}
