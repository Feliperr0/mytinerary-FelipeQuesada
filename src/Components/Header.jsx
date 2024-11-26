import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import userIcon from '../assets/360_F_261902858_onbxqSHf193X4w7e8fdRH8vjjoT3vOVZ.jpg';
import AuthButtons from './AuthButtons';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { logout } from '../store/actions/LogActions';

export default function Header() {

    const location = useLocation();
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const user = useSelector((state) => state.auth.user);

    const handleLoginModalToggle = () => setShowLoginModal(prev => !prev);
    const handleRegisterModalToggle = () => setShowRegisterModal(prev => !prev);
    const handleLogout = () => dispatch(logout());

    useEffect(() => {
        if (isLoggedIn) {
            setShowLoginModal(false);
            setShowRegisterModal(false);
        }
    }, [isLoggedIn]);

    return (
        <>
            <header className="bg-gradient-to-r from-black via-purple-900 to-gray-900 text-white p-6 flex justify-between items-center relative shadow-xl border-b-4 border-yellow-500">
                <div className="flex items-center">
                    <img src={logo} alt="MyTinerary Logo" className="h-16 md:h-20 mr-4 rounded-full border-2 border-yellow-500 shadow-lg" />
                    <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-lg">MyTinerary</h1>
                </div>
                {!showMenu && (
                    <button className="block md:hidden" onClick={() => setShowMenu(!showMenu)}>
                        <svg className="h-8 w-8 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                )}
                <nav className={`fixed top-0 right-0 h-full bg-gray-900 bg-opacity-95 text-white p-6 w-2/3 transform ${showMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out z-40 flex flex-col items-center justify-center md:static md:flex md:w-auto md:h-auto md:bg-transparent md:p-0 md:translate-x-0`}>
                    <button onClick={() => setShowMenu(false)} className="absolute top-4 right-4 bg-yellow-500 text-white p-2 rounded-full z-50 md:hidden">
                        <svg className="h-8 w-8 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="flex flex-col md:flex-row w-full md:w-auto">
                        <NavLink to="/home" className={`text-xl font-bold mx-2 md:mx-4 hover:text-yellow-400 ${location.pathname === '/home' ? 'text-yellow-400' : 'text-white'}`}>
                            Home
                        </NavLink>
                        <NavLink to="/cities" className={`text-xl font-bold mx-2 md:mx-4 hover:text-yellow-400 ${location.pathname === '/cities' ? 'text-yellow-400' : 'text-white'}`}>
                            Cities
                        </NavLink>
                        <NavLink to="/about" className={`text-xl font-bold mx-2 md:mx-4 hover:text-yellow-400 ${location.pathname === '/about' ? 'text-yellow-400' : 'text-white'}`}>
                            About Us
                        </NavLink>
                        <NavLink to="/contact" className={`text-xl font-bold mx-2 md:mx-4 hover:text-yellow-400 ${location.pathname === '/contact' ? 'text-yellow-400' : 'text-white'}`}>
                            Contact
                        </NavLink>
                    </div>
                    {isLoggedIn && user ? (
                        <div className="flex items-center mt-4 md:mt-0">
                            <img src={user.photo || userIcon} alt="User Icon" className="h-10 w-10 md:h-12 md:w-12 rounded-full mx-2 md:mx-4 border-2 border-yellow-500" />
                            <div className="ml-2 md:ml-4">
                                <span className="text-lg md:text-xl font-bold text-yellow-400">{user.name}</span>
                                <br />
                                <span className="text-sm md:text-lg text-gray-300">{user.email}</span>
                            </div>
                        </div>
                    ) : (
                        <AuthButtons onLoginClick={handleLoginModalToggle} onRegisterClick={handleRegisterModalToggle} />
                    )}
                    {isLoggedIn && (
                        <button onClick={handleLogout} className="mt-4 text-lg md:text-xl bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out">
                            Sign Out
                        </button>
                    )}
                </nav>
            </header>
            {showLoginModal && <LoginForm onClose={handleLoginModalToggle} />}
            {showRegisterModal && <RegisterForm onClose={handleRegisterModalToggle} />}
        </>
    );
}
