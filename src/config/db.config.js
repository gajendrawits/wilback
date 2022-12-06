const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

const config = require('./index');

dotenv.config();
console.log(config);
const sequelize = new Sequelize(config.DB.DATABASE, config.DB.USER, config.DB.PASSWORD,
  {
    dialect: 'postgres',
    host: config.DB.HOST,
    port: 5432,
    define: {
      timestamps: false,
    },
    protocol: 'postgres',
    dialectOptions: {
      ssl: true,
      native: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });

(async () => await sequelize.sync())();

module.exports = sequelize;
