import React from 'react';
import homePhoto from './bambuHome.jpeg'
import Navbar from '../Navbar'

export default function Home () {


    return (
        <>
        <Navbar className='fixed' />
            <div className='absolute w-full  h-screen '>
                <img src={homePhoto} alt='plated food' className=' w-full h-full object-cover ' />
        </div>
        <div>blah blah </div>
        </>

    )
}