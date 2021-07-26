import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment, { min } from 'moment';
import { thunk_getAllRes, thunk_addRes } from '../../store/reservation';

export default function Booking () {
    const dispatch = useDispatch();
    let minDate = moment(new Date()).add(1, 'day')._d
    let maxDate = moment(new Date()).add(3, 'month')._d
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(7);
    const [tableId, setTableId] = useState(5);
    const allRes = useSelector((state) => state.reservations.allReservations)
    const userId = useSelector((state) => state.session.user.id)


    function handleClick (date) {
        dispatch(thunk_getAllRes(date));
    }
    
    useEffect(() => {
        dispatch(thunk_getAllRes(date))
    }, [dispatch])

    function handleAddReservation() {
        let reservation = {
            date,
            time,
            userId,
            tableId
        };
       dispatch(thunk_addRes(reservation));
       handleClick(date);
        console.log(reservation) ;
    };
    
    
    // fetch('/api/reservations', {
        //     method: 'POST',
        //     headers: {
    //         "Content-Type": "application/json",
    //         "XSRF-TOKEN": `PS49bYQA-M_uMPHaQzJdWCbeQbQ13RXt47CU`
    //     },
    //     body: JSON.stringify({ date: '2021-08-17 00:00:00', time: 8, userId: 1, tableId: 4 })
    // }).then(res => res.json()).then(data => console.log(data));

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