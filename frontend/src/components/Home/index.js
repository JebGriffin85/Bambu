import React from 'react';
import homePhoto from './bambuHome.jpeg'
import {useHistory} from 'react-router-dom'
import Navbar from '../Navbar'

export default function Home () {
    const history = useHistory();

    return (
        <div className=' w-full  h-screen '>
            <div className='absolute inset-x-0 top-2/4 text-gray-200 text-7xl pl-8'>Bambù
            <div className='pb-6'></div>
                <div class="shadow-md font-medium py-2 px-4 text-yellow-100
               cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48  " onClick={ () => history.push('/booking')}  >Book A Table</div>
            </div>
                <img src={homePhoto} alt='plated food' className=' w-full h-full object-cover ' />
        </div>


    )
}