module.exports = {
  NODE_ENV: "development",
  PORT: 4600,

  /** DATABASE */
  db: {
    DB_HOST: "localhost",
    DB_USER: "root",
    DB_PASS: "password",
    DB_NAME: "roomschedule",
    dialect: "mysql",

    // pool is optional, it will be used for Sequelize connection pool configuration
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },

  /** AUTH KEY */
  auth: {
    secret: "our-secret-key"
  }
};
