import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Transition } from "@headlessui/react";
import logo from './logo.png'
import LoginModal from '../LoginModal';
import * as sessionActions from '../../store/session';
import FAQModal from "../FAQ";
import FAQMobile from '../FAQ/mobileFAQ.js';
import LoginMobile from "../LoginModal/loginMobile.js";
import menu from './menu.pdf'

function Navbar() {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    function handleLogout() {
        dispatch(sessionActions.logout())
    }


    return (
        <div className=''>
            <nav className="bg-gray-800 ">
                <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 justify-between">
                    <div className="flex items-center justify-between h-12">
                        <div className="flex items-center">
                            <NavLink to='/' >
                                <div className="flex-shrink-0">

                                    <img
                                        className="h-8 w-8"
                                        src={logo}
                                        alt="Bambu Logo"
                                    />
                                </div>
                            </NavLink>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">

                                    <NavLink to='/gallery'
                                        className=" hover:bg-gray-700 text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                                        Gallery
                                    </NavLink>

                                    <FAQModal />

                                    <NavLink to='about'
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        About
                                    </NavLink>

                                    <NavLink to='booking'
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        Book A Table
                                    </NavLink>

                                    
                                    <a className="m-0 p-0 hover:bg-gray-700 text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                                     href={menu} without rel='noopener noreferrer' target='_blank'>
                                     Menu
                                    </a>
                                    
                                    {sessionUser ? <div onClick={handleLogout} className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</div> :
                                      
                                  <LoginModal />}
                                    {sessionUser?.hasReservation && 
                                    <NavLink to='my-reservation'
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        My Reservation
                                    </NavLink>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <NavLink
                                    to='/gallery'
                                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Gallery
                                </NavLink>

                                <div
                                   
                                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    <FAQMobile />
                                </div>

                                <NavLink
                                    to='/about'
                                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    About
                                </NavLink>

                                 <NavLink
                                    to='/booking'
                                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Book a Table
                                </NavLink>

                                <a className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                     href={menu} without rel='noopener noreferrer' target='_blank'>
                                     Menu
                                    </a>

                                {sessionUser ? <div onClick={handleLogout} className="cursor-pointer text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Logout</div> : <div
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                                > <LoginMobile />
                                </div>}
                                {sessionUser?.hasReservation &&
                                    <NavLink to='my-reservation'
                                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                                        My Reservation
                                    </NavLink>
                                }

                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
}

export default Navbar;