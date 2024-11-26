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
                        className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-extrabold rounded-full shadow-2xl transform hover:scale-110 transition-transform duration-300 ease-in-out border-2 border-yellow-700"
                    >
                        Sign In
                    </button>
                    <button
                        onClick={onRegisterClick}
                        className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-extrabold rounded-full shadow-2xl transform hover:scale-110 transition-transform duration-300 ease-in-out border-2 border-red-800"
                    >
                        Register
                    </button>
                </>
            )}
        </div>
    );
};

export default AuthButtons;

