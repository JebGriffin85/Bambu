const express = require('express')
const asyncHandler = require('express-async-handler');
const { Reservation, Table, User } = require('../../db/models');


const router = express.Router();



router.get('/:date', asyncHandler (async (req, res) => {
    const date = req.params.date;
    const dateReservations = await Reservation.findAll({
        where: { date },
        include: Table
    });
    return res.json(dateReservations);
})
);

router.post('/',
    asyncHandler(async (req, res, next) => {
        const { date, time, userId, tableId } = req.body
        console.log('----------------',date)
        const addReservation = await Reservation.create({
            date,
            time,
            userId,
            tableId
        })
        return res.json(
            addReservation
        )
    })
)


module.exports = router;