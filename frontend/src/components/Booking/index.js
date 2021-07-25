import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment, { min } from 'moment';
import { thunk_getAllRes } from '../../store/reservation';

export default function Booking () {
    const dispatch = useDispatch();
    let minDate = moment(new Date()).add(1, 'day')._d
    let maxDate = moment(new Date()).add(3, 'month')._d
    const [value, setValue] = useState(new Date());
    const allRes = useSelector((state) => state.reservations.allReservations)

    function hanldeClick (value) {
         dispatch(thunk_getAllRes(value))
    }

useEffect(() => {
    dispatch(thunk_getAllRes(value))
})
    console.log(value)
    return (
        <div>
            <Calendar
                onChange={setValue}
                value={value}
                minDate={minDate}
                maxDate={maxDate}
                // onClick={() => hanldeClick()}
                onClick={() => dispatch(thunk_getAllRes(value))}
            />
            {/* {allRes.map((reservation) => {
                return (
                    <div>{reservation.date}{reservation.Table.numofseats}</div>
                )
            })} */}
        </div>
    )
}