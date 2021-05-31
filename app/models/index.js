const config = require("../config/config.js");
const { Sequelize, DataTypes, Op } = require("sequelize");
const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: config.db.DB_HOST,
  user: config.db.DB_USER,
  password: config.db.DB_PASS
});

connection.query(`CREATE DATABASE IF NOT EXISTS \`${config.db.DB_NAME}\`;`);

const sequelize = new Sequelize(
  config.db.DB_NAME,
  config.db.DB_USER,
  config.db.DB_PASS,
  {
    host: config.db.DB_HOST,
    dialect: config.db.dialect,
    operatorsAliases: "",

    poll: {
      max: config.db.pool.max,
      min: config.db.pool.min,
      acquire: config.db.pool.acquire,
      idle: config.db.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

db.rooms = require("./room.model")(sequelize, Sequelize, DataTypes);
db.bookings = require("./booking.model")(sequelize, Sequelize, DataTypes);

db.rooms.bookings = db.rooms.hasMany(db.bookings) 


module.exports = db;
