const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.PG_DATABASE, 
    process.env.PG_USERNAME, 
    process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});


var AreaConhecimento = sequelize.define('area_conhecimento', {
  cd_area_conhecimento: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  }, 
  ds_area_conhecimento: {
      type: Sequelize.TEXT,
      allowNull: false
  }
}, {timestamps: false});

module.exports = AreaConhecimento;
