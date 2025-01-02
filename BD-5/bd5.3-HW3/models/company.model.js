const { DataTypes, sequelize } = require("../lib/index.js");
const company = sequelize.define("company", {
  name: DataTypes.STRING,
  industry: DataTypes.STRING,
  foundedYear: DataTypes.INTEGER,
  headQuarters: DataTypes.STRING,
  revenue: DataTypes.INTEGER,
});
module.exports = { company };
