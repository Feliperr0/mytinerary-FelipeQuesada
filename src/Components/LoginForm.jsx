import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, clearError } from '../store/actions/LogActions';

const LoginForm = ({ onClose, isModal = true }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    console.log("estado del auth", auth);

    const errorMessage = useSelector((state) => state.auth.errorMessage);

    useEffect(() => {
        return () => {
            dispatch(clearError()); // Limpia mensajes de error cuando el componente se desmonta o el modal se cierra (antes persistia entre modales, sepa por qué jaja)
        };
    }, [dispatch]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login({ email, password }));
    };


    const loginWithGoogle = () => {
        console.log("se ejecuta login");
        window.location.href = "http://localhost:8080/api/auth/signin/google";

    };

    return (
        <div className={`${isModal ? 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50' : 'w-full max-w-md mx-auto'}`}>
            <div className={`relative bg-gray-800 rounded-lg shadow-lg border border-yellow-500 p-8 ${isModal ? 'transform hover:scale-105' : 'mx-4 my-8'}`}>
                {isModal && (
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-200 hover:text-gray-400 text-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                        &times;
                    </button>
                )}
                <h2 className="text-2xl font-bold text-center text-yellow-400 mb-6">Login</h2>
                {errorMessage && (
                    <div className="bg-red-500 text-white p-2 rounded mb-4">
                        {errorMessage}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-yellow-200 mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 ease-in-out"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-yellow-200 mb-2">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 ease-in-out"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">Login</button>
                    <button
                        type="button"
                        onClick={loginWithGoogle}
                        className="w-full py-3 mt-4 bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 font-bold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 48 48">
                            <path fill="#EA4335" d="M24 9.5c3.5 0 6.1 1.2 8.1 3.3l6-6C34.6 3.4 29.9 1.5 24 1.5 14.7 1.5 7 7.5 4.1 15.5l7 5.4C12.6 15.6 17.8 9.5 24 9.5z"/>
                            <path fill="#4285F4" d="M46.9 24.5c0-1.6-0.1-3.2-0.4-4.7H24v9.1h13.1c-0.6 3-2.4 5.6-5 7.3l7.6 5.7C43.7 38.9 46.9 32.2 46.9 24.5z"/>
                            <path fill="#FBBC05" d="M9.1 28.7c-0.8-2.1-0.8-4.3-0.1-6.3l-7-5.4C-1.2 20.4 1.1 27.5 5.9 32.2L13 26.8C11.4 25.3 10.1 24 9.1 28.7z"/>
                            <path fill="#34A853" d="M24 46.5c6.5 0 12-2.1 16-5.8l-7.6-5.7c-2.3 1.6-5.2 2.6-8.4 2.6-6.2 0-11.5-4.2-13.4-9.7l-7.1 5.6C7.2 42.8 15.1 46.5 24 46.5z"/>
                        </svg>
                        Sign in with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
