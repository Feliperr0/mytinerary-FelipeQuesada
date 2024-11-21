import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/LogActions';

const LoginForm = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login({ email, password }));
        onClose(); // Cerrar el modal después del login
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-gray-800 rounded-lg shadow-lg border border-yellow-500 w-full max-w-md p-8">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-200 hover:text-gray-400 text-2xl"
                >
                    &times; {/* Este es el símbolo de la 'X' */}
                </button>
                <h2 className="text-2xl font-bold text-center text-yellow-400 mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
