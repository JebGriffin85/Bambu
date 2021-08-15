import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import signup from './signup.jpeg';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    // <form onSubmit={handleSubmit}>
      // <ul>
      //   {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      // </ul>
    //   <label>
    //     Email
    //     <input
          // type="text"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          // required
    //     />
    //   </label>
    //   <label>
    //     Username
    //     <input
    //       type="text"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //       required
    //     />
    //   </label>
    //   <label>
    //     Password
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />
    //   </label>
    //   <label>
    //     Confirm Password
    //     <input
    //       type="password"
    //       value={confirmPassword}
    //       onChange={(e) => setConfirmPassword(e.target.value)}
    //       required
    //     />
    //   </label>
    //   <button type="submit">Sign Up</button>
    // </form>




    <div className="flex min-h-screen bg-white">

        <div className="w-1/2 bg-cover md:block hidden" style={{backgroundImage:  `url(${signup})`}}></div>

        <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">

            <div className="text-left p-0 font-sans">
                
                <h1 className=" text-gray-800 text-3xl font-medium">Create an account for free</h1>
                <h3 className="p-1 text-gray-700">Creating an account will allow you to make reservations online</h3>
            </div>
            <form onSubmit={handleSubmit} className="p-0">
          <ul className='text-red-400 font-bold text-sm pl-2'>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
                <div className="mt-5">

                 
                    <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
                  className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Email"/>
                </div>
                <div className="mt-5">
                    <input 
              type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                    className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Username"/>
                </div>
                <div className="mt-5">
                    <input 
                     type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                    className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  " placeholder="Password"/>
                </div>
          <div className="mt-5">
            <input
              type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  " placeholder="Confirm Password" />
          </div>

                <div className="mt-10">
            <input type="submit" value="Sign up" className="cursor-pointer py-3 bg-yellow-600 hover:bg-yellow-500 text-white w-full font-bold rounded "/>
                </div>
            </form>
           
        </div>


    </div>

  );
}

export default SignupFormPage;