const { DataTypes, sequelize } = require('../lib/index.js');

let employee = sequelize.define('employee', {
  name: DataTypes.TEXT,
  designation: DataTypes.TEXT,
  department: DataTypes.TEXT,
  salary: DataTypes.INTEGER,
});

module.exports = { employee };
