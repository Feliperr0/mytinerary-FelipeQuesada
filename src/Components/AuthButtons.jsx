import React from 'react';
import { useSelector } from 'react-redux';

const AuthButtons = ({ onLoginClick, onRegisterClick }) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

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
                        onClick={onRegisterClick}
                        className="px-6 py-2 bg-red-500 hover:bg-red-800 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                    >
                        Register
                    </button>
                </>
            )}
        </div>
    );
};

export default AuthButtons;
