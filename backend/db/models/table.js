'use strict';
module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Table', {
    numofseats: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Table.associate = function(models) {
    Table.hasMany(models.Reservation, { foreignKey: 'tableId', onDelete: 'CASCADE' })
  };
  return Table;
};