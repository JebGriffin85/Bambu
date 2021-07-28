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

router.get('/getres/:id', asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id);
    const reservation = await Reservation.findOne({
        where: {userId},
        include: Table
    });
    return res.json(reservation);
}));

router.post('/',
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


module.exports = router;