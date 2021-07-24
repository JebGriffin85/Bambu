'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reservations', [
        {
         date: '2021-08-18 12:51:00.759-05', 
         time: 7,
         userId: 1,
         tableId: 1
      },
        {
          date: '2021-08-18 12:51:00.759-05',
          time: 7,
          userId: 2,
          tableId: 2
        },
        {
          date: '2021-08-18 12:51:00.759-05',
          time: 7,
          userId: 3,
          tableId: 5
        },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reservations', null, {});
    
  }
};
