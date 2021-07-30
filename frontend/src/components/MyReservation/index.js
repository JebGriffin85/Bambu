import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunk_delMyRes, thunk_getMyRes } from '../../store/reservation'
import { thunk_flipReservation } from '../../store/session';

export default function MyReservation () {
    const history = useHistory();
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user.id)
    const resId = useSelector((state) => state.myReservation.myReservation.id)
    

    function handleDelete (id) {
        console.log(id)
        dispatch(thunk_delMyRes(id))
        dispatch(thunk_flipReservation(userId))
        history.push('/')
    }
    useEffect(() => {
        dispatch(thunk_getMyRes(userId))
    })



return (
    <>
    <h2>hi</h2>
    <button onClick={() => handleDelete(resId)}>delete my reservation</button>
    </>
)
}