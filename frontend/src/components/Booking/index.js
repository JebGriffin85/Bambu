import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Booking () {
    const [value, onChange] = useState(new Date());
     console.log(new Date().getMonth() + 3) 
    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
                minDate={new Date()}
                
                
            />
        </div>
    )
}