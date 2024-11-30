let { DataTypes, sequelize } = require('../lib/index.js');

let post = sequelize.define('post', {
  name: DataTypes.TEXT,
  author: DataTypes.TEXT,
  title: DataTypes.INTEGER,
  content: DataTypes.TEXT,
});

module.exports = { post };
