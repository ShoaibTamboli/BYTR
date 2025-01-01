const sq = require('sequelize');
const sequelize = new sq.Sequelize('sqlite:./database.sqlite');

module.exports = { DataTypes: sq.DataTypes, sequelize };
