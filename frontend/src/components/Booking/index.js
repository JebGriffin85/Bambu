import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { thunk_getAllRes, thunk_addRes } from '../../store/reservation';
import { thunk_flipReservation } from '../../store/session';
import { getAvailableTables } from './util';
import dining2 from './alinea2.jpeg';
import Select from 'react-select';
import './booking.css';

export default function Booking () {
    const history = useHistory();
    const dispatch = useDispatch();
    const minDate = moment(new Date()).add(1, 'day')._d; //the date we start the calendar on, so you cant book same day
    const maxDate = moment(new Date()).add(3, 'month')._d; //only allows reservations made 3 months in advanced
    const [date, setDate] = useState(moment(new Date()).add(1, 'day')._d); 
    const [time, setTime] = useState(null);
    const [tableId, setTableId] = useState(null);
    const allRes = useSelector((state) => state.reservations.allReservations); //array of reservation objects
    const userId = useSelector((state) => state.session.user?.id);
    const user = useSelector((state) => state.session.user);
    let availableTables = getAvailableTables(allRes);
 

    //this is the format for react select package
    const timeOptions = [
    { value: 6, label: '6:00 pm' },
    { value: '7', label: '7:00 pm' },
    { value: '8', label: '8:00 pm' },
  ];

    const updateTableId = (e) => {
        setTableId(e.value)
    };

    const updateTime = (e) => {
        setTime(e.value);
    };
    
    //this maps our table id's to the correct text for our select menu
    let valueMap = {
        1: 'Table for One',
        2: 'Table for Two ',
        3: 'Table for Two (Chef\'s table)',
        4: 'Table for Four',
        5: 'Table for Four (Chef\'s table)',
        6: 'Table for Six',
        7: 'Table for Six (Chef\'s table)'
    };

    //returns an array of the correct format of available tables for the react select package
    const tableOptions = [];
    availableTables.map((table) => {
      return  tableOptions.push({value: table, label: valueMap[table]})
    });

    useEffect(() => {
        dispatch(thunk_getAllRes(moment(minDate).startOf('day')._d))
    },[dispatch]);
    
    //gets the reservations for a specific date when they click on calendar day
    function handleClick (date) {
        dispatch(thunk_getAllRes(date));
    };

    //add a new reservation and redirect
    async function handleAddReservation() {
        let newDate = moment(date).startOf('day')._d //sets the time to 00:00 to eliminate time logic in queries
        let reservation = {
            date: newDate,
            time,
            userId,
            tableId
        };
       dispatch(thunk_flipReservation(userId));
       dispatch(thunk_addRes(reservation));
       //put a timeout here because it was redirecting before the add reservation could finish
       setTimeout(() => {
           history.push('/my-reservation')
       }, 100)
    };

    return (
        <div>
<div className='m-auto max-w-6xl p-12'>
   <div className='flex flex-col md:flex-row'>
      <div className='md:w-1/2 max-w-md flex flex-col justify-center'>
         <div className='md:text-5xl text-2xl uppercase font-black pb-4'>Welcome to bambù</div>
         <div className='text-sm text-center pb-4'>We allow one booking per customer up to three months in advanced.</div>
         <div className='pb-4 '>
             <Calendar className='shadow-2xl '
                onChange={setDate}
                value={date}
                minDate={minDate}
                maxDate={maxDate}
                onClickDay={handleClick}
            />
            </div>
            <div className='pb-4 '>
              <Select className='w-72 shadow-2xl '
                placeholder='Select a Table...'
                value={tableId?.value}
                onChange={updateTableId}
                options={tableOptions}
            />
                    </div>
            <Select className='w-72 shadow-2xl'
                placeholder='Select a Time...'
                value={time?.value}
                onChange={updateTime}
                options={timeOptions}
            />
            {time && tableId && !user && 
                <div className='pt-4 '>Please Login to Make Reservation </div>
            }
            {time && tableId && !user?.hasReservation && user &&
         <div className='my-5 h-16'>
            <div className='shadow-md font-medium py-2 px-4 text-yellow-100
               cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48'  onClick={handleAddReservation}>Book A Table</div>
         </div>
            }
            {user?.hasReservation && 
                <div className='text-sm text-center pt-4'>Please go to <NavLink className='text-base underline' to='/my-reservation'>My Reservation</NavLink> to cancel existing reservation.</div>
            }
      </div>
      <div className='flex md:justify-end w-full md:w-1/2 -mt-5'>
         <div className='bg-dots'>
            <div className='shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4'>
               <img alt='card img' className='rounded-t' src={dining2}/> 
               <div className='text-xl p-10 bg-white'>Bambù has been universally praised for its innovative approach to modernist cuisine. It has been named the Best Restaurant in the World by Elite Traveler, the Best Restaurant in North America by The World’s 50 Best Restaurants, and the Best Restaurant in the U.S. by Gourmet and Business Insider. It is one of only 14 restaurants in the U.S. to earn the coveted Michelin 3-Star rating.</div>
            </div>
         </div>
      </div>
   </div>
</div>


            
        </div>
    )
}