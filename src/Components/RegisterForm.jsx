import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = ({ onClose }) => {
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users/register', {
                name,
                photo,
                email,
                password
            });
            setMessage(response.data.message); // Mostrar el mensaje de éxito
            setError(null); // Limpiar los mensajes de error
        } catch (error) {
            setError(error.response?.data?.message || 'An unexpected error occurred.'); // Mostrar los mensajes de error
            setMessage(null); // Limpiar los mensajes de éxito
        }
    };

    console.log('RegisterForm renderizado');

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-gray-800 rounded-lg shadow-lg border border-yellow-500 w-full max-w-md p-8">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-200 hover:text-gray-400 text-2xl"
                >
                    &times; {/* Este es el símbolo de la 'X' */}
                </button>
                <h2 className="text-2xl font-bold text-center text-yellow-400 mb-6">Register</h2>
                {message && (
                    <div className="bg-green-500 text-white p-2 rounded mb-4">
                        {message}
                    </div>
                )}
                {error && (
                    <div className="bg-red-500 text-white p-2 rounded mb-4">
                        {error}
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
                            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
                            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
                            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
                            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
