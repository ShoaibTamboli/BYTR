const sq = require("sequelize");
const sequelize = new sq.Sequelize("sqlite:../BD-5.3HW3/database.sqlite");

module.exports = { DataTypes: sq.DataTypes, sequelize };
