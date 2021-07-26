import { csrfFetch } from './csrf';

const GET_ALL_RES = 'reservations/getAllRes';
const ADD_RES = 'reservations/addRes';

const addRes = (reservation) => ({
    type: ADD_RES,
    payload: reservation
});

export const thunk_addRes = (reservation) => async (dispatch) => {
    const { date,
        time,
        userId,
        tableId } = reservation;
        const res = await csrfFetch('/api/reservations', {
            method: 'POST',
            body: JSON.stringify({
                date, 
                time,
                userId,
                tableId
            })
        });
        const data = await res.json();
        dispatch(addRes(data));
        return res;
}

const getAllRes = (reservations) => ({

    type: GET_ALL_RES,
    payload: reservations
});


export const thunk_getAllRes = (date) => async (dispatch) => {
    const res = await fetch(`/api/reservations/${date}`)
    const data = await res.json();
    dispatch(getAllRes(data))
    return
}



const initialState = { allReservations: [] }
const reservationsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_RES:
            newState = Object.assign({}, state);
            newState.allReservations = action.payload;
            return newState;
        case ADD_RES:
            newState = Object.assign({}, state);
            newState.allReservations.push(action.payload);
            return newState;

        default:
            return state;
    }
}


export default reservationsReducer;