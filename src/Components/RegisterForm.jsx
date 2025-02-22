import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/actions/LogActions';

const RegisterForm = ({ onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const dispatch = useDispatch();
    const { errorMessage, successMessage } = useSelector((state) => state.auth);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = { name, email, password, photo };
        try {
            await dispatch(register(userData)).unwrap();
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                onClose(); // Cerrar modal después de 5 segundos
            }, 4000);
        } catch (error) {
    
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-gray-800 rounded-lg shadow-lg border border-yellow-500 w-full max-w-md p-8 transition-all duration-300 ease-in-out transform hover:scale-105">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-200 hover:text-gray-400 text-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold text-center text-yellow-400 mb-6">Register</h2>
                {successMessage && showSuccess && (
                    <div className="bg-green-500 text-white p-2 rounded mb-4">
                        {successMessage}
                    </div>
                )}
                {errorMessage && !showSuccess && (
                    <div className="bg-red-500 text-white p-2 rounded mb-4">
                        {Array.isArray(errorMessage) ? (
                            <ul>
                                {errorMessage.map((msg, index) => (
                                    <li key={index}>{msg}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{errorMessage}</p>
                        )}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-yellow-200 mb-2">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 ease-in-out"
                            required
                        />
                    </div>
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
                    <div className="mb-4">
                        <label htmlFor="photo" className="block text-yellow-200 mb-2">Photo URL:</label>
                        <input
                            type="text"
                            id="photo"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 ease-in-out"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">Register</button>
                </form>
                {successMessage && showSuccess && (
                    <div className="mt-4 text-white">
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegisterForm;
