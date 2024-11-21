import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/LogActions.js';

const AuthButtons = ({ onLoginClick }) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="flex justify-center items-center space-x-4 mt-4">
            {!isLoggedIn && (
                <>
                    <button
                        onClick={onLoginClick}
                        className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                    >
                        Sign In
                    </button>
                    <button
                        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                    >
                        Register
                    </button>
                </>
            )}
            {isLoggedIn && (
                <button
                    onClick={handleLogout}
                    className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                    Sign Out
                </button>
            )}
        </div>
    );
};

export default AuthButtons;
