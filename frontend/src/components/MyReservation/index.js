import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunk_delMyRes, thunk_getMyRes } from '../../store/reservation'
import { thunk_flipReservation } from '../../store/session';
import moment from 'moment';
import food from './alineafood2.jpeg'
import food1 from './alineafood.jpeg'

export default function MyReservation () {
    const history = useHistory();
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user.id)
    const reservation = useSelector((state) => state.myReservation.myReservation)
    const [loaded, setLoaded] = useState(false)
    const date = moment(reservation.date).format('MMMM Do YYYY')
    // console.log(date)

    console.log(date)
    console.log(typeof(date))
    function handleDelete (id) {
        dispatch(thunk_delMyRes(id));
        dispatch(thunk_flipReservation(userId));
        history.push('/');
    };
    
    useEffect(() => {
        dispatch(thunk_getMyRes(userId));
    },[dispatch]);
    
 
    const resId = useSelector((state) => state?.myReservation?.myReservation?.id)


return (
    <>
    
    {/* <button onClick={() => handleDelete(resId)}>delete my reservation</button> */}

    <div className='h-screen'>
    <div class="w-full bg-center bg-cover h-3/6" style={{backgroundImage: `url(${food})`}}>
        <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
            <div class="text-center">
                <h1 class="text-2xl font-semibold text-white lg:text-3xl">Your reservation is confirmed for <span class="text-blue-300 ">{date}</span></h1>
            </div>
        </div>
    </div>

        <div class="w-full bg-center bg-cover h-3/6" style={{backgroundImage: `url(${food1})`}}>
        <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
            <div class="text-center">
                <h1 class="text-2xl font-semibold text-white  lg:text-3xl">You may cancel your reservation and book another time</h1>
                <button onClick={() => handleDelete(resId)} class=" px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-red-600 rounded-md lg:w-auto hover:bg-red-400 focus:outline-none focus:bg-blue-500">Cancel Reservation</button>
            </div>
        </div>
    </div>
        </div>
    </>
)
}