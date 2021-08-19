const express = require('express')
const asyncHandler = require('express-async-handler');
const { Reservation, Table, User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


const validateReservation = [
    check('date')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please select a date'),
    check('time')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a time.'),
    handleValidationErrors,
];

//gives us an array of objects of each reservation that day
/*[
    {
    "id": 118,
    "date": "2021-08-19T05:00:00.000Z",
    "time": 7,
    "userId": 1,
    "tableId": 2,
    "createdAt": "2021-08-18T23:23:51.082Z",
    "updatedAt": "2021-08-18T23:23:51.082Z"
    }
]*/
router.get('/:date', asyncHandler (async (req, res) => {
    const date = req.params.date;
    const dateReservations = await Reservation.findAll({
        where: { date },
        // include: Table
    });
    return res.json(dateReservations);
})
);

// returns an object with the reservation
/* {
"id": 120,
"date": "2021-08-19T05:00:00.000Z",
"time": 7,
"userId": 1,
"tableId": 2,
"createdAt": "2021-08-18T23:36:32.218Z",
"updatedAt": "2021-08-18T23:36:32.218Z"
} */
router.get('/getres/:id', asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id);
    const reservation = await Reservation.findOne({
        where: {userId},
        // include: Table
    });
    return res.json(reservation);
}));

router.post('/', validateReservation, 
    asyncHandler(async (req, res, next) => {
        const { date, time, userId, tableId } = req.body
        const addReservation = await Reservation.create({
            date,
            time,
            userId,
            tableId
        });
        return res.json(
            addReservation
        );
    })
);


router.delete('/', 
    asyncHandler (async (req, res, next) => {
        const id = req.body.id
        const reservation = await Reservation.findByPk(id)
        await reservation.destroy()
        return res.json({msg: 'success'})
    })
)


module.exports = router;