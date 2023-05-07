const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "postgres",
  username: "postgres",
  password: "postgres",
  dialect: "postgres",
  host: "34.125.188.155",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.log(error);
}

module.exports = sequelize;

