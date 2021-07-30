import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment, { min } from 'moment';
import { thunk_getAllRes, thunk_addRes } from '../../store/reservation';
import { thunk_flipReservation } from '../../store/session';
import { getAvailableTables } from './util';

export default function Booking () {
    const history = useHistory();
    const dispatch = useDispatch();
    const minDate = moment(new Date()).add(1, 'day')._d;
    const maxDate = moment(new Date()).add(3, 'month')._d;
    const [date, setDate] = useState(moment(new Date()).add(1, 'day')._d);
    const [time, setTime] = useState(6);
    const [tableId, setTableId] = useState(null);
    const [btnDisable, setBtnDisable] = useState(false)
    const allRes = useSelector((state) => state.reservations.allReservations);
    const userId = useSelector((state) => state.session.user?.id);
    const user = useSelector((state) => state.session.user);
    let availableTables = getAvailableTables(allRes);
    
    const updateTableId = (e) => {
        setTableId(e.target.value);
    };

    const updateTime = (e) => {
        setTime(e.target.value);
        console.log(parseInt(e.target.value))
    };

    console.log(tableId)
    
    let valueMap = {
        1: 'Table for One',
        2: 'Table for Two',
        3: 'Table for Two',
        4: 'Table for Four',
        5: 'Table for four',
        6: 'Table for Six',
        7: 'Table for Six'
    }
    
    useEffect(() => {
        dispatch(thunk_getAllRes(moment(minDate).startOf('day')._d))
        if (user) setBtnDisable(user.hasReservation)
        
    },[dispatch])
    
    function handleClick (date) {
        dispatch(thunk_getAllRes(date));
    };

    async function handleAddReservation() {
        let newDate = moment(date).startOf('day')._d
        let reservation = {
            date: newDate,
            time,
            userId,
            tableId
        };
       dispatch(thunk_flipReservation(userId));
       dispatch(thunk_addRes(reservation));
       dispatch(thunk_getAllRes(newDate));
       setBtnDisable(true)
       history.push('/my-reservation')
    };

    return (
        <div>
            <Calendar
                onChange={setDate}
                value={date}
                minDate={minDate}
                maxDate={maxDate}
                onClickDay={handleClick}
            />

            <button disabled={btnDisable} onClick={handleAddReservation} >Add Reservation</button>
            <p>tables available: </p>
            <select onChange={updateTableId}>
                {availableTables.map((table => 
                
                <option value={table}>{valueMap[table]}</option>
                ))}
            </select>
            <p>times available: </p>
            <div class="relative inline-flex">
            <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero" /></svg>
            <select className='border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none' onChange={updateTime} >
                <option value='6'> 6:00 pm </option>
                <option value='7'> 7:00 pm </option>
                <option value='8'> 8:00 pm </option>
            </select>
            </div>



<div className='grid grid-cols-2'>
    
</div>



            
        </div>
    )
}