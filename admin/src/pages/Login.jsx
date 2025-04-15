import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets.js';
import { AdminContext } from '../Context/AdminContext.jsx';
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
    const [state, setState] = useState('Admin');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setAtoken, backendurl } = useContext(AdminContext);

    const onsubmithandler = async (e) => {
        e.preventDefault()

        try {
            if (state === 'Admin') {
                const { data } = await axios.post(backendurl + '/api/admin/login', { email, password })
                if (data.success) {
                    localStorage.setItem('admintoken', data.token)
                    setAtoken(data.token)
                    console.log("token: ", data.token)
                }
                else {
                    toast.error(data.message)
                }
            }
            else {

            }
        } catch (error) {

        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={onsubmithandler} className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
                <div>
                    <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
                        {state} Login
                    </h2>

                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            value={password}
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 cursor-pointer text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        {state === 'Admin' ? (
                            <>
                                Doctor Login?{' '}
                                <span
                                    onClick={() => setState('Doctor')}
                                    className="text-blue-600 hover:underline cursor-pointer"
                                >
                                    Click here
                                </span>
                            </>
                        ) : (
                            <>
                                Admin Login?{' '}
                                <span
                                    onClick={() => setState('Admin')}
                                    className="text-blue-600 hover:underline cursor-pointer"
                                >
                                    Click here
                                </span>
                            </>
                        )}
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
