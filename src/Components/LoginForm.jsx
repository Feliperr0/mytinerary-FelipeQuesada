import { useState } from 'react';
import { login } from '../store/actions/AuthActions.js';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
      dispatch(login({email, password}))
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-yellow-400 mb-6">Login</h2>
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
    );
};

export default LoginForm;
