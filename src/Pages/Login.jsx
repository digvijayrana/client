import React, { useState } from 'react';
import image from '/a1.webp';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';




const API_BASE_URL = 'http://localhost:4001/api/v1';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_BASE_URL}/user/login`, {
                email,
                password,
            });

            if (response.data.status === true) {
                setEmail('');
                setPassword('');

                navigate('/home')
           
            
                console.log('Login successful');
            } else {

                console.error('Login failed');
            }
        } catch (error) {

            console.error('Error during login:', error);
        }
    };


    return (
        <div className="flex h-screen bg-black">
            <div className="m-auto flex flex-col-reverse sm:flex-row bg-white shadow-md rounded-md overflow-hidden" style={{ height: '480px' }}>
                {/* Image Section */}
                <div className="hidden sm:block sm:w-1/2" style={{ width: '640px' }}>
                    <img src={image} alt="Login Background" className="object-cover w-full h-full" style={{ width: '100%', height: '100%' }} />
                </div>

                {/* Form Section */}
                <div className="p-8 sm:w-1/2 bg-blue-600 flex flex-col items-center justify-center">
                    <h2 className="text-center text-white font-semibold mb-2">Hyundai Safety Analytics</h2>
                    <p className="text-center text-white font-semibold m-6">Sign-in</p>
                    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                        <div className="m-8 relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">
                                <FaUser />
                            </span>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="pl-10 mt-1 p-2 w-full border placeholder-black rounded-md"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>

                        <div className="m-8 relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">
                                <FaLock />
                            </span>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                name="password"
                                className="pl-10 mt-1 p-2 w-full border placeholder-black rounded-md"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-yellow-500 font-semibold text-black p-3 rounded-md mt-6 hover:bg-yellow-600"
                                style={{ width: '120px' }}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
