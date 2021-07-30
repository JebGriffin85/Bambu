import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { thunk_getMyRes } from '../../store/reservation'

export default function MyReservation () {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.session.user.id)
console.log(id)
    useEffect(() => {
        dispatch(thunk_getMyRes(id))
    })



return (
    <h2>hi</h2>
)
}