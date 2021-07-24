'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tables', [
      {
        numofseats: 1
      },
      {
        numofseats: 2
      },
      {
        numofseats: 2
      },
      {
        numofseats: 4
      },
      {
        numofseats: 4
      },
      {
        numofseats: 6
      },
      {
        numofseats: 6
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Tables', null, {});
  }
};
