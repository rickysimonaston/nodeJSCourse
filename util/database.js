const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Pa55word", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
