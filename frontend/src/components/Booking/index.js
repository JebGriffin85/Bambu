import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

export default function Booking () {
    const [value, onChange] = useState(new Date());

     let maxDate = moment(new Date()).add(3, 'month')._d

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
                minDate={new Date()}
                maxDate={maxDate}
            />
        </div>
    )
}