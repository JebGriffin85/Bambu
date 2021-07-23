import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

function LoginFormPage({setOpen}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

 

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    const handleDemo = () => {
        return dispatch(sessionActions.login({ credential: 'demo@demo.io', password:'password' }))
    }

    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-0" onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li className='m-0 p-0 pt-4 text-sm text-red-600' key={idx}>{error}</li>)}
                </ul>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Username or Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <button className=" bg-blue-100 hover:bg-blue-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">Log In</button>
                </div>
                <div className='text-center pt-3 content-center justify-center flex-col '>
                    <p>Don't have an account?</p>
                    <p onClick={handleDemo} className=" cursor-pointer bg-blue-100 hover:bg-blue-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                       >Demo Log In</p>
                       <div className='pt-3'>
                    <Link onClick={() => setOpen(false)} to='/signup' className="cursor-pointer bg-blue-100 hover:bg-blue-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >Sign Up</Link>
                    </div>
            </div>
            </form>
        </div>
    );
}

export default LoginFormPage;