'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }, 
    time: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tableId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Reservation.associate = function(models) {
    Reservation.belongsTo(models.Table, { foreignKey: 'tableId', onDelete: 'CASCADE' });
    Reservation.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' })
  };
  return Reservation;
};