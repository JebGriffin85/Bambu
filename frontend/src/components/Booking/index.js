import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment, { min } from 'moment';
import { thunk_getAllRes, thunk_addRes } from '../../store/reservation';
import { thunk_flipReservation } from '../../store/session';
import { getAvailableTables } from './util';

export default function Booking () {
    const dispatch = useDispatch();
    const minDate = moment(new Date()).add(1, 'day')._d;
    const maxDate = moment(new Date()).add(3, 'month')._d;
    const [date, setDate] = useState(moment(new Date()).add(1, 'day')._d);
    const [time, setTime] = useState(7);
    const [tableId, setTableId] = useState(4);
    const allRes = useSelector((state) => state.reservations.allReservations);
    const userId = useSelector((state) => state.session.user?.id);
    let availableTables = getAvailableTables(allRes);
    
    const updateTableId = (e) => {
        setTableId(e.target.value)
    };

 console.log(availableTables)
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
       await dispatch(thunk_flipReservation(userId))
       await dispatch(thunk_addRes(reservation));
       await dispatch(thunk_getAllRes(newDate))
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
            {allRes.map((reservation) => {
                return (
                    <div>{reservation.date} number of seats: {reservation.Table.numofseats}</div>
                )
            })}
            <button onClick={handleAddReservation} >Add Reservation</button>
            <p>tables available: </p>
            <select onChange={updateTableId}>
                {availableTables.map((table => 
                
                <option value={table}>{valueMap[table]}</option>
                ))}
            </select>
        </div>
    )
}