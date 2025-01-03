let { DataTypes, sequelize } = require('../lib/index.js');

let post = sequelize.define('post', {
  name: DataTypes.TEXT,
  author: DataTypes.TEXT,
  content: DataTypes.TEXT,
  title: DataTypes.TEXT,
});

module.exports = { post };
