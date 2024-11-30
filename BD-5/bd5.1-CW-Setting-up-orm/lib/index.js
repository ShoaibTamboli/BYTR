// /lib/index.js

let sq = require('sequelize');

let sequelize = new sq.Sequelize('sqlite:./database.sqlite');

/*
another way:

let sequelize = new sq.Sequelize({dialect: 'sqlite', storage: './datbase.sqlite});
*/
module.exports = { DataTypes: sq.DataTypes, sequelize };
