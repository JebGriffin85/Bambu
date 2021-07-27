import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment, { min } from 'moment';
import { thunk_getAllRes, thunk_addRes } from '../../store/reservation';

export default function Booking () {
    const dispatch = useDispatch();
    const minDate = moment(new Date()).add(1, 'day')._d
    const maxDate = moment(new Date()).add(3, 'month')._d
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(7);
    const [tableId, setTableId] = useState(5);
    const allRes = useSelector((state) => state.reservations.allReservations)
    const userId = useSelector((state) => state.session.user?.id)


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
        </div>
    )
}